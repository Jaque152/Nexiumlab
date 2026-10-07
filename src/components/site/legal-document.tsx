"use client";

import { useLanguage } from "@/lib/language-context";

type LegalDocumentKey = "privacy" | "terms" | "refunds";

export function LegalDocument({ documentKey }: { documentKey: LegalDocumentKey }) {
  const { t } = useLanguage();
  const document = t.legal[documentKey];

  return (
    <main className="min-h-screen bg-light text-dark">
      <section className="mesh-bg border-b border-black/5">
        <div className="mx-auto max-w-[1100px] container-px py-14 sm:py-20">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
            {t.legal.eyebrow}
          </span>

          <h1 className="display mt-5 text-balance text-4xl leading-tight text-dark sm:text-6xl">
            {document.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] container-px py-12 sm:py-16">
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-10">
          <div className="space-y-12">
            {document.sections.map((section, sectionIndex) => (
              <section key={`${section.title}-${sectionIndex}`}>
                {section.title ? (
                  <h2 className="display mb-5 text-2xl leading-tight text-dark sm:text-3xl">
                    {section.title}
                  </h2>
                ) : null}

                <div className="space-y-4 text-[0.95rem] leading-7 text-dark/75">
                  {section.body.map((paragraph, paragraphIndex) => (
                    <p key={`${sectionIndex}-${paragraphIndex}`} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LegalDocument;
