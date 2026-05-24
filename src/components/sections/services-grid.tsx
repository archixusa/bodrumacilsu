import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="section bg-sand/30">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              İhtiyacınıza uygun tanker tipi, her zaman elimizde.
            </h2>
            <p className="mt-3 text-base text-deep-blue/70">
              İçme suyundan inşaat suyuna, site aboneliğinden tek seferlik teslimata kadar dört temel hizmet kategorisi.
            </p>
          </div>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-deep-blue"
          >
            Tüm hizmetler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-elevated"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-deep-blue">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-deep-blue/70">
                {service.short}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
                Detay <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
