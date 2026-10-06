"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, ShoppingBag } from "lucide-react";
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
import { SERVICE_IDS } from "@/lib/products";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { count, toggle, hydrated } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const serviceNav = t.header.nav.find((item) => item.href === "/servicios");
  const regularNav = t.header.nav.filter((item) => item.href !== "/servicios");

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "relative transition-all duration-300",
          scrolled
            ? "border-b border-clay/20 bg-ink/90 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-ink/55 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-6 container-px">
          <Link href="/" aria-label="Devion inicio">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {regularNav.slice(0, 1).map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "link-underline font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "text-clay"
                      : "text-cream-paper/70 hover:text-clay"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}

            {serviceNav && (
              <div ref={servicesMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  className={cn(
                    "flex items-center gap-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                    pathname === "/servicios" || servicesOpen
                      ? "text-clay"
                      : "text-cream-paper/70 hover:text-clay"
                  )}
                >
                  {serviceNav.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="fixed left-1/2 top-[68px] w-[min(1180px,calc(100vw-48px))] -translate-x-1/2 rounded-b-2xl border border-t-0 border-clay/20 bg-ink/98 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <div className="mb-4 flex items-end justify-between gap-6 border-b border-clay/15 pb-4">
                      <div>
                        <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-clay">
                          {t.header.servicesMenuEyebrow}
                        </p>
                        <p className="display mt-1 text-2xl font-bold text-cream-paper">
                          {t.header.servicesMenuTitle}
                        </p>
                      </div>
                      <Link
                        href="/servicios"
                        onClick={() => setServicesOpen(false)}
                        className="hidden items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-clay transition-colors hover:text-cream-paper lg:flex"
                      >
                        {t.header.servicesMenuAll}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                      {t.services.items.map((service, index) => {
                        const serviceId = SERVICE_IDS[index];
                        return (
                          <article
                            key={service.n}
                            className="flex min-h-[220px] flex-col rounded-xl border border-clay/15 bg-ink-2 p-4 transition-colors hover:border-clay/45"
                          >
                            <span className="font-mono text-[0.62rem] font-bold text-ochre">
                              {service.n}
                            </span>
                            <h3 className="display mt-4 text-xl font-bold text-cream-paper">
                              {service.title}
                            </h3>
                            <p className="mt-3 flex-1 text-[0.78rem] leading-relaxed text-cream-paper/55">
                              {service.desc}
                            </p>
                            <Link
                              href={`/servicios#${serviceId}`}
                              onClick={() => setServicesOpen(false)}
                              className="mt-5 inline-flex items-center gap-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.12em] text-clay transition-colors hover:text-cream-paper"
                            >
                              {t.header.servicesMenuPlans}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {regularNav.slice(1).map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "link-underline font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "text-clay"
                      : "text-cream-paper/70 hover:text-clay"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-md border border-clay/20 bg-ink-2 p-0.5 font-mono text-[0.68rem] font-bold tracking-wider">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "rounded-sm px-2.5 py-1 transition-all",
                  lang === "es"
                    ? "bg-clay text-ink shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                    : "text-clay/60 hover:text-clay"
                )}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-sm px-2.5 py-1 transition-all",
                  lang === "en"
                    ? "bg-clay text-ink shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                    : "text-clay/60 hover:text-clay"
                )}
              >
                EN
              </button>
            </div>

            <Button
              asChild
              size="sm"
              className="hidden bg-clay font-bold text-ink shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:bg-cream-paper sm:inline-flex"
            >
              <Link href="/contacto">{t.header.cta}</Link>
            </Button>

            <button
              type="button"
              onClick={toggle}
              aria-label={t.header.cartAria}
              className="relative grid h-10 w-10 place-items-center rounded-md border border-clay/20 bg-ink-2 text-clay transition-all hover:border-clay hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {hydrated && count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-ochre px-1 font-mono text-[0.62rem] font-bold text-white shadow-[0_0_10px_rgba(176,38,255,0.4)]">
                  {count}
                </span>
              )}
            </button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={t.header.menuAria}
                  className="grid h-10 w-10 place-items-center rounded-md border border-clay/20 bg-ink-2 text-clay transition-colors hover:border-clay md:hidden"
                >
                  <Menu className="h-[18px] w-[18px]" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="ink-panel w-full border-l border-clay/20 p-0 text-cream-paper sm:max-w-sm [&>button]:text-cream-paper/70"
              >
                <div className="flex h-full flex-col bg-ink">
                  <div className="border-b border-clay/20 px-7 py-6">
                    <Logo variant="cream" />
                  </div>

                  <nav className="flex-1 overflow-y-auto px-7 py-5">
                    {t.header.nav.map((l, i) => {
                      if (l.href === "/servicios") {
                        return (
                          <div key={l.href} className="border-b border-clay/10">
                            <button
                              type="button"
                              onClick={() =>
                                setMobileServicesOpen((open) => !open)
                              }
                              className="group flex w-full items-center gap-4 py-5 text-left"
                            >
                              <span className="font-mono text-xs font-bold text-clay">
                                0{i + 1}
                              </span>
                              <span className="display flex-1 text-3xl font-bold text-cream-paper transition-colors group-hover:text-clay">
                                {l.label}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-clay transition-transform",
                                  mobileServicesOpen && "rotate-180"
                                )}
                              />
                            </button>

                            {mobileServicesOpen && (
                              <div className="space-y-3 pb-5">
                                {t.services.items.map((service, index) => (
                                  <SheetClose asChild key={service.n}>
                                    <Link
                                      href={`/servicios#${SERVICE_IDS[index]}`}
                                      className="block rounded-lg border border-clay/15 bg-ink-2 p-4"
                                    >
                                      <span className="font-mono text-[0.6rem] font-bold text-ochre">
                                        {service.n}
                                      </span>
                                      <p className="display mt-1 text-lg font-bold text-cream-paper">
                                        {service.title}
                                      </p>
                                      <p className="mt-2 text-xs leading-relaxed text-cream-paper/50">
                                        {service.desc}
                                      </p>
                                      <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-clay">
                                        {t.header.servicesMenuPlans}
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                      </span>
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <SheetClose asChild key={l.href}>
                          <Link
                            href={l.href}
                            className="group flex items-center gap-4 border-b border-clay/10 py-5"
                          >
                            <span className="font-mono text-xs font-bold text-clay">
                              0{i + 1}
                            </span>
                            <span className="display text-3xl font-bold text-cream-paper transition-colors group-hover:text-clay">
                              {l.label}
                            </span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  <div className="border-t border-clay/20 bg-ink-2 px-7 py-7">
                    <SheetClose asChild>
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-clay font-bold text-ink hover:bg-cream-paper"
                      >
                        <Link href="/contacto">{t.header.cta}</Link>
                      </Button>
                    </SheetClose>
                    <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cream-paper/40">
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
