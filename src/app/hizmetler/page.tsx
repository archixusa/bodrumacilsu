import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { TrustBar } from "@/components/shared/trust-bar";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz · Bodrum Acil Su",
  description:
    "İçme suyu, kullanma suyu, havuz dolumu, inşaat suyu ve site aboneliği — Bodrum-Milas bölgesi için dört temel tanker su hizmeti.",
  path: "/hizmetler/",
});

const cardTints = [
  {
    bar: "from-brand-700 to-brand-500",
    icon: "bg-gradient-to-br from-brand-600 to-brand-400",
    pill: "border-brand-100 bg-brand-50 text-brand-700",
  },
  {
    bar: "from-sky-600 to-sky-400",
    icon: "bg-gradient-to-br from-sky-500 to-cyan-400",
    pill: "border-sky-100 bg-sky-50 text-sky-700",
  },
  {
    bar: "from-accent2-500 to-amber-400",
    icon: "bg-gradient-to-br from-accent2-500 to-amber-400",
    pill: "border-accent2-100 bg-accent2-50 text-accent2-700",
  },
  {
    bar: "from-emerald-600 to-emerald-400",
    icon: "bg-gradient-to-br from-emerald-600 to-emerald-400",
    pill: "border-emerald-100 bg-emerald-50 text-emerald-700",
  },
];

export default function ServicesIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 right-1/3 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
          aria-hidden
        />

        <div className="container-wide relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Hizmetler</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              <span className="gradient-text">İhtiyacınıza uygun</span> tanker tipi.
            </h1>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              İçme suyundan inşaat şantiyesine, butik villa havuzundan site aboneliğine — dört temel hizmet, esnek paket seçenekleri.
            </p>
            <div className="mt-6 flex justify-center">
              <TrustBar />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service, idx) => {
              const t = cardTints[idx % cardTints.length];
              return (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow duration-200 hover:border-brand-200 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.bar}`}
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-card ${t.icon}`}
                    >
                      <service.icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700`}
                  >
                    Hizmet detayı{" "}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
