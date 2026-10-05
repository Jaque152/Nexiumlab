"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] container-px">
        
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="display mt-6 text-4xl font-bold text-dark sm:text-5xl">
              {t.process.titlePart1}{" "}
              <span className="text-primary">{t.process.titlePart2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-dark/70">
              {t.process.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-24 relative max-w-5xl mx-auto">
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-light md:left-1/2 md:-translate-x-1/2 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-primary animate-[float_4s_ease-in-out_infinite]" />
          </div>
          
          <div className="space-y-16 md:space-y-0">
            {t.process.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.2}>
                <div className="relative pl-20 md:pl-0 md:w-1/2 md:even:ml-auto md:even:pl-16 md:odd:pr-16 md:odd:text-right md:py-12 group">
                  
                  <div className="absolute left-0 md:left-auto md:right-[-32px] md:even:left-[-32px] top-0 md:top-1/2 md:-translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-white border-4 border-light z-10 transition-transform duration-500 group-hover:scale-110">
                    <div className="h-full w-full rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,71,255,0.3)]">
                      <span className="font-bold text-white text-lg">{s.n}</span>
                    </div>
                  </div>
                  
                  <div className="bg-light p-8 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border group-hover:border-primary/20">
                    <h3 className="text-2xl font-bold text-dark">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-dark/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Button asChild className="rounded-full bg-accent text-dark font-black hover:bg-primary hover:text-white transition-transform duration-300 px-8 py-6 text-md shadow-lg shadow-accent/50 border-0">
            <Link href="/servicios">
              {t.process.ctaBtn}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
