"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export function CartDrawer() {
  const { items, count, subtotal, iva, total, isOpen, close, setQty, remove, clear } = useCart();
  const { t, lang } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && close()}>
      <SheetContent
        side="right"
        className="bg-white/90 backdrop-blur-2xl flex w-full flex-col gap-0 border-l border-black/5 p-0 text-dark sm:max-w-md [&>button]:!text-dark/40 [&>button]:hover:!text-dark shadow-2xl"
      >
        <SheetHeader className="border-b border-black/5 px-6 py-5 text-left bg-white/50">
          <SheetTitle className="flex items-center gap-3 text-dark">
            <span className="font-bold text-primary uppercase tracking-widest text-xs">{t.cart.title}</span>
            <span className="font-mono text-xs text-dark/40 font-semibold bg-light px-2 py-0.5 rounded-full">
              {String(count).padStart(2, "0")}
            </span>
          </SheetTitle>
          <p className="display text-2xl font-black text-dark">
            {t.cart.selection}
          </p>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center bg-light/30">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white shadow-sm border border-black/5">
              <ShoppingBag className="h-8 w-8 text-primary/40" />
            </div>
            <div className="space-y-2">
              <p className="display text-2xl text-dark">
                {t.cart.emptyTitle}
              </p>
              <p className="text-sm text-dark/50 font-medium">
                {t.cart.emptyDesc}
              </p>
            </div>
            <Button asChild onClick={close} className="rounded-full bg-dark text-white hover:bg-primary shadow-lg mt-4">
              <Link href="/servicios">
                {t.cart.viewServices}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-black/5 overflow-y-auto px-6 bg-light/30">
              {items.map(({ product, qty }) => {
                const data = product[lang];
                return (
                  <div key={product.id} className="flex gap-4 py-6">
                    <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm">
                      <img src={product.imageUrl} alt={data.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[0.65rem] uppercase tracking-widest text-primary mb-1">
                        {product.currency}
                      </p>
                      <p className="display truncate text-lg font-bold leading-tight text-dark">
                        {data.name}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full bg-white border border-black/5 shadow-sm">
                          <button onClick={() => setQty(product.id, qty - 1)} className="grid h-8 w-8 place-items-center rounded-full text-dark/50 hover:text-primary transition-colors">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center font-bold text-sm text-dark">
                            {qty}
                          </span>
                          <button onClick={() => setQty(product.id, qty + 1)} className="grid h-8 w-8 place-items-center rounded-full text-dark/50 hover:text-primary transition-colors">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-sm text-dark">
                          {formatMXN(product.priceMXN * qty)} <span className="text-[0.6rem] text-dark/40 font-medium">+ IVA</span>
                        </span>
                      </div>
                    </div>
                    <button onClick={() => remove(product.id)} className="self-start p-2 text-dark/20 hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 border-t border-black/5 bg-white px-6 py-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-10">
              <dl className="space-y-2 font-medium text-sm">
                <div className="flex justify-between text-dark/60">
                  <dt>{t.cart.subtotal}</dt>
                  <dd className="font-bold text-dark">{formatMXN(subtotal)} MXN</dd>
                </div>
                <div className="flex justify-between text-dark/60">
                  <dt>IVA ({Math.round(IVA_RATE * 100)}%)</dt>
                  <dd className="font-bold text-dark">{formatMXN(iva)} MXN</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-black/5 pt-4 text-dark">
                  <dt className="display text-lg font-bold">
                    {t.cart.total}
                  </dt>
                  <dd className="display text-2xl font-black text-primary">
                    {formatMXN(total)} <span className="text-sm text-dark/40">MXN</span>
                  </dd>
                </div>
              </dl>
              <Button asChild size="lg" className="w-full bg-accent text-dark font-black hover:bg-primary hover:text-white rounded-full shadow-lg transition-all hover:scale-[1.02]" onClick={close}>
                <Link href="/checkout">
                  {t.cart.checkoutBtn}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <button onClick={clear} className="block w-full text-center font-bold text-[0.7rem] uppercase tracking-widest text-dark/40 hover:text-dark transition-colors">
                {t.cart.clearBtn}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}