"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  RefreshCw,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

const PILLAR_ICONS = [
  Sparkles,
  UsersRound,
  RefreshCw,
] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-light text-dark">
      {/* HERO */}
      <section className="mesh-bg relative isolate border-b border-black/5">
        <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Equipo colaborando en una estrategia digital"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-sm rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl">
                  <BarChart3 className="h-5 w-5 text-primary" />

                  <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                    {t.about.statEyebrow}
                  </p>

                  <p className="display mt-2 text-4xl text-dark">
                    72%
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-dark/60">
                    {t.about.statText}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {t.about.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display mt-6 text-balance text-5xl uppercase leading-[0.92] text-dark sm:text-7xl">
                {t.about.pageTitlePart1}{" "}
                <span className="text-primary">
                  {t.about.pageTitlePart2}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 max-w-2xl space-y-5 text-[1rem] leading-7 text-dark/60">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-primary font-bold text-white hover:bg-dark"
                >
                  <Link href="/servicios">
                    {t.about.ctaBtn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-black/15 bg-white text-dark hover:border-primary hover:bg-white hover:text-primary"
                >
                  <Link href="/contacto">
                    {t.about.contactCta}
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="mx-auto max-w-[1400px] container-px py-20 sm:py-28">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow">
              {t.about.pillarsEyebrow}
            </p>

            <h2 className="display mt-4 text-balance text-4xl leading-tight text-dark sm:text-6xl">
              {t.about.pillarsTitlePart1}{" "}
              <span className="text-primary">
                {t.about.pillarsTitlePart2}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.about.pillars.map(
            (pillar, index) => {
              const Icon =
                PILLAR_ICONS[index] ?? Sparkles;

              return (
                <Reveal
                  key={pillar.title}
                  delay={index * 0.05}
                >
                  <article className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(0,71,255,0.10)]">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-dark">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="display mt-7 text-2xl text-dark">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-dark/60">
                      {pillar.desc}
                    </p>
                  </article>
                </Reveal>
              );
            }
          )}
        </div>
      </section>

      {/* PRECIOS */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 container-px py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">
                {t.about.pricingEyebrow}
              </p>

              <h2 className="display mt-4 text-4xl leading-tight text-dark sm:text-6xl">
                {t.about.pricingTitlePart1}{" "}
                <span className="text-primary">
                  {t.about.pricingTitlePart2}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-dark/60">
                {t.about.pricingDesc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                {t.about.servicesIncludedEyebrow}
              </p>

              <ul className="mt-6 space-y-4">
                {t.about.servicesList.map(
                  (service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-dark/65"
                    >
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-black text-dark">
                        ✓
                      </span>

                      {service}
                    </li>
                  )
                )}
              </ul>

              <Button
                asChild
                className="mt-8 w-full rounded-full bg-primary font-bold text-white hover:bg-dark"
              >
                <Link href="/precios">
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
