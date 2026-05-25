import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Star,
  ShieldCheck,
  Clock4,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { siteConfig, telLink } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-20 sm:pt-24">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 pattern-dots opacity-40"
        aria-hidden
      />

      <div className="container-wide relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Şu an aktif · Bodrum &amp; Milas&apos;ta 7/24 hizmet
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-[64px]">
            Bodrum&apos;da susuz kalmayın.{" "}
            <span className="relative inline-block">
              <span className="gradient-text">1 saatte kapınızda.</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-accent2-200/50"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Acil su ihtiyacınız için Bodrum-Milas&apos;ın en hızlı tanker hizmeti. Sertifikalı kaynak, sigortalı teslimat, şeffaf fiyat — tek bir aramayla.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" variant="coral" />
            <WhatsAppLink
              size="lg"
              text={`Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`}
              variant="outline"
            />
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat
              icon={Star}
              tint="bg-amber-100 text-amber-700"
              value={`${siteConfig.rating.value}/5`}
              label={`${siteConfig.rating.count}+ değerlendirme`}
            />
            <Stat
              icon={ShieldCheck}
              tint="bg-brand-100 text-brand-700"
              value="Sigortalı"
              label="Her teslimat"
            />
            <Stat
              icon={BadgeCheck}
              tint="bg-emerald-100 text-emerald-700"
              value="Sertifikalı"
              label="İçme suyu kaynağı"
            />
            <Stat
              icon={Clock4}
              tint="bg-accent2-100 text-accent2-700"
              value="60 dk"
              label="Ortalama teslimat"
            />
          </dl>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-200/40 via-white to-accent2-200/30 blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-floating ring-1 ring-slate-200/60 sm:p-7">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-accent2-500"
              aria-hidden
            />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent2-100 text-accent2-600">
                <Zap className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent2-700">
                Hızlı sipariş
              </p>
            </div>
            <p className="mt-3 font-display text-2xl font-semibold text-ink">
              30 saniyede teklif alın
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Form 3 adımda tamamlanır, WhatsApp&apos;tan anında dönüş alırsınız.
            </p>
            <div className="mt-5 grid gap-2.5">
              <Link
                href="/siparis"
                className="group inline-flex h-12 items-center justify-between rounded-xl bg-brand-600 px-4 font-semibold text-white shadow-card transition-colors duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
              >
                <span>Online sipariş ver</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href={telLink()}
                className="inline-flex h-12 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 font-semibold text-ink transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
                aria-label={`Hemen ara: ${siteConfig.contact.phone}`}
              >
                <span>{siteConfig.contact.phone}</span>
                <Phone className="h-4 w-4 text-brand-600" aria-hidden />
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-brand-50 via-white to-accent2-50/60 p-3">
              <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-accent2-600 shadow-soft ring-1 ring-slate-200/60">
                <Zap className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Ortalama 60 dakika
                </p>
                <p className="text-xs text-ink-muted">
                  Sezon yoğunluğunda bile teslimat sürelerimizi tutuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  tint,
  value,
  label,
}: {
  icon: typeof Star;
  tint: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-3 backdrop-blur-sm">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${tint}`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <p className="mt-2 font-display text-lg font-semibold text-ink">
        {value}
      </p>
      <p className="text-[11px] leading-tight text-ink-muted">{label}</p>
    </div>
  );
}
