"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-14 container-px lg:grid-cols-2 lg:items-center">
        
        {/* Terminal Dark para hacer contraste con el fondo claro */}
        <div className="order-2 lg:order-1 relative group perspective">
          <Reveal>
            <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl bg-dark overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 shadow-2xl">
              <div className="bg-[#18181B] px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]"></span>
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="h-3 w-3 rounded-full bg-[#27C93F]"></span>
                <span className="ml-4 text-xs text-white/40 font-mono">nexium_lab_core.exe</span>
              </div>
              <div className="p-8 text-white">
                <p className="font-mono text-sm text-accent mb-6">~ % {t.about.servicesIncludedEyebrow}</p>
                <ul className="space-y-4 font-mono text-sm">
                  {t.about.servicesList.map((s, i) => (
                    <li key={s} className="flex items-start gap-4 animate-in slide-in-from-left" style={{ animationDelay: `${i * 150}ms` }}>
                      <span className="text-primary mt-0.5">{"=>"}</span>
                      <span className="text-white/80 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 lg:pl-10">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-2 w-8 rounded-full bg-primary" />
              {t.about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-balance text-4xl leading-tight text-dark sm:text-5xl">
              {t.about.titlePart1}{" "}
              <span className="text-primary">{t.about.titlePart2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-dark/70">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Button asChild className="mt-8 rounded-full bg-dark text-white hover:bg-primary transition-all duration-300 px-8 py-6 text-md shadow-xl hover:shadow-primary/30">
              <Link href="/servicios">
                {t.about.ctaBtn}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
