import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { regions } from "@/lib/regions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hizmet Bölgeleri · Bodrum & Milas",
  description:
    "Bodrum yarımadası ve Milas çevresinde hizmet verdiğimiz tüm ilçe ve mahalleler. Her bölgenin özelliklerine uygun tanker filo desteği.",
  path: "/bolgeler/",
});

export default function RegionsIndex() {
  return (
    <section className="bg-sand/30 py-16 sm:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Hizmet Bölgeleri</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Bodrum yarımadası ve Milas&apos;ın tamamı.
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            Marina, sahil sitesi, butik otel, köy mezrası veya şantiye — bölgenin her noktasında ekibimiz aktif. Bölge sayfalarında ulaştığımız mahalleleri ve verdiğimiz özel hizmetleri görebilirsiniz.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <li key={region.slug}>
              <Link
                href={`/bolgeler/${region.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-elevated"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                  <MapPin className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-deep-blue">
                  {region.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-deep-blue/70">
                  {region.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
                  Bölge detayı <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
