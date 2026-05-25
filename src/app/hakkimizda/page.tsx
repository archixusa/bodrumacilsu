import { Quote, Target, Users, Award } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { FinalCTA } from "@/components/sections/final-cta";
import { TrustPoints } from "@/components/sections/trust-points";
import { CertBadges } from "@/components/shared/cert-badges";

export const metadata = buildMetadata({
  title: "Hakkımızda · Bodrum Acil Su",
  description:
    "Bodrum-Milas bölgesinin değişen su ihtiyacına çözüm üretmek için kuruldu. Hızlı, dürüst ve hijyenik tanker su hizmeti.",
  path: "/hakkimizda/",
});

const pillars = [
  {
    icon: Target,
    title: "Tek odak",
    text: "Sadece tanker su. Yan iş yok, hobi yok — Bodrum-Milas yarımadasında ne yapıyorsak bu işi yapıyoruz.",
  },
  {
    icon: Users,
    title: "Yerel ekip",
    text: "Operatörlerimiz bölgenin dar yollarını, marina rotalarını, hangi sitenin ne saat müsait olduğunu bilen kişiler.",
  },
  {
    icon: Award,
    title: "Sertifikalı su",
    text: "İçme suyu olarak teslim ettiğimiz her damla, Sağlık Bakanlığı onaylı kaynaktan ve sigortalı taşımayla geliyor.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
          aria-hidden
        />

        <div className="container-tight relative py-16 sm:py-20">
          <p className="eyebrow">Hakkımızda</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Bodrum&apos;un suyunu{" "}
            <span className="gradient-text">biz taşıyoruz.</span>
          </h1>

          <div className="mt-8 max-w-none space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              Bodrum Acil Su, Bodrum-Milas bölgesinin değişen su ihtiyacına çözüm üretmek için kuruldu. Bu yarımadada yaşayanlar bilir: yaz aylarında nüfus katlanır, su şebekesi yetişemez, depolar boşalır. Biz bu boşluğu doldurmak için varız.
            </p>
            <p className="rounded-2xl border-l-4 border-accent2-500 bg-accent2-50/40 py-4 pl-5 pr-4 text-base italic text-ink">
              <Quote
                className="mb-2 inline-block h-5 w-5 text-accent2-500"
                aria-hidden
              />
              <br />
              Yaklaşımımız basit: hızlı olun, dürüst olun, kaliteli su getirin.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:grid-cols-2 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                Müşterilerimiz
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Yazlık ev sahipleri, site ve apartman yönetimleri, oteller, restoranlar, butik pansiyonlar, inşaat şantiyeleri, marina işletmeleri ve yat sahipleri.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent2-700">
                Sözümüz
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Telefonda söylediğimiz fiyat kapıda alınan fiyattır. Söylediğimiz saatte oradayız. Sorun çıkarsa çözeriz — kaçmayız.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Belgelerimiz &amp; standartlarımız
            </p>
            <div className="mt-4">
              <CertBadges />
            </div>
          </div>
        </div>
      </section>

      <TrustPoints />
      <FinalCTA />
    </>
  );
}
