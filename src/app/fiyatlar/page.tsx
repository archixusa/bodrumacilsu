import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
    title: "Tonaj",
    text: "5, 10, 15, 20, 30 ton seçenekleri. Daha yüksek tonaj birim fiyatı düşürür.",
  },
  {
    title: "Su tipi",
    text: "İçme suyu sertifikalı kaynaktan geldiği için kullanma suyundan farklı fiyatlanır.",
  },
  {
    title: "Konum",
    text: "Teslimat mesafesi ve erişim zorluğu fiyatı belirleyen kalemler arasında.",
  },
  {
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
      <section className="bg-sand/30 py-16 sm:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Fiyatlandırma</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
              Şeffaf, telefonda netleşen fiyatlar
            </h1>
            <p className="mt-3 text-base text-deep-blue/70">
              Sabit fiyat listesi tutmuyoruz; en doğru fiyat ihtiyacınıza özel olur. Bizi arayın, 30 saniyede tonaj ve mesafeye göre net teklif söyleyelim.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppLink
                size="lg"
                text={`Merhaba, ${siteConfig.shortName} için fiyat almak istiyorum.`}
                label="Fiyat İste"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                  Fiyat etkeni
                </p>
                <p className="mt-2 font-display text-lg font-bold text-deep-blue">
                  {f.title}
                </p>
                <p className="mt-2 text-sm text-deep-blue/70">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-soft sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
              Söz veriyoruz
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-deep-blue sm:text-3xl">
              Fiyat şeffaflığı, sürpriz ücret yok
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-deep-blue/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/siparis"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-deep-blue"
            >
              Online sipariş ile teklif al <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
