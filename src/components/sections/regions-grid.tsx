import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { regions } from "@/lib/regions";

export function RegionsGrid() {
  return (
    <section className="relative overflow-hidden bg-deep-blue text-white">
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-mediterranean/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-coral/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="container-wide relative section">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mediterranean">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-mediterranean/20 text-mediterranean">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              Hizmet Bölgeleri
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight !text-white sm:text-4xl">
              Bodrum yarımadası ve{" "}
              <span className="bg-gradient-to-r from-mediterranean to-coral bg-clip-text text-transparent">
                Milas&apos;ın tamamı.
              </span>
            </h2>
            <p className="mt-3 text-base text-white/75">
              Marina, sahil sitesi, köy mezrası veya şantiye — bölgenin her noktasında ekibimiz aktif.
            </p>
          </div>
          <Link
            href="/bolgeler"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-mediterranean transition hover:border-mediterranean/40 hover:bg-white/10 hover:text-white"
          >
            Tüm bölgeler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, idx) => {
            const accent =
              idx % 3 === 0
                ? "bg-mediterranean/20 text-mediterranean"
                : idx % 3 === 1
                ? "bg-coral/20 text-coral"
                : "bg-emerald-400/20 text-emerald-300";
            return (
              <li key={region.slug}>
                <Link
                  href={`/bolgeler/${region.slug}`}
                  className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${accent}`}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-bold !text-white">
                      {region.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-white/65">
                      {region.neighborhoods.slice(0, 2).join(", ")}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
