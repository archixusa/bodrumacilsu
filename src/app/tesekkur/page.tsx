import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telLink, waLink } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Teşekkürler · Siparişinizi Aldık",
  description:
    "Sipariş özetinizi WhatsApp'tan ilettik. Operatörümüz 5 dakika içinde sizi arayacak.",
  path: "/tesekkur/",
});

export default function ThanksPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-tight relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-elevated sm:p-10">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Siparişinizi aldık.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Sipariş özetinizi WhatsApp&apos;tan ekibimize ilettik. Beklerken aşağıdaki kanallardan da bize ulaşabilirsiniz.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href={telLink()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 font-semibold text-white shadow-card transition-colors duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.contact.phone}
            </Link>
            <Link
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-white shadow-card transition-colors duration-200 hover:bg-[#1FB955] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </Link>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Anasayfaya dön
          </Link>
        </div>
      </div>
    </section>
  );
}
