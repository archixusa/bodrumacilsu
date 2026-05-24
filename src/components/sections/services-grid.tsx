import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const tints = [
  {
    icon: "bg-gradient-to-br from-sky-400 to-ocean text-white",
    glow: "from-ocean/15 to-mediterranean/5",
    border: "hover:border-ocean/40",
    link: "text-ocean",
  },
  {
    icon: "bg-gradient-to-br from-mediterranean to-cyan-400 text-white",
    glow: "from-mediterranean/15 to-cyan-300/5",
    border: "hover:border-mediterranean/50",
    link: "text-mediterranean",
  },
  {
    icon: "bg-gradient-to-br from-amber-400 to-coral text-white",
    glow: "from-coral/15 to-amber-300/5",
    border: "hover:border-coral/50",
    link: "text-coral",
  },
  {
    icon: "bg-gradient-to-br from-deep-blue to-indigo-700 text-white",
    glow: "from-deep-blue/15 to-indigo-400/5",
    border: "hover:border-deep-blue/40",
    link: "text-deep-blue",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative section bg-gradient-to-b from-sand/40 to-white">
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
          {services.map((service, idx) => {
            const t = tints[idx % tints.length];
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated ${t.border}`}
              >
                <span
                  className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${t.glow} blur-2xl transition group-hover:scale-150`}
                  aria-hidden
                />
                <span
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-soft ${t.icon}`}
                >
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-deep-blue">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-deep-blue/70">
                  {service.short}
                </p>
                <span
                  className={`relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${t.link}`}
                >
                  Detay <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
