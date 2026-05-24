import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { siteConfig, telLink } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand/40 via-white to-white">
      <div className="container-wide grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-deep-blue/10 bg-white px-3 py-1 text-xs font-semibold text-deep-blue shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Şu an aktif · Bodrum &amp; Milas&apos;ta 7/24 hizmet
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-deep-blue text-balance sm:text-5xl lg:text-6xl">
            Bodrum&apos;da Susuz Kalmayın.{" "}
            <span className="text-ocean">1 Saatte</span> Kapınızda.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-blue/70 sm:text-lg">
            Acil su ihtiyacınız için Bodrum-Milas&apos;ın en hızlı tanker hizmeti. Tek bir aramayla, garantili teslimat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppLink
              size="lg"
              text={`Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-deep-blue/70">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-coral text-coral" />
              <strong className="font-semibold text-deep-blue">
                {siteConfig.rating.value}/5
              </strong>
              ({siteConfig.rating.count}+ değerlendirme)
            </span>
            <span>🛡️ Sigortalı teslimat</span>
            <span>📍 Tüm Bodrum &amp; Milas</span>
            <span>⚡ Ortalama 60 dakika</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-deep-blue/10 bg-white p-6 shadow-elevated">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
              Hızlı sipariş
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-deep-blue">
              30 saniyede teklif alın
            </p>
            <p className="mt-2 text-sm text-deep-blue/65">
              Form 3 adımda tamamlanır, WhatsApp&apos;tan anında dönüş alırsınız.
            </p>
            <div className="mt-5 grid gap-2.5">
              <Link
                href="/siparis"
                className="inline-flex h-12 items-center justify-between rounded-xl bg-deep-blue px-4 font-semibold text-white transition hover:bg-deep-blue/90"
              >
                <span>Online sipariş ver</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={telLink()}
                className="inline-flex h-12 items-center justify-between rounded-xl border border-deep-blue/15 px-4 font-semibold text-deep-blue transition hover:border-deep-blue/30"
              >
                <span>{siteConfig.contact.phone}</span>
                <Phone className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-sand/60 p-3 text-xs text-deep-blue/70">
              <span className="font-display text-2xl font-bold text-deep-blue">
                ⚡
              </span>
              <div>
                <p className="font-semibold text-deep-blue">Ortalama 60 dakika</p>
                <p>Sezon yoğunluğunda bile teslimat sürelerimizi tutuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
