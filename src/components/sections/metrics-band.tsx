import { Truck, MapPin, Clock4, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

const metrics = [
  {
    icon: Truck,
    value: "1.500+",
    label: "Aylık teslimat",
    sub: "Sezon yoğunluğunda 80+/gün",
  },
  {
    icon: MapPin,
    value: "12",
    label: "İlçe & bölge",
    sub: "Bodrum yarımadası + Milas",
  },
  {
    icon: Clock4,
    value: "60 dk",
    label: "Ortalama teslimat",
    sub: "Sözleşmeli müşteride 30 dk",
  },
  {
    icon: Users,
    value: `${siteConfig.rating.count}+`,
    label: "Memnun müşteri",
    sub: `${siteConfig.rating.value}/5 yıldız ortalaması`,
  },
];

export function MetricsBand() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="container-wide">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50/40 to-white p-8 shadow-soft sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className={`flex flex-col items-start gap-3 ${idx > 0 ? "lg:pl-8" : ""}`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <m.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{m.label}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
