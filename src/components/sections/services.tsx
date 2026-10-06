"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart2, Globe, Mail, MonitorSmartphone, Share2, Target } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();
  
  // Iconos asignados a cada uno de los 6 servicios nuevos
  const icons = [Share2, Target, BarChart2, Mail, Globe, MonitorSmartphone];

  return (
    <section id="servicios" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] container-px relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-black/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-widest text-accent bg-dark px-4 py-2 rounded-full shadow-lg">
              {t.services.eyebrow}
            </span>
            <h2 className="display mt-8 text-5xl font-black text-dark sm:text-6xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-md text-lg font-medium text-dark/60 leading-relaxed">
            {t.services.desc}
          </p>
        </div>

        {/* Grid de 6 servicios exactos como en la imagen */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <Link
                key={item.n}
                href="/servicios"
                className="group relative flex flex-col justify-between rounded-[2rem] bg-light p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:shadow-[0_20px_40px_rgba(0,71,255,0.2)] border border-black/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-primary shadow-sm group-hover:bg-accent group-hover:text-dark transition-colors duration-500">
                      <Icon className="h-8 w-8" />
                    </span>
                    <span className="font-black text-4xl text-dark/5 group-hover:text-white/20 transition-colors">
                      {item.n}
                    </span>
                  </div>
                  <h3 className="display text-2xl font-black text-dark mb-4 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-dark/60 font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-10 flex justify-start">
                  <span className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                    Explorar <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}