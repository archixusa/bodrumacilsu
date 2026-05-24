import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telLink, waLink } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Teşekkürler · Siparişinizi Aldık",
  description: "Sipariş özetinizi WhatsApp'tan ilettik. Operatörümüz 5 dakika içinde sizi arayacak.",
  path: "/tesekkur/",
});

export default function ThanksPage() {
  return (
    <section className="section bg-sand/30">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl rounded-3xl border border-deep-blue/10 bg-white p-10 text-center shadow-soft">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold text-deep-blue sm:text-4xl">
            Siparişinizi aldık.
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            Sipariş özetinizi WhatsApp&apos;tan ekibimize ilettik. Beklerken aşağıdaki kanallardan da bize ulaşabilirsiniz.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href={telLink()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-deep-blue font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
            </Link>
            <Link
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex text-sm font-semibold text-ocean hover:text-deep-blue"
          >
            ← Anasayfaya dön
          </Link>
        </div>
      </div>
    </section>
  );
}
