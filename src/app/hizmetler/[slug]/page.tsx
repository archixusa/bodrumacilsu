import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-accent2-200/30 blur-3xl"
          aria-hidden
        />

        <div className="container-wide relative py-12 sm:py-16 lg:py-20">
          <nav
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="rounded-md transition-colors hover:text-ink"
            >
              Ana Sayfa
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/hizmetler"
              className="rounded-md transition-colors hover:text-ink"
            >
              Hizmetler
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-ink">{service.title}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-card">
                <service.icon className="h-6 w-6" aria-hidden />
              </span>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {service.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton size="lg" variant="coral" />
                <WhatsAppLink
                  size="lg"
                  variant="outline"
                  text={`Merhaba, ${service.title} hizmeti için sipariş vermek istiyorum.`}
                  label={service.cta}
                />
              </div>
            </div>

            <aside className="relative">
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-200/30 via-white to-accent2-200/30 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-elevated">
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 to-accent2-500"
                  aria-hidden
                />
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent2-100 text-accent2-600">
                    <Sparkles className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent2-700">
                    Hizmet özellikleri
                  </p>
                </div>
                <p className="mt-2 font-display text-xl font-semibold text-ink">
                  Pakette neler var?
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {service.title} hakkında
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {service.long}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            <strong className="text-ink">{siteConfig.name}</strong> olarak Bodrum-Milas bölgesinin her noktasına bu hizmeti sunuyoruz. Bireysel müşterilere şeffaf fiyatlandırma, kurumsal müşterilere fatura ve sözleşmeli paket avantajı vardır.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-surface-tint">
        <div className="container-wide py-12">
          <h3 className="font-display text-xl font-semibold text-ink">
            Diğer hizmetler
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {other.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                >
                  {s.title}
                  <ArrowRight
                    className="h-3.5 w-3.5 text-brand-600"
                    aria-hidden
                  />
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
