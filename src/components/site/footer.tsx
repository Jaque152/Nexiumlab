"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

function VisaBadge() {
  return (
    <span className="grid h-8 w-12 place-items-center rounded-md bg-white border border-black/5 shadow-sm">
      <span className="font-display text-sm font-black italic tracking-tight text-[#1434CB]">
        VISA
      </span>
    </span>
  );
}

function MastercardBadge() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white border border-black/5 shadow-sm">
      <span className="h-5 w-5 rounded-full bg-[#EB001B]" />
      <span className="-ml-2 h-5 w-5 rounded-full bg-[#F79E1B] mix-blend-multiply opacity-90" />
    </span>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const legalRoutes = ["/privacidad", "/terminos", "/devoluciones"];

  return (
    <footer className="relative overflow-hidden bg-white border-t border-black/5 pt-20 pb-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] container-px relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="default" />
            <p className="max-w-sm text-dark/60 mt-4 leading-relaxed font-medium">
              Elevando marcas a través del diseño estratégico, la tecnología y el marketing digital de alto rendimiento.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">{t.footer.contactEyebrow}</p>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="mailto:consulta@nexiumlab.com.mx" className="text-dark/70 hover:text-primary transition-colors">
                consulta@nexiumlab.com.mx
              </a>
              <a href="https://nexiumlab.com.mx" className="text-dark/70 hover:text-primary transition-colors">
                nexiumlab.com.mx
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">Legal</p>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {t.footer.legal.map((label: string, index: number) => (
                <Link key={label} href={legalRoutes[index] || "#"} className="text-dark/70 hover:text-primary transition-colors">
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

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-xs font-bold text-dark/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} NexiumLab. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado en México.</p>
        </div>
      </div>
    </footer>
  );
}