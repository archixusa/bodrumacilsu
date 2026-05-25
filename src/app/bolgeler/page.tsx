import Link from "next/link";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { regions } from "@/lib/regions";
import { buildMetadata } from "@/lib/seo";
import { TrustBar } from "@/components/shared/trust-bar";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Hizmet Bölgeleri · Bodrum & Milas",
  description:
    "Bodrum yarımadası ve Milas çevresinde hizmet verdiğimiz tüm ilçe ve mahalleler. Her bölgenin özelliklerine uygun tanker filo desteği.",
  path: "/bolgeler/",
});

export default function RegionsIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent2-200/20 blur-3xl"
          aria-hidden
        />

        <div className="container-wide relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
              </span>
              Hizmet bölgeleri
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Bodrum yarımadası ve{" "}
              <span className="gradient-text">Milas&apos;ın tamamı.</span>
            </h1>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              Marina, sahil sitesi, butik otel, köy mezrası veya şantiye — bölgenin her noktasında ekibimiz aktif. 12 ana bölge için ayrı sayfa, ayrı operatör.
            </p>
            <div className="mt-6 flex justify-center">
              <TrustBar />
            </div>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, idx) => {
              const accentClasses = [
                "from-brand-600 to-brand-400",
                "from-accent2-500 to-amber-400",
                "from-emerald-600 to-emerald-400",
                "from-sky-600 to-sky-400",
              ];
              const accent = accentClasses[idx % accentClasses.length];
              return (
                <li key={region.slug}>
                  <Link
                    href={`/bolgeler/${region.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-200 hover:border-brand-200 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
                      aria-hidden
                    />
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-card`}
                    >
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="mt-5 font-display text-xl font-semibold text-ink">
                      {region.name}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {region.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {region.neighborhoods.slice(0, 3).map((n) => (
                        <span
                          key={n}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-surface-tint px-2 py-0.5 text-[11px] font-medium text-ink-muted"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Bölge detayı{" "}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-surface-tint p-6 text-center sm:p-8">
            <p className="font-display text-lg font-semibold text-ink">
              Bölgeniz listede yok mu?
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Listede görmediğiniz bir bölgeye de yönlendirme yapabiliyoruz. Bizi arayın, beraber bakalım.
            </p>
            <Link
              href="/iletisim"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              <Search className="h-4 w-4" aria-hidden />
              Bölgenizi sorgulayın
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
