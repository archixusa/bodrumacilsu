import Link from "next/link";
import { ArrowRight, Phone, Star, Sparkles, Zap, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig, telLink } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { WaveDivider } from "@/components/shared/wave-divider";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sand via-white to-mediterranean/15">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-mediterranean/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-coral/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-ocean/10 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Şu an aktif · Bodrum &amp; Milas&apos;ta 7/24 hizmet
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-deep-blue text-balance sm:text-5xl lg:text-6xl">
            Bodrum&apos;da Susuz Kalmayın.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-ocean via-mediterranean to-coral bg-clip-text text-transparent">
                1 Saatte
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 bg-coral/20"
                aria-hidden
              />
            </span>{" "}
            Kapınızda.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-blue/75 sm:text-lg">
            Acil su ihtiyacınız için Bodrum-Milas&apos;ın en hızlı tanker hizmeti. Tek bir aramayla, garantili teslimat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" variant="coral" />
            <WhatsAppLink
              size="lg"
              text={`Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`}
            />
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat
              icon={Star}
              tint="bg-amber-100 text-amber-600"
              value={`${siteConfig.rating.value}/5`}
              label={`${siteConfig.rating.count}+ değerlendirme`}
            />
            <Stat
              icon={ShieldCheck}
              tint="bg-emerald-100 text-emerald-700"
              value="Sigortalı"
              label="Her teslimat"
            />
            <Stat
              icon={MapPin}
              tint="bg-sky-100 text-sky-700"
              value="12 ilçe"
              label="Bodrum &amp; Milas"
            />
            <Stat
              icon={Zap}
              tint="bg-orange-100 text-coral"
              value="60 dk"
              label="Ortalama teslimat"
            />
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-mediterranean/40 via-ocean/20 to-coral/30 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl bg-white p-6 shadow-elevated ring-1 ring-deep-blue/5 sm:p-7">
            <div className="absolute -top-3 left-6 right-6 h-1.5 rounded-full bg-gradient-to-r from-ocean via-mediterranean to-coral" aria-hidden />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-coral/15 text-coral">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                Hızlı sipariş
              </p>
            </div>
            <p className="mt-3 font-display text-2xl font-bold text-deep-blue">
              30 saniyede teklif alın
            </p>
            <p className="mt-2 text-sm text-deep-blue/70">
              Form 3 adımda tamamlanır, WhatsApp&apos;tan anında dönüş alırsınız.
            </p>
            <div className="mt-5 grid gap-2.5">
              <Link
                href="/siparis"
                className="group inline-flex h-12 items-center justify-between rounded-xl bg-gradient-to-r from-deep-blue to-ocean px-4 font-semibold text-white shadow-soft transition hover:shadow-elevated"
              >
                <span>Online sipariş ver</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={telLink()}
                className="inline-flex h-12 items-center justify-between rounded-xl border border-deep-blue/15 bg-white px-4 font-semibold text-deep-blue transition hover:border-ocean/40"
              >
                <span>{siteConfig.contact.phone}</span>
                <Phone className="h-4 w-4 text-ocean" />
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-coral/10 via-amber-50 to-mediterranean/10 p-3 text-xs text-deep-blue/75">
              <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-coral shadow-soft">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-deep-blue">Ortalama 60 dakika</p>
                <p>Sezon yoğunluğunda bile teslimat sürelerimizi tutuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#FFFFFF" className="relative" />
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
    <div className="rounded-2xl bg-white/70 p-3 backdrop-blur-sm ring-1 ring-deep-blue/5">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${tint}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-2 font-display text-lg font-bold text-deep-blue">
        {value}
      </p>
      <p
        className="text-[11px] leading-tight text-deep-blue/60"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}
