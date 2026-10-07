"use client";

import Link from "next/link";
import {
  ArrowRight,
  RefreshCw,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

const PILLAR_ICONS = [Sparkles, UsersRound, RefreshCw] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-light text-dark">
      {/* SECCIÓN HERO CON DATOS DE LA IMAGEN */}
      <section className="relative isolate border-b border-border mesh-bg">
        <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-16 sm:py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          
          {/* Columna Izquierda: Textos adaptados de la imagen */}
          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-sm bg-primary" />
                ¿POR QUÉ ELEGIRNOS?
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display mt-6 text-balance text-5xl font-bold uppercase leading-[0.92] sm:text-7xl text-dark">
                Datos del <br />
                <span className="text-primary">
                  Marketing Digital
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 max-w-2xl space-y-5 text-[1rem] leading-7 text-dark/70 font-medium">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-white font-bold hover:bg-dark hover:text-white rounded-xl shadow-lg shadow-primary/20 transition-all">
                  <Link href="/servicios">
                    {t.about.servicesCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border bg-white text-dark hover:border-primary hover:text-primary rounded-xl font-bold"
                >
                  <Link href="/contacto">{t.about.contactCta}</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Columna Derecha: Tarjetas de estadísticas de la imagen */}
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-6 relative">
              {/* Tarjeta 72% */}
              <div className="group relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 shadow-2xl transition-all hover:-translate-y-2">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" 
                    alt="Abstract stairs" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                <div className="relative z-10 flex flex-col h-full justify-end pt-32 mt-auto">
                  <span className="text-6xl font-black text-[#FF6B00] mb-2 drop-shadow-md">72%</span>
                  <p className="text-lg font-bold leading-tight">
                    usuarios que interactúan con marcas
                  </p>
                </div>
              </div>

              {/* Tarjeta 40x */}
              <div className="group relative overflow-hidden rounded-[2rem] bg-dark text-white p-8 shadow-2xl transition-all hover:-translate-y-2 sm:translate-y-8">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                    alt="Technology chip" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                <div className="relative z-10 flex flex-col h-full justify-end pt-32 mt-auto">
                  <span className="text-6xl font-black text-[#FF6B00] mb-2 drop-shadow-md">40</span>
                  <p className="text-lg font-bold leading-tight">
                    veces más compartido el contenido visual
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECCIÓN PILARES */}
      <section className="mx-auto max-w-[1400px] container-px py-20 sm:py-28 bg-white rounded-t-[3rem] -mt-8 relative z-10">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow">
              {t.about.pillarsEyebrow}
            </p>
            <h2 className="display mt-4 text-balance text-4xl font-bold leading-tight sm:text-6xl text-dark">
              {t.about.pillarsTitlePart1}{" "}
              <span className="text-primary">{t.about.pillarsTitlePart2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.about.pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] ?? Sparkles;
            return (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <article className="h-full rounded-[2rem] border border-border bg-light p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-white text-primary shadow-sm mb-8">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="display text-2xl font-bold text-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-dark/70 font-medium">
                    {pillar.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN INCLUIDOS */}
      <section className="relative border-t border-border bg-light">
        <div className="mx-auto grid max-w-[1400px] gap-10 container-px py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">
                {t.about.pricingEyebrow}
              </p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight sm:text-6xl text-dark">
                {t.about.pricingTitlePart1}{" "}
                <span className="text-primary">{t.about.pricingTitlePart2}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-dark/70 font-medium">
                {t.about.pricingDesc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="eyebrow text-dark">
                {t.about.servicesIncludedEyebrow}
              </p>
              <ul className="mt-8 space-y-5">
                {t.about.servicesList.map((service) => (
                  <li key={service} className="flex items-center gap-4 text-sm font-bold text-dark">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-dark">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-10 w-full bg-primary font-bold text-white hover:bg-dark rounded-xl h-14">
                <Link href="/servicios">
                  {t.about.pricingCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default About;
