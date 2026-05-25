import { buildMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata = buildMetadata({
  title: "Çerez Politikası · Bodrum Acil Su",
  description:
    "Sitemizde kullanılan çerezler, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  path: "/cerez-politikasi/",
});

export default function CookiesPage() {
  return (
    <LegalShell title="Çerez Politikası">
      <p>
        Sitemizde size daha iyi hizmet sunmak amacıyla çerezler (cookies) kullanmaktayız. Bu metin, hangi çerezleri ne amaçla kullandığımızı ve tercihlerinizi nasıl yönetebileceğinizi açıklar.
      </p>
      <h2>Çerez Türleri</h2>
      <ul>
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
      <h2>Tercihlerinizi Yönetme</h2>
      <p>
        İlk ziyaretinizde çerez bandı ile tercih bildirebilirsiniz. Tarayıcı ayarlarınızdan da çerezleri silebilir veya engelleyebilirsiniz; ancak bazı işlevler bu durumda çalışmayabilir.
      </p>
      <h2>Üçüncü Taraf Çerezler</h2>
      <p>
        Analytics ve performans ölçümü için üçüncü taraf araçlar (Google Analytics gibi) kullanabiliriz. Bu hizmetler kendi gizlilik politikalarına tabidir.
      </p>
    </LegalShell>
  );
}
