import { buildMetadata } from "@/lib/seo";
import { FinalCTA } from "@/components/sections/final-cta";
import { TrustPoints } from "@/components/sections/trust-points";

export const metadata = buildMetadata({
  title: "Hakkımızda · Bodrum Acil Su",
  description:
    "Bodrum-Milas bölgesinin değişen su ihtiyacına çözüm üretmek için kuruldu. Hızlı, dürüst ve hijyenik tanker su hizmeti.",
  path: "/hakkimizda/",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand/30 py-16 sm:py-24">
        <div className="container-tight">
          <p className="eyebrow">Hakkımızda</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Bodrum&apos;un suyunu biz taşıyoruz.
          </h1>
          <div className="prose-bodrum mt-8 max-w-none space-y-5 text-base leading-relaxed text-deep-blue/80 sm:text-lg">
            <p>
              Bodrum Acil Su, Bodrum-Milas bölgesinin değişen su ihtiyacına çözüm üretmek için kuruldu. Bu yarımadada yaşayanlar bilir: yaz aylarında nüfus katlanır, su şebekesi yetişemez, depolar boşalır. Biz bu boşluğu doldurmak için varız.
            </p>
            <p>
              <strong>Yaklaşımımız basit:</strong> hızlı olun, dürüst olun, kaliteli su getirin.
            </p>
            <p>
              Filomuzdaki tankerler düzenli olarak hijyen kontrolünden geçer. İçme suyu olarak teslim ettiğimiz su Sağlık Bakanlığı onaylı kaynaklardan gelir ve istendiğinde analiz raporu paylaşılır. Operatörlerimiz bölgeyi bilen, deneyimli kişilerdir — dar siteler, ulaşılması zor villalar, marina rotaları onlar için sorun değil.
            </p>

            <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                  Müşterilerimiz
                </p>
                <p className="mt-3 text-base text-deep-blue/80">
                  Yazlık ev sahipleri, site ve apartman yönetimleri, oteller, restoranlar, butik pansiyonlar, inşaat şantiyeleri, marina işletmeleri ve yat sahipleri.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                  Sözümüz
                </p>
                <p className="mt-3 text-base text-deep-blue/80">
                  Telefonda söylediğimiz fiyat kapıda alınan fiyattır. Söylediğimiz saatte oradayız. Sorun çıkarsa çözeriz — kaçmayız.
                </p>
              </div>
            </div>

            <p>
              Susuz kalmadan önce numaramızı kaydedin. Ne zaman ihtiyacınız olursa olsun, biz buradayız.
            </p>
          </div>
        </div>
      </section>

      <TrustPoints />
      <FinalCTA />
    </>
  );
}
