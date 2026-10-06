"use client";

import Link from "next/link";
import { ArrowRight, Search, Zap, PieChart, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();
  const stepIcons = [Search, Zap, PieChart, Wrench];

  return (
    <section id="proceso" className="relative overflow-hidden bg-light py-24 sm:py-32 border-t border-black/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] container-px grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
        
        {/* Lado Izquierdo: Títulos pegajosos */}
        <div className="lg:sticky lg:top-40 self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-black/5 shadow-sm text-[0.75rem] font-bold uppercase tracking-widest text-accent mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {t.process.eyebrow}
          </span>
          <h2 className="display text-5xl font-black text-dark sm:text-6xl leading-[1.1]">
            {t.process.titlePart1}<br />
            <span className="text-primary">{t.process.titlePart2}</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-dark/60 leading-relaxed max-w-md">
            {t.process.desc}
          </p>
          
          <div className="mt-10">
            <Button asChild className="rounded-full bg-dark text-white font-black px-8 py-6 text-md hover:bg-accent hover:text-dark transition-all shadow-lg hover:-translate-y-1">
              <Link href="/personalizado">
                {t.process.ctaBtn}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Lado Derecho: Grid de 4 pasos estilo cristal */}
        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          {t.process.steps.map((s: any, i: number) => {
            const Icon = stepIcons[i];
            return (
              <div 
                key={s.n} 
                className={`group rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,71,255,0.1)] hover:-translate-y-2 ${i % 2 !== 0 ? 'sm:mt-16' : ''}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-light text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm font-bold text-dark/20 bg-light px-3 py-1 rounded-full group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    Paso {s.n}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-dark mb-4">
                  {s.title}
                </h3>
                <p className="text-dark/60 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}