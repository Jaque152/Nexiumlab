"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  ArrowUpRight,
  Check,
  Plus,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

import {
  formatMXN,
  type ProductPlan,
} from "@/lib/products";

import { useLanguage } from "@/lib/language-context";

export function ProductCard({
  product,
  index,
}: {
  product: ProductPlan;
  index: number;
}) {
  const { add, open } = useCart();
  const { t, lang } = useLanguage();

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const data = product[lang];

  const taxText =
    lang === "es" ? "+ IVA" : "+ TAX";

  const handleAdd = () => {
    add(product);

    toast.success(
      t.store.addedToastTitle,
      {
        description: data.name,

        action: {
          label: t.store.viewCartBtn,
          onClick: () => open(),
        },
      }
    );
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(0,71,255,0.10)] sm:p-5">
      <span className="pointer-events-none absolute right-4 top-3 z-10 display text-4xl text-dark/10 transition-colors group-hover:text-primary/15">
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-light">
        <img
          src={product.imageUrl}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-primary backdrop-blur">
          MXN · {taxText}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="display text-xl leading-snug text-dark">
          {data.name}
        </h3>

        <p className="mt-2 line-clamp-2 font-mono text-[0.85rem] leading-relaxed text-dark/55">
          {data.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="display text-2xl text-primary">
              {formatMXN(
                product.priceMXN
              )}
            </p>

            <p className="mt-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-dark/40">
              MXN · {taxText}
            </p>
          </div>

          <Dialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          >
            <DialogTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-dark"
              >
                {t.store.cardDetails}

                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[92dvh] w-[95vw] max-w-2xl overflow-y-auto overflow-x-hidden rounded-3xl border border-black/10 bg-white p-0 shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:w-full [&>button]:right-4 [&>button]:top-4 [&>button]:z-50 [&>button]:rounded-full [&>button]:border [&>button]:border-black/10 [&>button]:bg-white [&>button]:p-1.5 [&>button]:text-dark">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-black/10 bg-light p-6 md:border-b-0 md:border-r">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                    <img
                      src={product.imageUrl}
                      alt={data.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <DialogTitle className="display mt-5 text-2xl leading-tight text-dark">
                    {data.name}
                  </DialogTitle>

                  <p className="mt-3 font-mono text-[0.85rem] leading-relaxed text-dark/60">
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-col bg-white p-6">
                  <p className="eyebrow">
                    {t.store.cardIncludes}
                  </p>

                  <ul className="mt-4 flex-1 space-y-3">
                    {data.features.map(
                      (feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 font-mono text-[0.85rem] text-dark/80"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-dark">
                            <Check className="h-3 w-3" />
                          </span>

                          {feature}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="mt-6 border-t border-black/10 pt-5">
                    <div className="flex items-end justify-between gap-4">
                      <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-dark/50">
                        {t.store.cardTotalIva}
                      </span>

                      <div className="text-right">
                        <span className="display block text-2xl text-primary">
                          {formatMXN(
                            product.priceMXN
                          )}
                        </span>

                        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-dark/40">
                          MXN · {taxText}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="mt-4 w-full rounded-full bg-primary font-bold text-white hover:bg-dark"
                      size="lg"
                      onClick={() => {
                        handleAdd();
                        setDialogOpen(false);
                      }}
                    >
                      {t.store.cardHire}

                      <Plus className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Button
          onClick={handleAdd}
          className="mt-5 w-full rounded-full border border-primary bg-primary text-white transition-all hover:bg-dark"
        >
          {t.store.cardHire}

          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
