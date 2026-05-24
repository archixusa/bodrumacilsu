import { BadgeCheck, ShieldCheck, MapPin, Receipt } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Sertifikalı içme suyu kaynakları",
    text: "İçme suyu olarak teslim edilen su, sağlık bakanlığı onaylı kaynaklardan temin edilir. Talep üzerine analiz raporu sunarız.",
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/60",
    icon_bg: "bg-emerald-500 text-white",
    accent: "bg-emerald-500",
  },
  {
    icon: ShieldCheck,
    title: "Hijyenik ve sigortalı tankerler",
    text: "Tankerlerimiz gıda taşımacılığına uygun, paslanmaz iç yüzeyli ve düzenli olarak dezenfekte edilir. Her taşıma sigortalıdır.",
    bg: "bg-gradient-to-br from-sky-50 to-mediterranean/15",
    icon_bg: "bg-ocean text-white",
    accent: "bg-ocean",
  },
  {
    icon: MapPin,
    title: "GPS takipli teslimat",
    text: "Tankerimizin yaklaşma süresini saat saat takip edebilirsiniz. 'Ne zaman gelir?' diye merak etmenize gerek kalmaz.",
    bg: "bg-gradient-to-br from-orange-50 to-coral/15",
    icon_bg: "bg-coral text-white",
    accent: "bg-coral",
  },
  {
    icon: Receipt,
    title: "Şeffaf fiyatlandırma",
    text: "Telefonda söylenen fiyat, kapıda alınan fiyattır. Yol farkı, mesafe ücreti, hafta sonu farkı gibi sürpriz kalemler yoktur.",
    bg: "bg-gradient-to-br from-indigo-50 to-deep-blue/10",
    icon_bg: "bg-deep-blue text-white",
    accent: "bg-deep-blue",
  },
];

export function TrustPoints() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <p className="eyebrow">Neden Biz</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Sadece su getirmiyoruz.{" "}
              <span className="bg-gradient-to-r from-ocean to-coral bg-clip-text text-transparent">
                Güven taşıyoruz.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-deep-blue/65">
            Bodrum yarımadasının en zorlu yaz sezonunda dahi teslimat sürelerimizi tuttuğumuz dört temel söz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className={`relative overflow-hidden rounded-2xl p-6 transition hover:shadow-elevated ${point.bg}`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 ${point.accent}`}
                aria-hidden
              />
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft ${point.icon_bg}`}
              >
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-deep-blue">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-deep-blue/75">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
