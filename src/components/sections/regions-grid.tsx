import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { regions } from "@/lib/regions";

export function RegionsGrid() {
  return (
    <section className="section bg-deep-blue text-white">
      <div className="container-wide">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mediterranean">
              Hizmet Bölgeleri
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight !text-white sm:text-4xl">
              Bodrum yarımadası ve Milas&apos;ın tamamı.
            </h2>
            <p className="mt-3 text-base text-white/70">
              Marina, sahil sitesi, köy mezrası veya şantiye — bölgenin her noktasında ekibimiz aktif.
            </p>
          </div>
          <Link
            href="/bolgeler"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-mediterranean hover:text-white"
          >
            Tüm bölgeler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <li key={region.slug}>
              <Link
                href={`/bolgeler/${region.slug}`}
                className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-mediterranean/60 hover:bg-white/10"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-mediterranean">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-base font-bold !text-white">
                    {region.name}
                  </p>
                  <p className="mt-1 truncate text-xs text-white/65">
                    {region.neighborhoods.slice(0, 2).join(", ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
