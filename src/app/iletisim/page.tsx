import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telLink, waLink } from "@/lib/config";

export const metadata = buildMetadata({
  title: "İletişim · Bodrum Acil Su",
  description:
    "Bodrum & Milas bölgesinde 7/24 ulaşılabiliriz. Telefon, WhatsApp veya e-posta yoluyla bize ulaşın.",
  path: "/iletisim/",
});

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">İletişim</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="gradient-text">Bize ulaşın.</span>
          </h1>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            <strong className="text-ink">Acil mi?</strong> Direkt arayın. Form doldurmayın. Saniyeleri saymayın.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          <Link
            href={telLink()}
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow duration-200 hover:border-brand-300 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
            aria-label={`Hemen ara: ${siteConfig.contact.phone}`}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white shadow-card">
              <Phone className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Telefon · 7/24
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">
              {siteConfig.contact.phone}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              30 saniyede fiyat, 60 dakikada teslimat. Tek arama yeterli.
            </p>
          </Link>

          <Link
            href={waLink(`Merhaba, ${siteConfig.shortName} için bilgi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-whatsapp/30 bg-white p-7 shadow-soft transition-shadow duration-200 hover:border-whatsapp hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white shadow-card">
              <MessageCircle className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-whatsapp">
              WhatsApp
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">
              {siteConfig.contact.whatsapp}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Sipariş, fiyat ve teslimat takibi için en hızlı kanal.
            </p>
          </Link>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Mail className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              E-posta
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 inline-block font-display text-2xl font-semibold text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Kurumsal teklifler, fatura ve sözleşme talepleri için.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent2-50 text-accent2-700">
              <MapPin className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent2-700">
              Hizmet bölgesi
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">
              Bodrum &amp; Milas
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Bodrum yarımadasının tamamı ve Milas çevresi. Detaylı bölge listesi için{" "}
              <Link
                href="/bolgeler"
                className="font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                bölgeler sayfası
              </Link>
              .
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-500 p-7 text-white sm:col-span-2">
            <div
              className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent2-500/20 blur-2xl"
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Clock className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                  Çalışma saatleri
                </p>
                <p className="mt-2 font-display text-2xl font-semibold !text-white">
                  7 gün, 24 saat
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
                  Yaz, kış, bayram fark etmez. Gece teslimatlarda küçük bir ek ücret olabilir; telefonda netleştirilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
