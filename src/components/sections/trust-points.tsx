import { BadgeCheck, ShieldCheck, MapPin, Receipt } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Sertifikalı içme suyu kaynakları",
    text: "İçme suyu olarak teslim edilen su, sağlık bakanlığı onaylı kaynaklardan temin edilir. Talep üzerine analiz raporu sunarız.",
  },
  {
    icon: ShieldCheck,
    title: "Hijyenik ve sigortalı tankerler",
    text: "Tankerlerimiz gıda taşımacılığına uygun, paslanmaz iç yüzeyli ve düzenli olarak dezenfekte edilir. Her taşıma sigortalıdır.",
  },
  {
    icon: MapPin,
    title: "GPS takipli teslimat",
    text: "Tankerimizin yaklaşma süresini saat saat takip edebilirsiniz. 'Ne zaman gelir?' diye merak etmenize gerek kalmaz.",
  },
  {
    icon: Receipt,
    title: "Şeffaf fiyatlandırma",
    text: "Telefonda söylenen fiyat, kapıda alınan fiyattır. Yol farkı, mesafe ücreti, hafta sonu farkı gibi sürpriz kalemler yoktur.",
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
              Sadece su getirmiyoruz. Güven taşıyoruz.
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
              className="rounded-2xl bg-sand/40 p-6 transition hover:bg-sand/70"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep-blue text-white">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-deep-blue">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-deep-blue/70">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
