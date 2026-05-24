"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Droplets, X, Phone } from "lucide-react";
import { siteConfig, navigation, telLink } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { CallButton } from "@/components/shared/call-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-deep-blue/10 bg-white/90 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Anasayfa">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-deep-blue text-white">
            <Droplets className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-deep-blue">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Bodrum · Milas · 7/24
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-deep-blue/80 lg:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-deep-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CallButton size="sm" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-deep-blue/10 bg-white text-deep-blue lg:hidden"
            aria-label="Menü"
          >
            <Menu className="h-5 w-5" />
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
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-deep-blue text-white">
                    <Droplets className="h-5 w-5" />
                  </span>
                  <span className="font-display font-bold text-deep-blue">
                    {siteConfig.shortName}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-deep-blue/10"
                  aria-label="Kapat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="-mx-2 grid gap-1 text-base font-medium text-deep-blue">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 hover:bg-sand"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-3 pt-6">
                <Link
                  href={telLink()}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-deep-blue font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </Link>
                <Link
                  href="/siparis"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-xl border border-deep-blue/15 font-semibold text-deep-blue"
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
