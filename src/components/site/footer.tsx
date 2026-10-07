"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

function VisaBadge() {
  return (
    <span className="grid h-8 w-12 place-items-center rounded-md border border-black/5 bg-white shadow-sm">
      <span className="font-display text-sm font-black italic tracking-tight text-[#1434CB]">
        VISA
      </span>
    </span>
  );
}

function MastercardBadge() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-md border border-black/5 bg-white shadow-sm">
      <span className="h-5 w-5 rounded-full bg-[#EB001B]" />
      <span className="-ml-2 h-5 w-5 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply" />
    </span>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const legalRoutes = [
    "/privacidad",
    "/terminos",
    "/reembolsos",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white pb-10 pt-20">
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] container-px">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* MARCA */}
          <div className="space-y-6 lg:col-span-2">
            <Logo variant="default" />

            <p className="mt-4 max-w-sm font-medium leading-relaxed text-dark/60">
              {t.footer.description}
            </p>
          </div>

          {/* CONTACTO */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              {t.footer.contactEyebrow}
            </p>

            <div className="flex flex-col gap-3 text-sm font-medium">
              <a
                href="mailto:consulta@nexiumlab.com.mx"
                className="text-dark/70 transition-colors hover:text-primary"
              >
                consulta@nexiumlab.com.mx
              </a>

              <a
                href="https://nexiumlab.com.mx"
                target="_blank"
                rel="noreferrer"
                className="text-dark/70 transition-colors hover:text-primary"
              >
                nexiumlab.com.mx
              </a>
            </div>
          </div>

          {/* LEGALES */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              {t.footer.legalTitle}
            </p>

            <div className="flex flex-col gap-3 text-sm font-medium">
              {t.footer.legal.map((label, index) => (
                <Link
                  key={label}
                  href={legalRoutes[index] ?? "#"}
                  className="text-dark/70 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Logos de pago */}
            <div className="flex items-center gap-2 pt-4">
              <VisaBadge />
              <MastercardBadge />
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col items-center justify-between border-t border-black/5 pt-8 text-xs font-bold uppercase tracking-widest text-dark/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} NexiumLab.{" "}
            {t.footer.rights}
          </p>

          <p className="mt-4 md:mt-0">
            {t.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
