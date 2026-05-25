import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Star,
  Sparkles,
  Check,
} from "lucide-react";
import { regions, getRegion } from "@/lib/regions";
import { siteConfig } from "@/lib/config";
import { buildMetadata, jsonLdScript } from "@/lib/seo";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

interface PageProps {
  params: { ilce: string };
}

export function generateStaticParams() {
  return regions.map((r) => ({ ilce: r.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const region = getRegion(params.ilce);
  if (!region) return {};
  return buildMetadata({
    title: region.title,
    description: region.metaDescription,
    path: `/bolgeler/${region.slug}/`,
  });
}

export default function RegionDetail({ params }: PageProps) {
  const region = getRegion(params.ilce);
  if (!region) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bölgeler",
        item: `${siteConfig.url}/bolgeler`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: region.name,
        item: `${siteConfig.url}/bolgeler/${region.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${region.name} Su Tankeri`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
    },
    areaServed: { "@type": "Place", name: region.name },
    description: region.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema)}
      />

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
              href="/bolgeler"
              className="rounded-md transition-colors hover:text-ink"
            >
              Bölgeler
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-ink">{region.name}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {region.name}
              </span>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
                {region.heroHeadline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {region.heroLead}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton size="lg" variant="coral" />
                <WhatsAppLink
                  size="lg"
                  variant="outline"
                  text={`Merhaba, ${region.name} için su tankeri sipariş vermek istiyorum.`}
                  label={`${region.name} için sipariş`}
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Star
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                  <strong className="font-semibold text-ink">
                    {siteConfig.rating.value}/5
                  </strong>
                  <span>({siteConfig.rating.count}+ yorum)</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-4 w-4 text-brand-600"
                    aria-hidden
                  />
                  Sigortalı teslimat
                </span>
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
                    Bölgeye özel
                  </p>
                </div>
                <p className="mt-2 font-display text-xl font-semibold text-ink">
                  {region.name} öne çıkanlar
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  {region.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                        aria-hidden
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl border border-accent2-100 bg-accent2-50/60 p-4 text-xs leading-relaxed text-ink">
                  <span className="font-semibold text-accent2-700">
                    Özel hizmet:
                  </span>{" "}
                  {region.specialNote}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="max-w-none">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {region.name}&apos;e su tankeri hizmeti
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              {region.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {region.longDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Bölgemize özel olarak{" "}
              <strong className="text-ink">
                {region.specialNote.toLowerCase()}
              </strong>{" "}
              Tanker büyüklüğünden hijyen sertifikasına, fatura ihtiyaçlarınızdan teslimat saatine kadar her detayı sizinle birlikte kararlaştırıyoruz.
            </p>
          </article>

          <aside className="space-y-4 rounded-2xl border border-slate-200 bg-surface-tint p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              {region.name} ulaştığımız mahalleler
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-ink">
              {region.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-soft ring-1 ring-slate-200/60"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              Mahalleniz listede yoksa bize ulaşın{" "}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      {region.faq.length > 0 && (
        <FAQ
          items={region.faq}
          title={`${region.name}'e özel sorular`}
          eyebrow="Bölgesel S.S.S."
        />
      )}

      <section className="border-t border-slate-200 bg-white">
        <div className="container-wide py-12">
          <h3 className="font-display text-xl font-semibold text-ink">
            Yakın bölgeler
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {regions
              .filter((r) => r.slug !== region.slug)
              .slice(0, 4)
              .map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/bolgeler/${r.slug}`}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                  >
                    {r.name}
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
