"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function ContactoClient() {
  const { t } = useLanguage();

  const DETAILS = [
    {
      icon: Phone,
      label: t.contactPage.detailsLabelPhone,
      value: "55 5038 8741",
      href: "tel:+525550388741",
      external: false,
    },
    {
      icon: Mail,
      label: t.contactPage.detailsLabelEmail,
      value: "consulta@nexiumlab.com.mx",
      href: "mailto:consulta@nexiumlab.com.mx",
      external: false,
    },
    {
      icon: MapPin,
      label: t.contactPage.detailsLabelAddress,
      value:
        "José María Ibarrarán 47, col. San José Insurgentes, Benito Juárez, C.P. 03900, Ciudad de México",
      href: "https://www.google.com/maps/search/?api=1&query=Jos%C3%A9+Mar%C3%ADa+Ibarrar%C3%A1n+47%2C+San+Jos%C3%A9+Insurgentes%2C+Benito+Ju%C3%A1rez%2C+03900%2C+Ciudad+de+M%C3%A9xico",
      external: true,
    },
  ];

  return (
    <section className="mesh-bg relative isolate min-h-screen overflow-hidden bg-light text-dark">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-[-10%] h-[460px] w-[460px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-14 sm:py-20 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="lg:pt-6">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
            {t.contactPage.eyebrow}
          </span>

          <h1 className="display mt-6 text-5xl uppercase leading-[0.95] text-dark sm:text-7xl">
            {t.contactPage.titlePart1}
            <span className="text-primary">{t.contactPage.titlePart2}</span>
          </h1>

          <p className="mt-7 max-w-md text-pretty font-mono text-[0.95rem] leading-relaxed text-dark/60">
            {t.contactPage.desc}
          </p>

          <Button
            asChild
            className="mt-8 rounded-full bg-primary font-bold text-white transition-colors hover:bg-dark"
          >
            <Link href="/personalizado">
              {t.contactPage.payBtn}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="mt-12 space-y-4 border-t border-black/10 pt-8">
            {DETAILS.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_32px_rgba(0,71,255,0.08)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-dark transition-all group-hover:bg-primary group-hover:text-white">
                  <detail.icon className="h-4 w-4" />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-dark/40">
                    {detail.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-medium leading-relaxed text-dark/80 transition-colors group-hover:text-primary">
                    {detail.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
