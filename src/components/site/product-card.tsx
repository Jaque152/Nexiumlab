"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, CheckCircle2, Plus, ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { formatMXN, type ProductPlan } from "@/lib/products";
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
  const [dialogOpen, setDialogOpen] = useState(false);

  const data = product[lang];

  const handleAdd = () => {
    add(product);
    toast.success(t.store.addedToastTitle, {
      description: data.name,
      action: { label: t.store.viewCartBtn, onClick: () => open() },
    });
  };

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={product.imageUrl}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
          Plan {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
          {data.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {data.description}
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-3xl font-black text-indigo-600">
              {formatMXN(product.priceMXN)}
            </p>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mt-1">
              MXN · {lang === "es" ? "+ IVA" : "+ TAX"}
            </p>
          </div>
          
          {/* Modal / Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                aria-label="Ver detalles"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden rounded-[2rem] border-0 shadow-2xl bg-white [&>button]:text-slate-400 [&>button]:hover:text-slate-900 [&>button]:right-6 [&>button]:top-6 [&>button]:bg-white [&>button]:rounded-full [&>button]:p-2 [&>button]:shadow-sm">
              <div className="grid md:grid-cols-5 h-full max-h-[90vh] overflow-y-auto">
                {/* Imagen del modal */}
                <div className="md:col-span-2 relative h-64 md:h-auto bg-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={data.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Contenido del modal */}
                <div className="md:col-span-3 p-8 sm:p-12 flex flex-col">
                  <DialogTitle className="text-3xl font-extrabold text-slate-900 leading-tight">
                    {data.name}
                  </DialogTitle>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {data.description}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-slate-100 flex-1">
                    <p className="text-sm font-bold text-slate-900 mb-4">{t.store.cardIncludes}</p>
                    <ul className="space-y-4">
                      {data.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
                        {t.store.cardTotalIva}
                      </span>
                      <span className="text-3xl font-black text-slate-900">
                        {formatMXN(product.priceMXN * (1 + IVA_RATE))} <span className="text-lg text-indigo-600">MXN</span>
                      </span>
                    </div>
                    <Button
                      className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold px-8 h-12 shadow-lg shadow-indigo-200 transition-all hover:scale-105"
                      onClick={() => {
                        handleAdd();
                        setDialogOpen(false);
                      }}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      {t.store.cardHire}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Button 
          onClick={handleAdd} 
          className="mt-8 w-full bg-slate-900 text-white hover:bg-indigo-600 rounded-xl h-12 font-bold transition-all shadow-md"
        >
          {t.store.cardHire}
          <Plus className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </article>
  );
}