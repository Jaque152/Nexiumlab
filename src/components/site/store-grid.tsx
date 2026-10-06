"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import {
  getPlansByService,
  SERVICE_IDS,
  type ServiceId,
} from "@/lib/products";
import { ProductCard } from "./product-card";
import { useLanguage } from "@/lib/language-context";

export function StoreGrid() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "") as ServiceId;
      if (SERVICE_IDS.includes(hash)) {
        setSelectedService(hash);
        window.requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectedIndex = selectedService
    ? SERVICE_IDS.indexOf(selectedService)
    : -1;
  const selectedCopy =
    selectedIndex >= 0 ? t.services.items[selectedIndex] : null;
  const selectedPlans = useMemo(
    () => (selectedService ? getPlansByService(selectedService) : []),
    [selectedService]
  );

  const chooseService = (serviceId: ServiceId) => {
    setSelectedService(serviceId);
    window.history.replaceState(null, "", `#${serviceId}`);
    window.requestAnimationFrame(() => {
      document.getElementById(serviceId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div>
      {!selectedService && (
        <>
          <div className="flex flex-col gap-3 border-y border-clay/20 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-clay">
                {t.store.baseServicesEyebrow}
              </p>
              <h2 className="display mt-2 text-2xl font-bold text-cream-paper sm:text-3xl">
                {t.store.baseServicesTitle}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-cream-paper/65">
              {t.store.baseServicesDesc}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {t.services.items.map((service, index) => {
              const serviceId = SERVICE_IDS[index];

              return (
                <button
                  key={service.n}
                  type="button"
                  onClick={() => chooseService(serviceId)}
                  className="group flex min-h-[270px] flex-col rounded-xl border border-clay/25 bg-[#1b1928] p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-clay/60 hover:bg-[#211f31] hover:shadow-[0_16px_38px_rgba(0,229,255,0.10)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.65rem] font-bold text-ochre">
                      {service.n}
                    </span>
                    <Layers3 className="h-4 w-4 text-cream-paper/45 transition-colors group-hover:text-clay" />
                  </div>

                  <h3 className="display mt-6 text-2xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.82rem] leading-relaxed text-cream-paper/75">
                    {service.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-clay">
                    {t.store.serviceView}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {selectedService && selectedCopy && (
        <section
          id={selectedService}
          className="scroll-mt-28 overflow-hidden rounded-2xl border border-clay/25 bg-[#171522] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
        >
          <div className="border-b border-clay/15 px-6 py-4 sm:px-8">
            <button
              type="button"
              onClick={() => {
                setSelectedService(null);
                window.history.replaceState(null, "", window.location.pathname);
                window.requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                });
              }}
              className="inline-flex items-center gap-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.12em] text-clay transition-colors hover:text-cream-paper"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.store.backToServices}
            </button>
          </div>

          <div className="grid gap-8 border-b border-clay/15 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-ochre">
                {selectedCopy.n} · {t.store.selectedServiceLabel}
              </p>
              <h3 className="display mt-3 text-4xl font-bold text-cream-paper sm:text-5xl">
                {selectedCopy.title}
              </h3>
            </div>
            <p className="text-[0.95rem] leading-7 text-cream-paper/65">
              {selectedCopy.fullDesc}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-clay">
                {String(selectedPlans.length).padStart(2, "0")} {t.store.plansCountLabel}
              </p>
              <p className="text-right text-xs text-cream-paper/40">
                {t.store.planHelpText}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {selectedPlans.map((plan, index) => (
                <ProductCard key={plan.id} product={plan} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
