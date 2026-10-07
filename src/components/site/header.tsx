"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "relative border-b transition-all duration-300",
          scrolled
            ? "border-black/10 bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur-xl"
            : "border-black/5 bg-white/75 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-6 container-px">
          <Link href="/" aria-label="Nexiumlab inicio">
            <Logo />
          </Link>

          {/* DESKTOP */}
          <nav className="hidden items-center gap-8 md:flex">
            {t.header.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "text-primary"
                      : "text-dark/65 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* IDIOMA */}
            <div className="flex items-center rounded-full border border-black/10 bg-light p-0.5 font-mono text-[0.68rem] font-bold tracking-wider">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all",
                  lang === "es"
                    ? "bg-primary text-white"
                    : "text-dark/50 hover:text-primary"
                )}
              >
                ES
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all",
                  lang === "en"
                    ? "bg-primary text-white"
                    : "text-dark/50 hover:text-primary"
                )}
              >
                EN
              </button>
            </div>

            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-primary font-bold text-white hover:bg-dark sm:inline-flex"
            >
              <Link href="/contacto">{t.header.cta}</Link>
            </Button>

            {/* CARRITO */}
            <button
              type="button"
              onClick={toggle}
              aria-label={t.header.cartAria}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-dark transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_8px_22px_rgba(0,71,255,0.10)]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />

              {hydrated && count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 font-mono text-[0.62rem] font-black text-dark">
                  {count}
                </span>
              )}
            </button>

            {/* MOBILE */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={t.header.menuAria}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-dark transition-colors hover:border-primary/30 hover:text-primary md:hidden"
                >
                  <Menu className="h-[18px] w-[18px]" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full border-l border-black/10 bg-white p-0 text-dark sm:max-w-sm [&>button]:text-dark/60"
              >
                <div className="flex h-full flex-col bg-white">
                  <div className="border-b border-black/10 px-7 py-6">
                    <Logo />
                  </div>

                  <nav className="flex flex-1 flex-col justify-center px-7">
                    {t.header.nav.map((item, index) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-4 border-b border-black/10 py-5"
                        >
                          <span className="font-mono text-xs font-bold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="display text-3xl text-dark transition-colors group-hover:text-primary">
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="border-t border-black/10 bg-light px-7 py-7">
                    <SheetClose asChild>
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-primary font-bold text-white hover:bg-dark"
                      >
                        <Link href="/contacto">{t.header.cta}</Link>
                      </Button>
                    </SheetClose>

                    <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-dark/40">
                      {t.header.contactEmail}
                    </p>
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
