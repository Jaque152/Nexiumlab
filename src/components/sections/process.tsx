"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1400px] container-px">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-sm bg-[var(--accent)]" />
            {t.process.eyebrow}
          </span>
          <Reveal>
            <h2 className="display mt-6 text-4xl font-bold leading-[1.1] text-dark sm:text-5xl">
              {t.process.titlePart1}{" "}
              <span className="text-primary">{t.process.titlePart2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-pretty leading-relaxed text-dark/70 font-medium">
              {t.process.desc}
            </p>
          </Reveal>
        </div>

        {/* Tech Timeline */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px" />
          
          <div className="space-y-12 md:space-y-0">
            {t.process.steps.map((s: ProcessStep, i: number) => (
              <div key={s.n} className="relative pl-20 md:pl-0 md:w-1/2 md:even:ml-auto md:even:pl-16 md:odd:pr-16 md:odd:text-right md:py-8">
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-auto md:right-[-28px] md:even:left-[-28px] top-0 md:top-1/2 md:-translate-y-1/2 grid h-14 w-14 place-items-center rounded-xl bg-white text-primary border-2 border-primary shadow-lg z-10">
                  <span className="font-sans text-lg font-black">{s.n}</span>
                </div>
                
                {/* Content Card */}
                <div className="rounded-[2rem] border border-border bg-light p-8 shadow-sm hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="display text-xl font-bold text-dark">
                    {s.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-dark/70 font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Button asChild className="bg-primary text-white hover:bg-dark font-bold rounded-xl h-14 px-8 shadow-lg shadow-primary/20">
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

export default Process;
