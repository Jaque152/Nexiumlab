"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Lock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Loader2,
  Package,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { processCheckout, type CheckoutFormState, type CheckoutItem } from "@/app/actions/checkout";

// 1. Declaramos la función formatMXN localmente para evitar el error de importación
export function formatMXN(amount: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount);
}

// 2. Interfaz flexible para soportar tanto Paquetes (PricePlan) como Pagos Personalizados
interface FlexibleCartItem {
  product: {
    id?: string;
    nombre?: string;
    precio?: number;
    priceMXN?: number;
    imageUrl?: string;
    es?: { name: string; description?: string };
    en?: { name: string; description?: string };
  };
  qty: number;
}

const REQUIRED: (keyof CheckoutFormState)[] = [
  "nombre",
  "apellidos",
  "email",
  "telefono",
  "direccion",
  "ciudad",
  "estado",
  "cp",
  "card",
  "cardName",
  "exp",
  "cvc",
];

function Field({
  label,
  children,
  error,
  className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-semibold text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
        {n}
      </span>
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
    </div>
  );
}

// Estilos Clean SaaS para los inputs
const inputBase =
  "flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 placeholder:text-slate-400";

export function CheckoutClient() {
  const { items, subtotal, iva, total, hydrated, setQty, remove, clear } = useCart();
  const { t, lang } = useLanguage();
  
  const [form, setForm] = useState<Partial<CheckoutFormState>>({ pais: "México" });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<{ no: string; total: number } | null>(null);

  const update = (k: keyof CheckoutFormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const fmtCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const fmtExp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const validate = () => {
    const e: Partial<Record<keyof CheckoutFormState, string>> = {};
    for (const k of REQUIRED) if (!form[k]?.trim()) e[k] = t.checkout.requiredErr;
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = t.checkout.invalidEmail;
    if (form.cp && !/^\d{5}$/.test(form.cp)) e.cp = t.checkout.digits5;
    if (form.card && form.card.replace(/\s/g, "").length < 15)
      e.card = t.checkout.incompleteNum;
    if (form.exp && !/^\d{2}\/\d{2}$/.test(form.exp)) e.exp = "MM/AA";
    if (form.cvc && !/^\d{3,4}$/.test(form.cvc)) e.cvc = "3–4";
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (items.length === 0) return;
    
    if (!validate()) {
      toast(t.checkout.toastReview, { description: t.checkout.toastReviewDesc });
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    
    setLoading(true);

    // Mapeo seguro para enviar al backend (Soporta PricePlan o Pago Personalizado)
    const checkoutItems: CheckoutItem[] = (items as FlexibleCartItem[]).map((i) => {
      const p = i.product;
      const itemName = p.es?.name || p.nombre || "Servicio";
      const itemPrice = p.priceMXN ?? p.precio ?? 0;
      const itemId = p.id || itemName.toLowerCase().replace(/\s+/g, '-');

      return {
        product: {
          id: itemId,
          priceMXN: itemPrice,
          es: { name: itemName },
          en: { name: p.en?.name || itemName },
        },
        qty: i.qty,
      };
    });

    const result = await processCheckout({
      form: form as CheckoutFormState,
      items: checkoutItems,
      totals: { subtotal, iva, total },
      lang: lang as "es" | "en",
    });

    setLoading(false);

    if (result.success) {
      if (result.redirectTo) {
        window.location.href = result.redirectTo;
        return;
      }
      setOrder({ no: result.orderId!, total });
      clear();
      toast(t.checkout.toastConfirmed, { description: `${t.checkout.toastFolio} ${result.orderId}` });
    } else {
      toast.error("Error en el pago", { description: result.error });
    }
  };

  // VISTA: ORDEN COMPLETADA
  if (order) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-green-50 text-green-500 shadow-sm">
          <Check className="h-12 w-12" />
        </span>
        <h1 className="mt-8 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          {t.checkout.successThankYou}
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          {t.checkout.successDesc}
        </p>
        <div className="mx-auto mt-10 max-w-md rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {t.checkout.folioLabel}
            </span>
            <span className="font-mono text-sm font-bold text-slate-900">
              {order.no}
            </span>
          </div>
          <div className="flex items-center justify-between pt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {t.checkout.totalPaid}
            </span>
            <span className="text-3xl font-black text-indigo-600">
              {formatMXN(order.total)} <span className="text-lg">MXN</span>
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-8 font-bold">
            <Link href="/servicios">{t.checkout.exploreMore}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl h-12 px-8 font-bold border-slate-200 text-slate-700">
            <Link href="/">{t.checkout.backHome}</Link>
          </Button>
        </div>
      </div>
    );
  }

  // VISTA: CARRITO VACÍO
  if (hydrated && items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-slate-50 text-slate-300">
          <ShoppingBag className="h-10 w-10" />
        </span>
        <h1 className="mt-8 text-4xl font-extrabold text-slate-900">
          {t.checkout.emptyTitle}
        </h1>
        <p className="mt-4 text-slate-600">
          {t.checkout.emptyDesc}
        </p>
        <Button asChild className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-8 font-bold shadow-md">
          <Link href="/servicios">
            {t.checkout.viewServices}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  // VISTA: CHECKOUT PRINCIPAL
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8 bg-slate-50 min-h-screen">
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
          {t.checkout.eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          {t.checkout.title}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid gap-8 lg:grid-cols-[1fr_0.8fr] xl:gap-12"
      >
        <div className="space-y-6">
          
          {/* 01. CONTACTO */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-10 shadow-sm">
            <SectionTitle n="01" title={t.checkout.contactSec} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.checkout.name} error={errors.nombre}>
                <Input
                  data-error={!!errors.nombre}
                  value={form.nombre || ""}
                  onChange={(e) => update("nombre", e.target.value)}
                  placeholder={t.checkout.name}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.lastName} error={errors.apellidos}>
                <Input
                  value={form.apellidos || ""}
                  onChange={(e) => update("apellidos", e.target.value)}
                  placeholder={t.checkout.lastName}
                  className={inputBase}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input
                  type="email"
                  value={form.email || ""}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="tu@correo.com"
                  className={inputBase}
                />
              </Field>
              <Field label={t.contact.phone} error={errors.telefono}>
                <Input
                  value={form.telefono || ""}
                  onChange={(e) => update("telefono", e.target.value)}
                  placeholder="+52 ..."
                  className={inputBase}
                />
              </Field>
            </div>
          </div>

          {/* 02. FACTURACIÓN */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-10 shadow-sm">
            <SectionTitle n="02" title={t.checkout.billingSec} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.checkout.company}>
                <Input
                  value={form.empresa || ""}
                  onChange={(e) => update("empresa", e.target.value)}
                  placeholder={t.checkout.companyPlaceholder}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.rfc}>
                <Input
                  value={form.rfc || ""}
                  onChange={(e) => update("rfc", e.target.value.toUpperCase())}
                  placeholder="XAXX010101000"
                  className={inputBase}
                />
              </Field>
              <Field
                label={t.checkout.address}
                error={errors.direccion}
                className="sm:col-span-2"
              >
                <Input
                  value={form.direccion || ""}
                  onChange={(e) => update("direccion", e.target.value)}
                  placeholder={t.checkout.addressPlaceholder}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.city} error={errors.ciudad}>
                <Input
                  value={form.ciudad || ""}
                  onChange={(e) => update("ciudad", e.target.value)}
                  placeholder={t.checkout.city}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.state} error={errors.estado}>
                <Input
                  value={form.estado || ""}
                  onChange={(e) => update("estado", e.target.value)}
                  placeholder={t.checkout.state}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.zip} error={errors.cp}>
                <Input
                  value={form.cp || ""}
                  onChange={(e) =>
                    update("cp", e.target.value.replace(/\D/g, "").slice(0, 5))
                  }
                  placeholder="06700"
                  inputMode="numeric"
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.country}>
                <select
                  value={form.pais || "México"}
                  onChange={(e) => update("pais", e.target.value)}
                  className={inputBase}
                >
                  <option>México</option>
                  <option>Estados Unidos</option>
                  <option>Colombia</option>
                  <option>Argentina</option>
                  <option>España</option>
                </select>
              </Field>
            </div>
          </div>

          {/* 03. PAGO SEGURO */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <SectionTitle n="03" title={t.checkout.paymentSec} />
            
            {/* LOGOS ETOMIN ACTUALIZADOS */}
            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <Lock className="h-4 w-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Transacción protegida por <strong className="text-slate-900">Etomin</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img 
                  src="/etomin_secbadge.svg" 
                  alt="Etomin Security Badge" 
                  className="h-6 w-auto object-contain" 
                />
                <img 
                  src="/etomin_logo.svg" 
                  alt="Etomin Logo" 
                  className="h-5 w-auto object-contain" 
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label={t.checkout.cardNumber}
                error={errors.card}
                className="sm:col-span-2"
              >
                <Input
                  value={form.card || ""}
                  onChange={(e) => update("card", fmtCard(e.target.value))}
                  placeholder="4242 4242 4242 4242"
                  inputMode="numeric"
                  className={inputBase}
                />
              </Field>
              <Field
                label={t.checkout.cardName}
                error={errors.cardName}
                className="sm:col-span-2"
              >
                <Input
                  value={form.cardName || ""}
                  onChange={(e) => update("cardName", e.target.value)}
                  placeholder={t.checkout.cardNamePlaceholder}
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.exp} error={errors.exp}>
                <Input
                  value={form.exp || ""}
                  onChange={(e) => update("exp", fmtExp(e.target.value))}
                  placeholder="MM/AA"
                  inputMode="numeric"
                  className={inputBase}
                />
              </Field>
              <Field label="CVV" error={errors.cvc}>
                <Input
                  type="password"
                  value={form.cvc || ""}
                  onChange={(e) =>
                    update("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                  placeholder="***"
                  inputMode="numeric"
                  className={inputBase}
                />
              </Field>
              <Field label={t.checkout.notes} className="sm:col-span-2">
                <Textarea
                  value={form.notas || ""}
                  onChange={(e) => update("notas", e.target.value)}
                  placeholder={t.checkout.notesPlaceholder}
                  rows={3}
                  className={`${inputBase} h-auto py-3 resize-none`}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* RESUMEN DEL PEDIDO */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6">{t.checkout.summaryEyebrow}</h3>

            <div className="max-h-[340px] space-y-5 overflow-y-auto pr-2">
              {(items as FlexibleCartItem[]).map(({ product, qty }, idx) => {
                const name = product.es?.name || product.nombre || "Servicio / Plan";
                const price = product.priceMXN ?? product.precio ?? 0;
                const id = product.id || `item-${idx}`;
                
                return (
                  <div key={id} className="flex gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                       {product.imageUrl ? (
                         <img src={product.imageUrl} alt={name} className="h-full w-full object-cover" />
                       ) : (
                         <Package className="h-6 w-6 text-slate-300" />
                       )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-slate-900">
                        {name}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setQty(id, qty - 1)}
                            className="grid h-7 w-7 place-items-center text-slate-400 hover:text-indigo-600 transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-slate-700">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(id, qty + 1)}
                            className="grid h-7 w-7 place-items-center text-slate-400 hover:text-indigo-600 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-indigo-600">
                          {formatMXN(price * qty)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(id)}
                      className="self-start p-1 text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <dl className="mt-8 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
              <div className="flex justify-between font-medium">
                <dt>{t.cart.subtotal}</dt>
                <dd>{formatMXN(subtotal)}</dd>
              </div>
              <div className="flex justify-between font-medium">
                <dt>IVA ({Math.round(IVA_RATE * 100)}%)</dt>
                <dd>{formatMXN(iva)}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-100 pt-4">
                <dt className="text-base font-bold text-slate-900">
                  {t.cart.total}
                </dt>
                <dd className="text-3xl font-black text-indigo-600">
                  {formatMXN(total)} <span className="text-sm">MXN</span>
                </dd>
              </div>
            </dl>

            <Button
              type="submit"
              className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-14 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]"
              disabled={loading || items.length === 0}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  {t.checkout.processing}
                </>
              ) : (
                <>
                  {t.checkout.placeOrder}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </>
              )}
            </Button>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Lock className="h-3.5 w-3.5" />
              {t.checkout.protected}
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}