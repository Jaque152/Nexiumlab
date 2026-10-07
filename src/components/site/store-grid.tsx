"use client";

import { webPlans } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";
import { ProductCard } from "./product-card";

export function StoreGrid() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex flex-col gap-3 border-y border-black/10 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
            {String(webPlans.length).padStart(2, "0")}{" "}
            {t.store.plansCountLabel}
          </p>

          <h2 className="display mt-2 text-2xl text-dark sm:text-3xl">
            {t.pricingPage.catalogTitle}
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-dark/55">
          {t.pricingPage.catalogDesc}
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {webPlans.map((plan, index) => (
          <ProductCard
            key={plan.id}
            product={plan}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
