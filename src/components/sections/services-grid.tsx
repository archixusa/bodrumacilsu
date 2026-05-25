import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const tints = [
  {
    icon: "bg-gradient-to-br from-brand-600 to-brand-400 text-white",
    badge: "border-brand-100 bg-brand-50 text-brand-700",
    link: "text-brand-700 hover:text-brand-800",
  },
  {
    icon: "bg-gradient-to-br from-brand-500 to-sky-400 text-white",
    badge: "border-sky-100 bg-sky-50 text-sky-700",
    link: "text-sky-700 hover:text-sky-800",
  },
  {
    icon: "bg-gradient-to-br from-accent2-500 to-amber-400 text-white",
    badge: "border-accent2-100 bg-accent2-50 text-accent2-700",
    link: "text-accent2-700 hover:text-accent2-800",
  },
  {
    icon: "bg-gradient-to-br from-emerald-600 to-emerald-400 text-white",
    badge: "border-emerald-100 bg-emerald-50 text-emerald-700",
    link: "text-emerald-700 hover:text-emerald-800",
  },
];

const labels = ["İçilebilir", "Ekonomik", "Yüksek tonaj", "Sözleşmeli"];

export function ServicesGrid() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Hizmetler</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Hangi su, hangi tonaj — net&apos;iz.
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              İçme suyundan inşaat suyuna, site aboneliğinden tek seferlik teslimata kadar dört temel hizmet kategorisi.
            </p>
          </div>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
          >
            Tüm hizmetler{" "}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const t = tints[idx % tints.length];
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-200 hover:border-brand-200 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-card ${t.icon}`}
                  >
                    <service.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${t.badge}`}
                  >
                    {labels[idx]}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.short}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${t.link}`}
                >
                  Detay <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
