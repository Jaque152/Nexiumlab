"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

import {
  getPlansByService,
  SERVICE_IDS,
  type ServiceId,
} from "@/lib/products";

import { ProductCard } from "./product-card";
import { useLanguage } from "@/lib/language-context";

export function StoreGrid() {
  const { t } = useLanguage();

  const [selectedService, setSelectedService] =
    useState<ServiceId | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(
        "#",
        ""
      ) as ServiceId;

      if (SERVICE_IDS.includes(hash)) {
        setSelectedService(hash);

        window.requestAnimationFrame(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        });
      }
    };

    syncFromHash();

    window.addEventListener(
      "hashchange",
      syncFromHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        syncFromHash
      );
    };
  }, []);

  const selectedIndex = selectedService
    ? SERVICE_IDS.indexOf(selectedService)
    : -1;

  const selectedCopy =
    selectedIndex >= 0
      ? t.services.items[selectedIndex]
      : null;

  const selectedPlans = useMemo(() => {
    return selectedService
      ? getPlansByService(selectedService)
      : [];
  }, [selectedService]);

  const chooseService = (
    serviceId: ServiceId
  ) => {
    setSelectedService(serviceId);

    window.history.replaceState(
      null,
      "",
      `#${serviceId}`
    );

    window.requestAnimationFrame(() => {
      document
        .getElementById(serviceId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  const clearService = () => {
    setSelectedService(null);

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  return (
    <div>
      {/* SERVICIOS BASE */}
      {!selectedService && (
        <>
          <div className="flex flex-col gap-3 border-y border-black/10 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-primary">
                {t.store.baseServicesEyebrow}
              </p>

              <h2 className="display mt-2 text-2xl text-dark sm:text-3xl">
                {t.store.baseServicesTitle}
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-dark/60">
              {t.store.baseServicesDesc}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {t.services.items.map(
              (service, index) => {
                const serviceId =
                  SERVICE_IDS[index];

                return (
                  <button
                    key={service.n}
                    type="button"
                    onClick={() =>
                      chooseService(serviceId)
                    }
                    className="group flex min-h-[270px] flex-col rounded-2xl border border-black/5 bg-white p-5 text-left shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(0,71,255,0.10)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.65rem] font-bold text-primary">
                        {service.n}
                      </span>

                      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/40 text-dark transition-colors group-hover:bg-accent">
                        <Layers3 className="h-4 w-4" />
                      </span>
                    </div>

                    <h3 className="display mt-6 text-2xl leading-tight text-dark">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[0.82rem] leading-relaxed text-dark/60">
                      {service.desc}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary">
                      {t.store.serviceView}

                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </>
      )}

      {/* CATÁLOGO */}
      {selectedService && selectedCopy && (
        <section
          id={selectedService}
          className="scroll-mt-28 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
        >
          <div className="border-b border-black/10 px-6 py-4 sm:px-8">
            <button
              type="button"
              onClick={clearService}
              className="inline-flex items-center gap-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-dark"
            >
              <ArrowLeft className="h-4 w-4" />

              {t.store.backToServices}
            </button>
          </div>

          <div className="grid gap-8 border-b border-black/10 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-primary">
                {selectedCopy.n} ·{" "}
                {t.store.selectedServiceLabel}
              </p>

              <h3 className="display mt-3 text-4xl text-dark sm:text-5xl">
                {selectedCopy.title}
              </h3>
            </div>

            <p className="text-[0.95rem] leading-7 text-dark/60">
              {selectedCopy.fullDesc}
            </p>
          </div>

          <div className="bg-light/50 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
                {String(
                  selectedPlans.length
                ).padStart(2, "0")}{" "}
                {t.store.plansCountLabel}
              </p>

              <p className="text-right text-xs text-dark/45">
                {t.store.planHelpText}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {selectedPlans.map(
                (plan, index) => (
                  <ProductCard
                    key={plan.id}
                    product={plan}
                    index={index}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
