"use client";

import { StoreGrid } from "@/components/site/store-grid";
import { useLanguage } from "@/lib/language-context";

export function ServiciosClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-50 border-b border-slate-200">
        {/* Fondo luminoso y minimalista */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-24 sm:pt-32 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            {t.servicesPage.eyebrow}
          </span>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            {t.servicesPage.titlePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              {t.servicesPage.titlePart2}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
            {t.servicesPage.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-8 pb-24 bg-white relative z-10 pt-16 rounded-t-[3rem] -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <StoreGrid />
      </section>
    </>
  );
}