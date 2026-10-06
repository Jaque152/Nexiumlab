"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  ShoppingBag,
} from "lucide-react";

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
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const serviceNav = t.header.nav.find(
    (item) => item.href === "/servicios"
  );

  const regularNav = t.header.nav.filter(
    (item) => item.href !== "/servicios"
  );

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
          <Link href="/" aria-label="Devion inicio">
            <Logo />
          </Link>

          {/* DESKTOP */}
          <nav className="hidden items-center gap-9 md:flex">
            {regularNav.slice(0, 1).map((item) => {
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

            {/* SERVICIOS */}
            {serviceNav && (
              <div
                ref={servicesMenuRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((open) => !open)
                  }
                  aria-expanded={servicesOpen}
                  className={cn(
                    "flex items-center gap-1.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] transition-colors",
                    pathname === "/servicios" || servicesOpen
                      ? "text-primary"
                      : "text-dark/65 hover:text-primary"
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
                  <div className="fixed left-1/2 top-[68px] w-[min(1180px,calc(100vw-48px))] -translate-x-1/2 rounded-b-2xl border border-t-0 border-black/10 bg-white/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    <div className="mb-4 flex items-end justify-between gap-6 border-b border-black/10 pb-4">
                      <div>
                        <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary">
                          {t.header.servicesMenuEyebrow}
                        </p>

                        <p className="display mt-1 text-2xl text-dark">
                          {t.header.servicesMenuTitle}
                        </p>
                      </div>

                      <Link
                        href="/servicios"
                        onClick={() =>
                          setServicesOpen(false)
                        }
                        className="hidden items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-dark lg:flex"
                      >
                        {t.header.servicesMenuAll}

                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                      {t.services.items.map(
                        (service, index) => {
                          const serviceId =
                            SERVICE_IDS[index];

                          return (
                            <article
                              key={service.n}
                              className="flex min-h-[220px] flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_12px_30px_rgba(0,71,255,0.10)]"
                            >
                              <span className="font-mono text-[0.62rem] font-bold text-primary">
                                {service.n}
                              </span>

                              <h3 className="display mt-4 text-xl text-dark">
                                {service.title}
                              </h3>

                              <p className="mt-3 flex-1 text-[0.78rem] leading-relaxed text-dark/60">
                                {service.desc}
                              </p>

                              <Link
                                href={`/servicios#${serviceId}`}
                                onClick={() =>
                                  setServicesOpen(false)
                                }
                                className="mt-5 inline-flex items-center gap-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-dark"
                              >
                                {t.header.servicesMenuPlans}

                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </article>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {regularNav.slice(1).map((item) => {
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
              <Link href="/contacto">
                {t.header.cta}
              </Link>
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
            <Sheet
              open={menuOpen}
              onOpenChange={setMenuOpen}
            >
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

                  <nav className="flex-1 overflow-y-auto px-7 py-5">
                    {t.header.nav.map(
                      (item, index) => {
                        if (
                          item.href === "/servicios"
                        ) {
                          return (
                            <div
                              key={item.href}
                              className="border-b border-black/10"
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileServicesOpen(
                                    (open) => !open
                                  )
                                }
                                className="group flex w-full items-center gap-4 py-5 text-left"
                              >
                                <span className="font-mono text-xs font-bold text-primary">
                                  0{index + 1}
                                </span>

                                <span className="display flex-1 text-3xl text-dark transition-colors group-hover:text-primary">
                                  {item.label}
                                </span>

                                <ChevronDown
                                  className={cn(
                                    "h-5 w-5 text-primary transition-transform",
                                    mobileServicesOpen &&
                                      "rotate-180"
                                  )}
                                />
                              </button>

                              {mobileServicesOpen && (
                                <div className="space-y-3 pb-5">
                                  {t.services.items.map(
                                    (
                                      service,
                                      serviceIndex
                                    ) => (
                                      <SheetClose
                                        asChild
                                        key={service.n}
                                      >
                                        <Link
                                          href={`/servicios#${
                                            SERVICE_IDS[
                                              serviceIndex
                                            ]
                                          }`}
                                          className="block rounded-2xl border border-black/5 bg-light p-4 transition-colors hover:border-primary/25"
                                        >
                                          <span className="font-mono text-[0.6rem] font-bold text-primary">
                                            {service.n}
                                          </span>

                                          <p className="display mt-1 text-lg text-dark">
                                            {service.title}
                                          </p>

                                          <p className="mt-2 text-xs leading-relaxed text-dark/55">
                                            {service.desc}
                                          </p>

                                          <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                                            {
                                              t.header
                                                .servicesMenuPlans
                                            }

                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                          </span>
                                        </Link>
                                      </SheetClose>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }

                        return (
                          <SheetClose
                            asChild
                            key={item.href}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-4 border-b border-black/10 py-5"
                            >
                              <span className="font-mono text-xs font-bold text-primary">
                                0{index + 1}
                              </span>

                              <span className="display text-3xl text-dark transition-colors group-hover:text-primary">
                                {item.label}
                              </span>
                            </Link>
                          </SheetClose>
                        );
                      }
                    )}
                  </nav>

                  <div className="border-t border-black/10 bg-light px-7 py-7">
                    <SheetClose asChild>
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-primary font-bold text-white hover:bg-dark"
                      >
                        <Link href="/contacto">
                          {t.header.cta}
                        </Link>
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
