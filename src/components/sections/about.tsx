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

const PILLAR_ICONS = [Sparkles, UsersRound, RefreshCw] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-ink text-cream-paper">
      <section className="relative isolate border-b border-clay/15">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00E5FF08_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF08_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute -left-40 top-[-25%] -z-10 h-[520px] w-[520px] rounded-full bg-clay/10 blur-[140px]" />
        <div className="absolute right-[-15%] top-[15%] -z-10 h-[460px] w-[460px] rounded-full bg-ochre/10 blur-[140px]" />

        <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-clay/20 bg-ink-2 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Equipo colaborando en una estrategia digital"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-sm rounded-xl border border-clay/20 bg-ink/85 p-5 backdrop-blur-md">
                  <BarChart3 className="h-5 w-5 text-clay" />
                  <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ochre">
                    {t.about.statEyebrow}
                  </p>
                  <p className="display mt-2 text-4xl font-bold text-cream-paper">
                    72%
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream-paper/65">
                    {t.about.statText}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5 text-clay">
                <span className="h-2 w-2 rounded-sm bg-ochre" />
                {t.about.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display mt-6 text-balance text-5xl font-bold uppercase leading-[0.92] sm:text-7xl">
                {t.about.pageTitlePart1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay to-ochre">
                  {t.about.pageTitlePart2}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 max-w-2xl space-y-5 text-[1rem] leading-7 text-cream-paper/65">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="bg-clay font-bold text-ink hover:bg-cream-paper">
                  <Link href="/servicios">
                    {t.about.servicesCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-clay/30 bg-transparent text-clay hover:bg-clay hover:text-ink"
                >
                  <Link href="/contacto">{t.about.contactCta}</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] container-px py-20 sm:py-28">
        <Reveal>
          <div className="max-w-4xl">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ochre">
              {t.about.pillarsEyebrow}
            </p>
            <h2 className="display mt-4 text-balance text-4xl font-bold leading-tight sm:text-6xl">
              {t.about.pillarsTitlePart1}{" "}
              <span className="text-clay">{t.about.pillarsTitlePart2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.about.pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] ?? Sparkles;
            return (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-clay/15 bg-ink-2 p-6 transition-all hover:-translate-y-1 hover:border-clay/40">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-clay/20 bg-clay/10 text-clay">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display mt-7 text-2xl font-bold text-cream-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-cream-paper/60">
                    {pillar.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative border-y border-clay/15 bg-ink-2">
        <div className="mx-auto grid max-w-[1400px] gap-10 container-px py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <div>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ochre">
                {t.about.pricingEyebrow}
              </p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
                {t.about.pricingTitlePart1}{" "}
                <span className="text-clay">{t.about.pricingTitlePart2}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-cream-paper/60">
                {t.about.pricingDesc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-clay/20 bg-ink p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-clay">
                {t.about.servicesIncludedEyebrow}
              </p>
              <ul className="mt-6 space-y-4">
                {t.about.servicesList.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-sm text-cream-paper/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" />
                    {service}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 w-full bg-clay font-bold text-ink hover:bg-cream-paper">
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
