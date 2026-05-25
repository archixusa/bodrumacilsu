import { BadgeCheck, ShieldCheck, MapPin, Receipt } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Sertifikalı içme suyu kaynakları",
    text: "İçme suyu olarak teslim edilen su, sağlık bakanlığı onaylı kaynaklardan temin edilir. Talep üzerine analiz raporu sunarız.",
    bg: "bg-emerald-50/60",
    accent: "bg-emerald-500",
    iconBg: "bg-emerald-500",
  },
  {
    icon: ShieldCheck,
    title: "Hijyenik ve sigortalı tankerler",
    text: "Tankerlerimiz gıda taşımacılığına uygun, paslanmaz iç yüzeyli ve düzenli olarak dezenfekte edilir. Her taşıma sigortalıdır.",
    bg: "bg-brand-50/70",
    accent: "bg-brand-600",
    iconBg: "bg-brand-600",
  },
  {
    icon: MapPin,
    title: "GPS takipli teslimat",
    text: "Tankerimizin yaklaşma süresini saat saat takip edebilirsiniz. 'Ne zaman gelir?' diye merak etmenize gerek kalmaz.",
    bg: "bg-accent2-50/70",
    accent: "bg-accent2-500",
    iconBg: "bg-accent2-500",
  },
  {
    icon: Receipt,
    title: "Şeffaf fiyatlandırma",
    text: "Telefonda söylenen fiyat, kapıda alınan fiyattır. Yol farkı, mesafe ücreti, hafta sonu farkı gibi sürpriz kalemler yoktur.",
    bg: "bg-slate-100/70",
    accent: "bg-ink",
    iconBg: "bg-ink",
  },
];

export function TrustPoints() {
  return (
    <section className="section bg-surface-tint">
      <div className="container-wide">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <p className="eyebrow">Neden biz</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Su getirmiyoruz. <span className="gradient-text">Güven taşıyoruz.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            Bodrum yarımadasının en zorlu yaz sezonunda dahi teslimat sürelerimizi tuttuğumuz dört temel söz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 p-6 transition-shadow duration-200 hover:shadow-card ${point.bg}`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 ${point.accent}`}
                aria-hidden
              />
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ${point.iconBg}`}
              >
                <point.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
