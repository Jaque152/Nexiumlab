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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 w-full z-50 transition-all duration-500", scrolled ? "py-2" : "py-4")}>
      <div className="mx-auto max-w-[1400px] container-px">
        <div
          className={cn(
            "flex h-[70px] items-center justify-between gap-6 px-6 rounded-2xl transition-all duration-500",
            scrolled ? "glass-panel" : "bg-transparent"
          )}
        >
          <Link href="/" aria-label="NexiumLab inicio">
            <Logo variant="default" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex bg-white/50 px-6 py-2 rounded-full border border-black/5 backdrop-blur-md">
            {t.header.nav.map((l: { href: string; label: string }) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5",
                    active ? "text-primary" : "text-dark/70 hover:text-primary"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-lg p-1 border border-black/5 shadow-sm">
              <button onClick={() => setLang("es")} className={cn("px-2 py-1 text-xs font-bold rounded-md transition-all", lang === "es" ? "bg-primary text-white" : "text-dark/50")}>ES</button>
              <button onClick={() => setLang("en")} className={cn("px-2 py-1 text-xs font-bold rounded-md transition-all", lang === "en" ? "bg-primary text-white" : "text-dark/50")}>EN</button>
            </div>

            {/* CTA en color Lima Ácido para máxima conversión */}
            <Button asChild size="sm" className="hidden sm:inline-flex bg-accent text-dark font-black hover:bg-primary hover:text-white border-0 shadow-lg transition-all hover:scale-105 rounded-full px-6">
              <Link href="/contacto">{t.header.cta}</Link>
            </Button>

            <button onClick={toggle} className="relative p-2 rounded-full bg-white border border-black/5 hover:bg-light transition-colors shadow-sm">
              <ShoppingBag className="h-5 w-5 text-dark" />
              {hydrated && count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 md:hidden text-dark"><Menu className="h-6 w-6" /></button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-light w-full border-l border-black/10 p-0 text-dark">
                <div className="flex h-full flex-col p-6">
                  <Logo variant="default" />
                  <nav className="flex flex-1 flex-col justify-center gap-4 mt-10">
                    {t.header.nav.map((l: { href: string; label: string }) => (
                      <SheetClose asChild key={l.href}>
                        <Link href={l.href} className="text-3xl font-display font-bold hover:text-primary transition-colors border-b border-black/5 pb-4">
                          {l.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-accent text-dark font-black hover:bg-primary hover:text-white rounded-full"><Link href="/contacto">{t.header.cta}</Link></Button>
                    <p className="mt-4 text-center text-xs text-dark/50">consulta@nexiumlab.com.mx</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
