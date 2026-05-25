import Link from "next/link";
import {
  Droplets,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";
import { siteConfig, navigation, telLink, waLink } from "@/lib/config";
import { regions } from "@/lib/regions";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent2-500/10 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="Ana sayfa"
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-accent2-500 text-white shadow-card">
                <Droplets className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-brand-300">
                  Bodrum · Milas · 7/24
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Bodrum-Milas bölgesinin en hızlı tanker su hizmeti. İçme, kullanma ve havuz suyu için yıl boyu ulaşılabiliriz.
            </p>
            <div className="space-y-2 text-sm text-white/85">
              <Link
                href={telLink()}
                className="flex items-center gap-2 rounded-md transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
              >
                <Phone className="h-4 w-4 text-brand-300" aria-hidden />
                {siteConfig.contact.phone}
              </Link>
              <Link
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
              >
                <Mail className="h-4 w-4 text-brand-300" aria-hidden />
                {siteConfig.contact.email}
              </Link>
              <p className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 text-brand-300" aria-hidden />
                {siteConfig.contact.address}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-colors hover:border-accent2-400 hover:bg-accent2-500/10 hover:text-accent2-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-colors hover:border-accent2-400 hover:bg-accent2-500/10 hover:text-accent2-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Hizmetler
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Kurumsal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Bölgeler
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-sm text-white/80">
              {regions.slice(0, 8).map((region) => (
                <li key={region.slug}>
                  <Link
                    href={`/bolgeler/${region.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {region.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/bolgeler"
                  className="font-semibold text-accent2-300 transition-colors hover:text-accent2-200"
                >
                  Tüm bölgeler →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır. Bodrum Acil Su, lisanslı tedarikçilerle çalışan bir hizmet platformudur.
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {navigation.footer.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
