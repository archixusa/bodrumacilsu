import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, ShieldCheck, Star } from "lucide-react";
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

      <section className="bg-gradient-to-b from-sand/40 via-white to-white">
        <div className="container-wide py-12 sm:py-16 lg:py-24">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-deep-blue/60">
            <Link href="/" className="hover:text-deep-blue">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/bolgeler" className="hover:text-deep-blue">Bölgeler</Link>
            <span>/</span>
            <span className="text-deep-blue">{region.name}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-deep-blue/10 bg-white px-3 py-1 text-xs font-semibold text-deep-blue shadow-soft">
                <MapPin className="h-3.5 w-3.5" /> {region.name}
              </span>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-deep-blue text-balance sm:text-4xl lg:text-5xl">
                {region.heroHeadline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-deep-blue/70 sm:text-lg">
                {region.heroLead}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton size="lg" />
                <WhatsAppLink
                  size="lg"
                  text={`Merhaba, ${region.name} için su tankeri sipariş vermek istiyorum.`}
                  label={`${region.name} için Sipariş`}
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-deep-blue/70">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-coral text-coral" />
                  {siteConfig.rating.value}/5 ({siteConfig.rating.count}+ yorum)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-ocean" /> Sigortalı teslimat
                </span>
              </div>
            </div>

            <aside className="rounded-3xl border border-deep-blue/10 bg-white p-6 shadow-elevated">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                Bölgeye özel
              </p>
              <p className="mt-2 font-display text-xl font-bold text-deep-blue">
                {region.name} öne çıkanlar
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-deep-blue/80">
                {region.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-ocean" />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-sand/60 p-4 text-xs text-deep-blue/70">
                <span className="font-semibold text-deep-blue">Özel hizmet:</span>{" "}
                {region.specialNote}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="prose-bodrum max-w-none">
            <h2 className="font-display text-2xl font-bold text-deep-blue sm:text-3xl">
              {region.name}&apos;e su tankeri hizmeti
            </h2>
            <p className="mt-4 text-base leading-relaxed text-deep-blue/80">
              {region.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-deep-blue/80">
              {region.longDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-deep-blue/80">
              Bölgemize özel olarak <strong>{region.specialNote.toLowerCase()}</strong> Tanker büyüklüğünden hijyen sertifikasına, fatura ihtiyaçlarınızdan teslimat saatine kadar her detayı sizinle birlikte kararlaştırıyoruz.
            </p>
          </article>

          <aside className="space-y-4 rounded-2xl border border-deep-blue/10 bg-sand/30 p-6">
            <h3 className="font-display text-lg font-bold text-deep-blue">
              {region.name} ulaştığımız mahalleler
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-deep-blue/80">
              {region.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="flex items-center gap-2 rounded-lg bg-white px-3 py-2"
                >
                  <MapPin className="h-3.5 w-3.5 text-ocean" />
                  {n}
                </li>
              ))}
            </ul>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-deep-blue"
            >
              Mahalleniz listede yoksa bize ulaşın <ArrowRight className="h-3.5 w-3.5" />
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

      <section className="border-t border-deep-blue/5 bg-white">
        <div className="container-wide py-12">
          <h3 className="font-display text-xl font-bold text-deep-blue">
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
                    className="flex items-center justify-between rounded-xl border border-deep-blue/10 bg-white px-4 py-3 text-sm font-semibold text-deep-blue transition hover:border-ocean/40"
                  >
                    {r.name}
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
