import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  Droplets,
  MapPin,
  Clock4,
  ShieldCheck,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Fiyatlar · Şeffaf Tanker Su Fiyatlandırması",
  description:
    "Bodrum-Milas tanker su fiyatları konum, tonaj ve su tipine göre belirlenir. Sürpriz ücret yok, telefonda 30 saniyede net teklif.",
  path: "/fiyatlar/",
});

const factors = [
  {
    icon: Gauge,
    title: "Tonaj",
    text: "5, 10, 15, 20, 30 ton seçenekleri. Daha yüksek tonaj birim fiyatı düşürür.",
  },
  {
    icon: Droplets,
    title: "Su tipi",
    text: "İçme suyu sertifikalı kaynaktan geldiği için kullanma suyundan farklı fiyatlanır.",
  },
  {
    icon: MapPin,
    title: "Konum",
    text: "Teslimat mesafesi ve erişim zorluğu fiyatı belirleyen kalemler arasında.",
  },
  {
    icon: Clock4,
    title: "Aciliyet",
    text: "Hemen, bugün veya planlı teslimat seçenekleri. Sözleşmeli müşterilere indirim.",
  },
];

const promises = [
  "Telefonda söylenen fiyat kapıda alınan fiyattır.",
  "Mesafe farkı, hafta sonu farkı gibi sürpriz kalemler yoktur.",
  "Kurumsal müşterilere fatura/e-fatura desteği.",
  "Sözleşmeli site müşterilerine sabit aylık paket.",
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
          aria-hidden
        />

        <div className="container-wide relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Fiyatlandırma</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              <span className="gradient-text">Şeffaf</span>, telefonda netleşen fiyatlar.
            </h1>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              Sabit fiyat listesi tutmuyoruz; en doğru fiyat ihtiyacınıza özel olur. Bizi arayın, 30 saniyede tonaj ve mesafeye göre net teklif söyleyelim.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" variant="coral" />
              <WhatsAppLink
                size="lg"
                variant="outline"
                text={`Merhaba, ${siteConfig.shortName} için fiyat almak istiyorum.`}
                label="Fiyat iste"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-elevated"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Fiyat etkeni
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">
                  {f.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {f.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50/30 to-white p-8 shadow-soft sm:p-12">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Söz veriyoruz
              </p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Fiyat şeffaflığı, sürpriz ücret yok.
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm leading-relaxed text-ink"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/siparis"
              className="mt-8 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
            >
              Online sipariş ile teklif al{" "}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
