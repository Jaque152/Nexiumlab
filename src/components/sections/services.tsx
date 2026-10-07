"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

interface ServiceItem {
  n: string;
  title: string;
  desc: string;
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] container-px">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-primary rounded-sm" />
              {t.services.eyebrow}
            </span>
            <Reveal>
              <h2 className="display mt-6 text-balance text-4xl font-bold leading-[1.1] text-dark sm:text-5xl lg:text-6xl">
                {t.services.title}
              </h2>
            </Reveal>
          </div>
          <p className="max-w-sm text-pretty text-[0.95rem] leading-relaxed text-dark/70 font-medium border-l-2 border-primary/30 pl-4">
            {t.services.desc}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item: ServiceItem, i: number) => (
            <Reveal key={item.n} delay={i * 0.1}>
              <Link
                href="/servicios"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] glass-panel p-8 transition-all hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(0,71,255,0.08)] hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-[40px] transition-all group-hover:bg-primary/10" />
                
                <div className="relative z-10">
                  <span className="font-mono text-sm font-bold text-primary/50 group-hover:text-primary transition-colors">
                    {item.n}
                  </span>
                  <h3 className="display mt-5 text-2xl font-bold text-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-dark/70 font-medium">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-10 flex justify-end relative z-10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-primary border border-border shadow-sm transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
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

export default Services;
