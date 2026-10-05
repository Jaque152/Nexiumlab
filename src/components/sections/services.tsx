"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] container-px relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow inline-flex items-center gap-2">
            {t.services.eyebrow}
          </span>
          <Reveal>
            <h2 className="display mt-4 text-4xl text-dark sm:text-6xl">
              {t.services.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-dark/60">
              {t.services.desc}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.15}>
              <Link
                href="/servicios"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white border border-black/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-light text-xl font-black text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    {item.n}
                  </span>
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-dark/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end relative z-10">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-light text-dark transition-all group-hover:bg-accent group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
