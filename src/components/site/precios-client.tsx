"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StoreGrid } from "@/components/site/store-grid";
import { useLanguage } from "@/lib/language-context";

export function PreciosClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-light text-dark">
      <section className="mesh-bg relative isolate overflow-hidden border-b border-black/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center container-px pb-14 pt-14 text-center sm:pt-24">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
            {t.pricingPage.eyebrow}
          </span>

          <h1 className="display mt-6 max-w-5xl text-balance text-5xl uppercase leading-[0.95] text-dark sm:text-7xl">
            {t.pricingPage.titlePart1}{" "}
            <span className="text-primary">{t.pricingPage.titlePart2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty font-mono text-[0.95rem] leading-relaxed text-dark/60">
            {t.pricingPage.desc}
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-8 rounded-full border-black/10 bg-white text-dark hover:border-primary/30 hover:text-primary"
          >
            <Link href="/servicios">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.pricingPage.backToServices}
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] container-px pb-20 pt-10 sm:pb-28">
        <StoreGrid />
      </section>
    </main>
  );
}
