"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, FileText, Lock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useCart } from "@/lib/cart-context";

// 1. Interfaz local fuertemente tipada para el producto personalizado
export interface CustomPaymentProduct {
  id: string;
  priceMXN: number;
  taxIncluded: boolean;
  currency: string;
  imageUrl: string;
  es: {
    name: string;
    description: string;
    features: string[];
  };
  en: {
    name: string;
    description: string;
    features: string[];
  };
}

type Fields = "nombre" | "correo" | "referencia" | "monto";
type FormState = Record<Fields, string>;

const EMPTY: FormState = {
  nombre: "", correo: "", referencia: "", monto: "",
};

export function PagoPersonalizadoClient() {
  const { t } = useLanguage();
  const { add, open } = useCart();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const update = (k: Fields, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = t.customPayment.errName;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.correo)) e.correo = t.customPayment.errEmail;
    if (!form.referencia.trim()) e.referencia = t.customPayment.errRef;
    
    const amountVal = parseFloat(form.monto);
    if (isNaN(amountVal) || amountVal <= 0) e.monto = t.customPayment.errAmount;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const customProduct: CustomPaymentProduct = {
      id: `custom-payment-${Date.now()}`,
      priceMXN: parseFloat(form.monto),
      taxIncluded: false,
      currency: "MXN + IVA",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", 
      es: {
        name: `${form.referencia}`,
        description: `Cliente: ${form.nombre} | Email: ${form.correo}`,
        features: ["Servicio personalizado", "Procesamiento encriptado"],
      },
      en: {
        name: `${form.referencia}`,
        description: `Client: ${form.nombre} | Email: ${form.correo}`,
        features: ["Custom service", "Encrypted processing"],
      },
    };

    // 2. MEJOR PRÁCTICA (CERO ANY): Usamos Parameters<typeof add>[0]
    // Esto obliga al parámetro a amoldarse dinámicamente al primer argumento
    // que la función `add` requiere dentro de `useCart`, sea cual sea ese tipo.
    add(customProduct as Parameters<typeof add>[0]);
    
    open();
    toast.success(t.customPayment.toastAdded);
    setForm(EMPTY);
  };

  const inputBase = "w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 font-medium placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-slate-50 flex flex-col items-center justify-center py-20 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative z-10 text-center max-w-xl mx-auto mb-10">
        <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
          <FileText className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          {t.customPayment.title2}
        </h1>
        <p className="text-slate-600">
          {t.customPayment.desc}
        </p>
      </div>

      <div className="relative z-10 w-full max-w-lg bg-white rounded-[2rem] shadow-2xl shadow-indigo-100/50 border border-slate-100 p-8 sm:p-10 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-indigo-600" />

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 mb-8">
            <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
              {t.customPayment.amountLabel}
            </label>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-medium text-slate-400">$</span>
              <input
                type="number"
                step="0.01"
                min="1"
                placeholder="0.00"
                value={form.monto}
                onChange={(e) => update("monto", e.target.value)}
                className="w-full max-w-[200px] bg-transparent text-5xl sm:text-6xl font-black text-slate-900 text-center outline-none placeholder:text-slate-300"
              />
              <span className="text-xl font-bold text-slate-400 mt-4">MXN</span>
            </div>
            {errors.monto && <p className="mt-3 text-xs font-bold text-red-500">{errors.monto}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 ml-1">{t.customPayment.nameLabel}</label>
              <input type="text" className={inputBase} value={form.nombre} onChange={(e) => update("nombre", e.target.value)} />
              {errors.nombre && <p className="mt-1 ml-1 text-xs text-red-500 font-semibold">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 ml-1">{t.customPayment.emailLabel}</label>
              <input type="email" className={inputBase} value={form.correo} onChange={(e) => update("correo", e.target.value)} />
              {errors.correo && <p className="mt-1 ml-1 text-xs text-red-500 font-semibold">{errors.correo}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 ml-1">{t.customPayment.refLabel}</label>
            <input type="text" className={inputBase} value={form.referencia} onChange={(e) => update("referencia", e.target.value)} placeholder="Ej. Anticipo Proyecto Web" />
            {errors.referencia && <p className="mt-1 ml-1 text-xs text-red-500 font-semibold">{errors.referencia}</p>}
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-slate-900 hover:bg-indigo-600 text-white rounded-xl py-4 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            {t.customPayment.button}
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
            <Lock className="w-4 h-4 text-slate-300" />
            {t.customPayment.note2}
          </div>
        </form>
      </div>
    </section>
  );
}