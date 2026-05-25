import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası · Bodrum Acil Su",
  description:
    "Bodrum Acil Su olarak müşterilerimizin gizliliğine bağlılığımızı açıklayan politika metni.",
  path: "/gizlilik/",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Gizlilik Politikası">
      <p>
        {siteConfig.name} olarak müşterilerimizin gizliliğini en üst seviyede önemsiyoruz. Bu metin, kişisel verilerinizin korunmasına dair temel ilkelerimizi anlatır. Detaylı bilgi için ayrıca{" "}
        <a href="/kvkk">KVKK Aydınlatma Metnimizi</a> inceleyebilirsiniz.
      </p>
      <h2>Ne Topluyoruz</h2>
      <p>
        Yalnızca siparişin tamamlanması ve teslimatın gerçekleştirilmesi için gerekli olan bilgileri topluyoruz: ad soyad, telefon, teslimat adresi ve sipariş detayı.
      </p>
      <h2>Neyi Paylaşmıyoruz</h2>
      <p>
        Verilerinizi pazarlama amaçlı üçüncü taraflara satmıyoruz, kiralamıyoruz veya paylaşmıyoruz. Yalnızca yetkilendirilmiş teslimat operatörlerimizle, siparişin yerine getirilmesi için zorunlu bilgi paylaşılır.
      </p>
      <h2>Güvenlik</h2>
      <p>
        Verileriniz güvenli sunucularda saklanır, yetkilendirilmemiş kişilerin erişimine kapalıdır. Form gönderimleri SSL şifreli bağlantı üzerinden yapılır.
      </p>
      <h2>İletişim</h2>
      <p>
        Gizlilikle ilgili sorularınız için{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>{" "}
        adresinden bize ulaşabilirsiniz.
      </p>
    </LegalShell>
  );
}
