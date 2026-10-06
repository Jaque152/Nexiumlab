"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center bg-white">
      {/* Fondo de red digital moderno (Paráfrasis visual de tu imagen) */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-light via-white to-white">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDQ3RkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full bg-light border border-black/5 px-6 py-2 mb-8 shadow-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-primary">{t.hero.eyebrow}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="display font-black leading-[1.05] tracking-tight text-dark text-[clamp(3.5rem,8vw,7.5rem)]"
        >
          {t.hero.titlePart1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t.hero.titlePart2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl font-medium text-dark/60 leading-relaxed"
        >
          {t.hero.deliveryText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link 
            href="/servicios" 
            className="group flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-dark font-black text-lg transition-all hover:bg-primary hover:text-white shadow-[0_15px_30px_rgba(212,255,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,71,255,0.3)] hover:-translate-y-2"
          >
            {t.hero.ctaBtn}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}