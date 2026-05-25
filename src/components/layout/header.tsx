"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Droplets, X, Phone } from "lucide-react";
import { siteConfig, navigation, telLink } from "@/lib/config";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { CallButton } from "@/components/shared/call-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-200",
        scrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
          aria-label="Bodrum Acil Su - Ana sayfa"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white shadow-card">
            <Droplets className="h-5 w-5" aria-hidden />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent2-500"
              aria-hidden
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-ink">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-brand-700">
              Bodrum · Milas · 7/24
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Ana navigasyon"
        >
          {navigation.main.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25",
                  active
                    ? "text-brand-700"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CallButton size="sm" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink shadow-soft transition hover:border-brand-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25 lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <SheetTitle className="sr-only">Menü</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between pb-6">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setOpen(false)}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white">
                    <Droplets className="h-5 w-5" />
                  </span>
                  <span className="font-display font-semibold text-ink">
                    {siteConfig.shortName}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                  aria-label="Menüyü kapat"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <nav className="-mx-2 grid gap-1 text-base font-medium text-ink">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-3 pt-6">
                <Link
                  href={telLink()}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 font-semibold text-white shadow-card transition hover:bg-brand-700"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </Link>
                <Link
                  href="/siparis"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-xl border border-slate-200 font-semibold text-ink transition hover:border-brand-300 hover:bg-brand-50"
                >
                  Online Sipariş Ver
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
