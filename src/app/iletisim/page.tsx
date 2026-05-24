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
    <section className="bg-sand/30 py-16 sm:py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">İletişim</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Bize ulaşın
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            <strong>Acil mi?</strong> Direkt arayın. Form doldurmayın. Saniyeleri saymayın.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          <Link
            href={telLink()}
            className="group rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-ocean/40"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue text-white">
              <Phone className="h-6 w-6" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
              Telefon · 7/24
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-deep-blue">
              {siteConfig.contact.phone}
            </p>
            <p className="mt-2 text-sm text-deep-blue/65">
              30 saniyede fiyat, 60 dakikada teslimat. Tek arama yeterli.
            </p>
          </Link>

          <Link
            href={waLink(`Merhaba, ${siteConfig.shortName} için bilgi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-whatsapp/30 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-whatsapp"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-whatsapp">
              WhatsApp
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-deep-blue">
              {siteConfig.contact.whatsapp}
            </p>
            <p className="mt-2 text-sm text-deep-blue/65">
              Sipariş, fiyat ve teslimat takibi için en hızlı kanal.
            </p>
          </Link>

          <div className="rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
              <Mail className="h-6 w-6" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
              E-posta
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 inline-block font-display text-2xl font-bold text-deep-blue hover:text-ocean"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm text-deep-blue/65">
              Kurumsal teklifler, fatura ve sözleşme talepleri için.
            </p>
          </div>

          <div className="rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
              <MapPin className="h-6 w-6" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
              Hizmet Bölgesi
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-deep-blue">
              Bodrum &amp; Milas
            </p>
            <p className="mt-2 text-sm text-deep-blue/65">
              Bodrum yarımadasının tamamı ve Milas çevresi. Detaylı bölge listesi için{" "}
              <Link href="/bolgeler" className="text-ocean hover:text-deep-blue">
                bölgeler sayfası
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl bg-deep-blue p-7 text-white sm:col-span-2">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mediterranean">
                  Çalışma Saatleri
                </p>
                <p className="mt-2 font-display text-2xl font-bold !text-white">
                  7 gün, 24 saat
                </p>
                <p className="mt-2 max-w-xl text-sm text-white/80">
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
