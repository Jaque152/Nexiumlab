"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 2500);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom px-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-black text-primary"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden min-h-dvh flex flex-col justify-center border-b border-black/5">
      {/* Orbes flotantes modo claro (multiply) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 -left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="mx-auto max-w-[1400px] container-px py-20 text-center flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2 mb-8 shadow-sm"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(212,255,0,0.8)]" />
          <span className="text-xs font-bold uppercase tracking-widest text-dark">{t.hero.eyebrow}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="display font-black leading-[1] tracking-tight text-dark text-[clamp(3rem,8vw,6.5rem)]"
        >
          {t.hero.titlePart1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-900">
            {t.hero.titlePart2}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center text-xl md:text-2xl font-medium text-dark/70"
        >
          {t.hero.weCreate} <RotatingWord words={t.hero.rotatingWords} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-dark/60 whitespace-pre-line"
        >
          {t.hero.deliveryText}
        </motion.p>
      </div>
    </section>
  );
}
