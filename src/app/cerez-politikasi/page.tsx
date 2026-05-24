import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çerez Politikası · Bodrum Acil Su",
  description:
    "Sitemizde kullanılan çerezler, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  path: "/cerez-politikasi/",
});

export default function CookiesPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-tight">
        <p className="eyebrow">Yasal</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
          Çerez Politikası
        </h1>
        <div className="prose-bodrum mt-8 space-y-5 text-base leading-relaxed text-deep-blue/80">
          <p>
            Sitemizde size daha iyi hizmet sunmak amacıyla çerezler (cookies) kullanmaktayız. Bu metin, hangi çerezleri ne amaçla kullandığımızı ve tercihlerinizi nasıl yönetebileceğinizi açıklar.
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Çerez Türleri</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için gereklidir. Devre dışı bırakılamaz.
            </li>
            <li>
              <strong>Analitik çerezler:</strong> Trafiği anonim olarak ölçer, sitenin nasıl kullanıldığını anlamamızı sağlar.
            </li>
            <li>
              <strong>Tercih çerezleri:</strong> Önceki ziyaretlerinizdeki seçimlerinizi (örn. çerez bandı tercihi) hatırlar.
            </li>
          </ul>
          <h2 className="font-display text-xl font-bold text-deep-blue">Tercihlerinizi Yönetme</h2>
          <p>
            İlk ziyaretinizde çerez bandı ile tercih bildirebilirsiniz. Tarayıcı ayarlarınızdan da çerezleri silebilir veya engelleyebilirsiniz; ancak bazı işlevler bu durumda çalışmayabilir.
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Üçüncü Taraf Çerezler</h2>
          <p>
            Analytics ve performans ölçümü için üçüncü taraf araçlar (Google Analytics gibi) kullanabiliriz. Bu hizmetler kendi gizlilik politikalarına tabidir.
          </p>
        </div>
      </div>
    </section>
  );
}
