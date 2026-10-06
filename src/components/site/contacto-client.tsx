"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { useLanguage } from "@/lib/language-context";

export function ContactoClient() {
  const { t } = useLanguage();

  const DETAILS = [
    { icon: Phone, label: t.contactPage.detailsLabelPhone, value: "+52 55 9826 1186", href: "tel:+525598261186" },
    { icon: Mail, label: t.contactPage.detailsLabelEmail, value: "consulta@nexiumlab.com.mx", href: "mailto:consulta@nexiumlab.com.mx" },
    {
      icon: MapPin,
      label: t.contactPage.detailsLabelAddress,
      value: "CDMX, México",
      href: "#",
    },
  ];

  return (
    <section className="relative bg-slate-50 min-h-screen pb-24">
      {/* Fondo de luz estilo SaaS */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-indigo-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-24 sm:pt-32 lg:px-8">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-indigo-600 shadow-sm ring-1 ring-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            {t.contactPage.eyebrow}
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6">
            {t.contactPage.titlePart1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              {t.contactPage.titlePart2}
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.contactPage.desc}
          </p>
        </div>

        {/* Tarjetas de Información (Nuevo Layout Estructural) */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {DETAILS.map((d) => (
            <a
              key={d.label}
              href={d.href}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <d.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                {d.label}
              </span>
              <span className="text-slate-900 font-bold text-lg">
                {d.value}
              </span>
            </a>
          ))}
        </div>

        {/* Formulario Centrado */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}