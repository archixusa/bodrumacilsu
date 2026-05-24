import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services, getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { FinalCTA } from "@/components/sections/final-cta";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} · Bodrum Acil Su`,
    description: service.description,
    path: `/hizmetler/${service.slug}/`,
  });
}

export default function ServiceDetail({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const other = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-gradient-to-b from-sand/40 via-white to-white">
        <div className="container-wide py-12 sm:py-20">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-deep-blue/60">
            <Link href="/" className="hover:text-deep-blue">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-deep-blue">Hizmetler</Link>
            <span>/</span>
            <span className="text-deep-blue">{service.title}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                <service.icon className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-deep-blue text-balance sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-deep-blue/70 sm:text-lg">
                {service.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton size="lg" />
                <WhatsAppLink
                  size="lg"
                  text={`Merhaba, ${service.title} hizmeti için sipariş vermek istiyorum.`}
                  label={service.cta}
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-deep-blue/10 bg-white p-6 shadow-elevated">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                Hizmet özellikleri
              </p>
              <p className="mt-2 font-display text-xl font-bold text-deep-blue">
                Pakette neler var?
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-deep-blue/80">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean" />
                    {b}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight">
          <h2 className="font-display text-2xl font-bold text-deep-blue sm:text-3xl">
            {service.title} hakkında
          </h2>
          <p className="mt-5 text-base leading-relaxed text-deep-blue/80">
            {service.long}
          </p>
          <p className="mt-4 text-base leading-relaxed text-deep-blue/80">
            {siteConfig.name} olarak <strong>Bodrum-Milas</strong> bölgesinin her noktasına bu hizmeti sunuyoruz. Bireysel müşterilere şeffaf fiyatlandırma, kurumsal müşterilere fatura ve sözleşmeli paket avantajı vardır.
          </p>
        </div>
      </section>

      <section className="border-t border-deep-blue/5 bg-sand/30">
        <div className="container-wide py-12">
          <h3 className="font-display text-xl font-bold text-deep-blue">
            Diğer hizmetler
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {other.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="flex items-center justify-between rounded-xl border border-deep-blue/10 bg-white px-4 py-3 text-sm font-semibold text-deep-blue transition hover:border-ocean/40"
                >
                  {s.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
