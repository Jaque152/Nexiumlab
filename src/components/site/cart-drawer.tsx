"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight, Package } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";

// 1. Declaramos formatMXN localmente
export function formatMXN(amount: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount);
}

// 2. Definimos las interfaces estrictas para tipar los elementos del carrito
export interface CartProduct {
  id?: string;
  nombre?: string;
  precio?: number;
  priceMXN?: number;
  imageUrl?: string;
  es?: { 
    name: string; 
    description?: string 
  };
  en?: { 
    name: string; 
    description?: string 
  };
}

export interface FlexibleCartItem {
  product: CartProduct;
  qty: number;
}

export function CartDrawer() {
  const { isOpen, close, items, subtotal, iva, total, setQty, remove, clear } = useCart();
  const { t } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && close()}>
      <SheetContent className="flex w-full flex-col bg-slate-50 p-0 sm:max-w-md border-l border-slate-200 shadow-2xl">
        
        {/* Cabecera del Carrito */}
        <SheetHeader className="border-b border-slate-200 bg-white px-6 py-5 shadow-sm">
          <SheetTitle className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
            <ShoppingBag className="h-5 w-5 text-indigo-600" />
            {t.cart.title}
            <span className="ml-2 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-600">
              {items.length}
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Estado Vacío */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 grid h-24 w-24 place-items-center rounded-full bg-white shadow-sm border border-slate-100">
              <ShoppingBag className="h-10 w-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.cart.emptyTitle}</h3>
            <p className="text-slate-500 mb-8 max-w-[250px] mx-auto">
              {t.cart.emptyDesc}
            </p>
            <Button
              onClick={close}
              asChild
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl h-12 px-8 shadow-md"
            >
              <Link href="/servicios">
                {t.cart.viewServices}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Lista de Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* 3. Reemplazamos 'any' casteando el arreglo a nuestra nueva interfaz estricta */}
              {(items as unknown as FlexibleCartItem[]).map((i, idx) => {
                const p = i.product;
                
                // Mapeo seguro con coalescencia nula
                const name = p.es?.name || p.nombre || "Servicio / Plan";
                const price = p.priceMXN ?? p.precio ?? 0;
                const id = p.id || `item-${idx}`;

                return (
                  <div key={id} className="flex gap-4 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={name} className="h-full w-full object-cover" />
                      ) : (
                        <Package className="h-6 w-6 text-slate-300" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="line-clamp-2 text-sm font-bold text-slate-900 leading-tight">
                          {name}
                        </h4>
                        <button
                          onClick={() => remove(id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          aria-label={t.cart.removeAria || "Eliminar"}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-lg bg-slate-50 border border-slate-200">
                          <button
                            onClick={() => setQty(id, i.qty - 1)}
                            className="grid h-7 w-7 place-items-center text-slate-500 hover:text-indigo-600 transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-slate-700">
                            {i.qty}
                          </span>
                          <button
                            onClick={() => setQty(id, i.qty + 1)}
                            className="grid h-7 w-7 place-items-center text-slate-500 hover:text-indigo-600 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-black text-indigo-600 text-sm">
                          {formatMXN(price * i.qty)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resumen Final / Checkout */}
            <div className="bg-white border-t border-slate-200 p-6 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <dl className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between font-medium">
                  <dt>{t.cart.subtotal}</dt>
                  <dd>{formatMXN(subtotal)}</dd>
                </div>
                <div className="flex justify-between font-medium">
                  <dt>IVA ({Math.round(IVA_RATE * 100)}%)</dt>
                  <dd>{formatMXN(iva)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <dt className="text-base font-bold text-slate-900">{t.cart.total}</dt>
                  <dd className="text-2xl font-black text-indigo-600">
                    {formatMXN(total)} <span className="text-xs">MXN</span>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  onClick={close}
                  asChild
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-bold h-14 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]"
                >
                  <Link href="/checkout">{t.cart.checkoutBtn}</Link>
                </Button>
                <button
                  onClick={clear}
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 py-2 transition-colors"
                >
                  {t.cart.clearBtn}
                </button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}