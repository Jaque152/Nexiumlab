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

      {/* =========================================================
          DATOS DEL MARKETING DIGITAL
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#0d1b2f]">
        {/* Decoración de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[140px]" />

          <div className="absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

          <div
            className="
              absolute inset-0 opacity-[0.07]
              bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              bg-[size:46px_46px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] container-px py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* TEXTO */}
            <Reveal>
              <div className="max-w-xl">
                <span
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-black/20
                    px-4 py-2
                    font-mono text-[0.65rem] font-bold
                    uppercase tracking-[0.16em]
                    text-accent
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                  {t.about.eyebrow}
                </span>

                <h1
                  className="
                    display mt-6 text-balance
                    text-4xl leading-[1.02]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {t.about.titlePart1}{" "}

                  <span className="text-white">
                    {t.about.titlePart2}
                  </span>
                </h1>

                <p className="mt-6 max-w-lg text-[0.95rem] leading-7 text-white/60">
                  {t.about.p1}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="
                      rounded-full bg-accent
                      font-bold text-dark
                      hover:bg-white
                    "
                  >
                    <Link href="/servicios">
                      {t.about.servicesCta}

                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="
                      rounded-full
                      border-white/20
                      bg-white/5
                      text-white
                      hover:border-white
                      hover:bg-white
                      hover:text-dark
                    "
                  >
                    <Link href="/contacto">
                      {t.about.contactCta}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* ESTADÍSTICAS */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* 72% */}
              <Reveal delay={0.06}>
                <article
                  className="
                    group relative min-h-[390px]
                    overflow-hidden rounded-3xl
                    border border-white/10
                    bg-dark
                    shadow-[0_24px_60px_rgba(0,0,0,0.22)]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1000&q=85"
                    alt=""
                    aria-hidden="true"
                    className="
                      absolute inset-0 h-full w-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/5" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-accent text-dark">
                      <BarChart3 className="h-5 w-5" />
                    </div>

                    <p className="display text-6xl text-accent sm:text-7xl">
                      {t.about.stat1Num}
                    </p>

                    <p className="mt-3 max-w-[250px] text-lg font-bold leading-snug text-white">
                      {t.about.stat1Text}
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* 40 */}
              <Reveal delay={0.1}>
                <article
                  className="
                    group relative min-h-[390px]
                    overflow-hidden rounded-3xl
                    border border-white/10
                    bg-dark
                    shadow-[0_24px_60px_rgba(0,0,0,0.22)]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
                    alt=""
                    aria-hidden="true"
                    className="
                      absolute inset-0 h-full w-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/5" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-accent text-dark">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <p className="display text-6xl text-accent sm:text-7xl">
                      {t.about.stat2Num}
                    </p>

                    <p className="mt-3 max-w-[250px] text-lg font-bold leading-snug text-white">
                      {t.about.stat2Text}
                    </p>
                  </div>
                </article>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NOSOTROS
      ========================================================= */}
      <section className="mesh-bg border-b border-black/5">
        <div
          className="
            mx-auto grid max-w-[1400px]
            gap-12 container-px
            py-20 sm:py-28
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center lg:gap-20
          "
        >
          <Reveal>
            <div>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />

                {t.about.eyebrow}
              </span>

              <h2
                className="
                  display mt-6 text-balance
                  text-4xl uppercase leading-[0.95]
                  text-dark
                  sm:text-6xl
                "
              >
                {t.about.pageTitlePart1}{" "}

                <span className="text-primary">
                  {t.about.pageTitlePart2}
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-[1rem] leading-7 text-dark/60">
              <p>{t.about.p1}</p>

              <p>{t.about.p2}</p>

              <p>{t.about.p3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          PILARES
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] container-px py-20 sm:py-28">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow">
              {t.about.pillarsEyebrow}
            </p>

            <h2
              className="
                display mt-4 text-balance
                text-4xl leading-tight
                text-dark
                sm:text-6xl
              "
            >
              {t.about.pillarsTitlePart1}{" "}

              <span className="text-primary">
                {t.about.pillarsTitlePart2}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.about.pillars.map((pillar, index) => {
            const Icon =
              PILLAR_ICONS[index] ?? Sparkles;

            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.05}
              >
                <article
                  className="
                    h-full rounded-3xl
                    border border-black/5
                    bg-white p-6
                    shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                    transition-all
                    hover:-translate-y-1
                    hover:border-primary/25
                    hover:shadow-[0_18px_40px_rgba(0,71,255,0.10)]
                  "
                >
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
          })}
        </div>
      </section>

      {/* =========================================================
          PRECIOS
      ========================================================= */}
      <section className="border-y border-black/5 bg-white">
        <div
          className="
            mx-auto grid max-w-[1400px]
            gap-10 container-px
            py-16 sm:py-20
            lg:grid-cols-[1fr_0.8fr]
            lg:items-center
          "
        >
          <Reveal>
            <div>
              <p className="eyebrow">
                {t.about.pricingEyebrow}
              </p>

              <h2
                className="
                  display mt-4
                  text-4xl leading-tight
                  text-dark
                  sm:text-6xl
                "
              >
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
                {t.about.servicesList.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm text-dark/65"
                  >
                    <span
                      className="
                        mt-1 grid h-5 w-5
                        shrink-0 place-items-center
                        rounded-full bg-accent
                        text-[10px] font-black text-dark
                      "
                    >
                      ✓
                    </span>

                    {service}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="
                  mt-8 w-full rounded-full
                  bg-primary font-bold text-white
                  hover:bg-dark
                "
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
