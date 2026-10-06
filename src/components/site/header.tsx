"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { count, toggle, hydrated } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 rounded-[2rem] px-6 transition-all duration-500",
          scrolled ? "bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]" : "bg-white/95 shadow-sm border border-black/5"
        )}
      >
        <Link href="/" aria-label="Inicio">
          <Logo variant="default" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.header.nav.map((l: { href: string; label: string }) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.8rem] font-bold uppercase tracking-widest transition-all hover:text-primary relative",
                  active ? "text-primary" : "text-dark/60"
                )}
              >
                {l.label}
                {active && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex bg-light rounded-full p-1 border border-black/5">
            <button onClick={() => setLang("es")} className={cn("px-3 py-1.5 text-[0.7rem] font-black rounded-full transition-all", lang === "es" ? "bg-white text-primary shadow-sm" : "text-dark/40")}>ES</button>
            <button onClick={() => setLang("en")} className={cn("px-3 py-1.5 text-[0.7rem] font-black rounded-full transition-all", lang === "en" ? "bg-white text-primary shadow-sm" : "text-dark/40")}>EN</button>
          </div>

          <Button asChild className="hidden lg:inline-flex rounded-full bg-accent text-dark font-black px-6 hover:bg-primary hover:text-white shadow-[0_8px_20px_rgba(212,255,0,0.3)] hover:shadow-primary/30 transition-all hover:-translate-y-1">
            <Link href="/contacto">{t.header.cta}</Link>
          </Button>

          <button onClick={toggle} className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white hover:bg-dark transition-transform hover:scale-105 shadow-lg shadow-primary/20">
            <ShoppingBag className="h-5 w-5" />
            {hydrated && count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-dark text-[10px] font-black border-2 border-white">
                {count}
              </span>
            )}
          </button>

          {/* Menú Móvil */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden h-12 w-12 flex items-center justify-center rounded-full bg-light text-dark"><Menu className="h-5 w-5" /></button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white p-8">
              <Logo variant="default" />
              <div className="mt-12 flex flex-col gap-6">
                {t.header.nav.map((l: { href: string; label: string }) => (
                  <SheetClose asChild key={l.href}>
                    <Link href={l.href} className="text-2xl font-black text-dark hover:text-primary">{l.label}</Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}