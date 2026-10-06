"use client";

import { useState } from "react";
import { paquetesPrecios, servicios } from "@/lib/products";
import { ProductCard } from "./product-card";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, ChevronRight, LayoutTemplate, Megaphone, ServerCog } from "lucide-react";

export function StoreGrid() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"web" | "marketing" | "core">("web");

  return (
    <div>
      {/* Navegación de Pestañas */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl">
          
          <button
            onClick={() => setActiveTab("core")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "core" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <ServerCog className="w-4 h-4" />
            Servicios Base
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "marketing" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Megaphone className="w-4 h-4" />
            Marketing Digital
          </button>
        </div>
      </div>

      {/* CONTENIDO: PAQUETES DE MARKETING */}
      {activeTab === "marketing" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paquetesPrecios.map((paquete) => (
            <div key={paquete.nombre} className="flex flex-col bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-extrabold text-slate-900">{paquete.nombre}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-black text-indigo-600">{paquete.precio_formato}</span>
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                {paquete.moneda} {paquete.impuesto}
              </p>
              
              <ul className="mt-8 space-y-4 flex-1">
                {paquete.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold py-3 rounded-xl transition-colors">
                Consultar plan
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CONTENIDO: SERVICIOS BASE */}
      {activeTab === "core" && (
        <div className="grid gap-8 lg:grid-cols-2">
          {servicios.map((servicio) => (
            <div key={servicio.servicio} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 sm:p-10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-slate-900">{servicio.servicio}</h3>
              <p className="mt-3 text-slate-600 text-lg">{servicio.descripcion_corta}</p>
              <p className="mt-2 text-sm text-slate-500">{servicio.descripcion_detallada}</p>
              
              <div className="mt-8 pt-8 border-t border-slate-200 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Beneficios principales</h4>
                  <ul className="space-y-3">
                    {servicio.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Características</h4>
                  <ul className="space-y-4">
                    {servicio.caracteristicas.map((feat, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="font-semibold text-indigo-600 block">{feat.titulo}</span>
                        <span className="text-slate-500">{feat.descripcion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}