"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  FileText,
  Mail,
  Megaphone,
  Search,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const SERVICE_SLUGS = [
  "marketing-redes-sociales",
  "seo",
  "publicidad-digital",
  "email-marketing",
  "desarrollo-web",
  "content-marketing",
] as const;

const SERVICE_ICONS = [
  Share2,
  Search,
  Megaphone,
  Mail,
  Code2,
  FileText,
] as const;

export function ServiciosClient() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = SERVICE_SLUGS.indexOf(
      hash as (typeof SERVICE_SLUGS)[number]
    );

    if (index >= 0) {
      setSelectedIndex(index);

      window.requestAnimationFrame(() => {
        document.getElementById("detalle-servicio")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  const selectService = (index: number) => {
    setSelectedIndex(index);

    const slug = SERVICE_SLUGS[index];
    window.history.replaceState(null, "", `#${slug}`);

    window.requestAnimationFrame(() => {
      document.getElementById("detalle-servicio")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const selectedService =
    selectedIndex !== null ? t.services.items[selectedIndex] : null;

  return (
    <main className="min-h-screen bg-light text-dark">
      {/* HERO */}
      <section className="mesh-bg relative isolate overflow-hidden border-b border-black/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center container-px pb-16 pt-14 text-center sm:pt-24">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
            {t.servicesPage.eyebrow}
          </span>

          <h1 className="display mt-6 max-w-5xl text-balance text-5xl uppercase leading-[0.95] text-dark sm:text-7xl">
            {t.servicesPage.titlePart1}{" "}
            <span className="text-primary">{t.servicesPage.titlePart2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty font-mono text-[0.95rem] leading-relaxed text-dark/60">
            {t.servicesPage.desc}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-primary px-7 font-bold text-white hover:bg-dark"
          >
            <Link href="/precios">
              {t.servicesPage.pricingButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 6 SERVICIOS BASE */}
      <section className="mx-auto max-w-[1400px] container-px py-16 sm:py-24">
        <div className="flex flex-col gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-primary">
              {t.services.eyebrow}
            </p>
            <h2 className="display mt-2 max-w-2xl text-3xl text-dark sm:text-4xl">
              {t.services.title}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-dark/55">
            {t.services.desc}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            const active = selectedIndex === index;

            return (
              <button
                key={service.n}
                type="button"
                onClick={() => selectService(index)}
                aria-pressed={active}
                className={cn(
                  "group relative min-h-[260px] overflow-hidden rounded-2xl border bg-white p-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300",
                  active
                    ? "-translate-y-1 border-primary/40 shadow-[0_20px_45px_rgba(0,71,255,0.12)]"
                    : "border-black/5 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(0,71,255,0.10)]"
                )}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-dark text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="font-mono text-[0.62rem] font-bold text-primary/70">
                    {service.n}
                  </span>
                </div>

                <h3 className="display mt-7 max-w-sm text-2xl leading-tight text-dark">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-[0.9rem] leading-6 text-dark/60">
                  {service.desc}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-primary">
                  {t.servicesPage.cardAction}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* DETALLE */}
      {selectedService && selectedIndex !== null && (
        <section
          id="detalle-servicio"
          className="scroll-mt-24 border-y border-black/5 bg-white"
        >
          <div className="mx-auto max-w-[1400px] container-px py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
                  {selectedService.n} · {t.servicesPage.detailEyebrow}
                </p>

                <h2 className="display mt-4 text-4xl leading-[1.02] text-dark sm:text-5xl">
                  {selectedService.title}
                </h2>

                <p className="mt-6 text-base leading-8 text-dark/60">
                  {selectedService.fullDesc}
                </p>

                <div className="mt-8">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-dark/45">
                    {t.servicesPage.benefitsTitle}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {selectedService.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm font-semibold text-dark/80"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-dark">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-9 rounded-full bg-primary px-7 font-bold text-white hover:bg-dark"
                >
                  <Link href="/precios">
                    {t.servicesPage.pricingButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div>
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                  {t.servicesPage.featuresTitle}
                </p>

                <div className="mt-5 grid gap-4">
                  {selectedService.features.map((feature, featureIndex) => (
                    <article
                      key={feature.title}
                      className="rounded-2xl border border-black/5 bg-light p-6 transition-colors hover:border-primary/20"
                    >
                      <div className="flex gap-5">
                        <span className="font-mono text-[0.65rem] font-bold text-primary">
                          {String(featureIndex + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="display text-2xl text-dark">
                            {feature.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-dark/60">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="mx-auto max-w-[1400px] container-px py-16 sm:py-24">
        <div className="overflow-hidden rounded-3xl bg-dark px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-accent">
              {t.servicesPage.pricingEyebrow}
            </p>
            <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
              {t.servicesPage.pricingTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
              {t.servicesPage.pricingDesc}
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-7 shrink-0 rounded-full bg-accent px-7 font-black text-dark hover:bg-white lg:mt-0"
          >
            <Link href="/precios">
              {t.servicesPage.pricingButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
