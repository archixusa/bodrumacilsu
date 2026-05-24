import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz · Bodrum Acil Su",
  description:
    "İçme suyu, kullanma suyu, havuz dolumu, inşaat suyu ve site aboneliği — Bodrum-Milas bölgesi için dört temel tanker su hizmeti.",
  path: "/hizmetler/",
});

export default function ServicesIndex() {
  return (
    <>
      <section className="bg-sand/30 py-16 sm:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Hizmetlerimiz</p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
              İhtiyacınıza uygun tanker tipi.
            </h1>
            <p className="mt-3 text-base text-deep-blue/70">
              İçme suyundan inşaat şantiyesine, butik villa havuzundan site aboneliğine — dört temel hizmet, esnek paket seçenekleri.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-elevated"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                  <service.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-deep-blue">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-deep-blue/70">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
                  Hizmet detayı <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
