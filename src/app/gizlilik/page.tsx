import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası · Bodrum Acil Su",
  description:
    "Bodrum Acil Su olarak müşterilerimizin gizliliğine bağlılığımızı açıklayan politika metni.",
  path: "/gizlilik/",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-tight">
        <p className="eyebrow">Yasal</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
          Gizlilik Politikası
        </h1>
        <div className="prose-bodrum mt-8 space-y-5 text-base leading-relaxed text-deep-blue/80">
          <p>
            {siteConfig.name} olarak müşterilerimizin gizliliğini en üst seviyede önemsiyoruz. Bu metin, kişisel verilerinizin korunmasına dair temel ilkelerimizi anlatır. Detaylı bilgi için ayrıca{" "}
            <a className="text-ocean" href="/kvkk">
              KVKK Aydınlatma Metnimizi
            </a>{" "}
            inceleyebilirsiniz.
          </p>

          <h2 className="font-display text-xl font-bold text-deep-blue">Ne Topluyoruz</h2>
          <p>
            Yalnızca siparişin tamamlanması ve teslimatın gerçekleştirilmesi için gerekli olan bilgileri topluyoruz: ad soyad, telefon, teslimat adresi ve sipariş detayı.
          </p>

          <h2 className="font-display text-xl font-bold text-deep-blue">Neyi Paylaşmıyoruz</h2>
          <p>
            Verilerinizi pazarlama amaçlı üçüncü taraflara satmıyoruz, kiralamıyoruz veya paylaşmıyoruz. Yalnızca yetkilendirilmiş teslimat operatörlerimizle, siparişin yerine getirilmesi için zorunlu bilgi paylaşılır.
          </p>

          <h2 className="font-display text-xl font-bold text-deep-blue">Güvenlik</h2>
          <p>
            Verileriniz güvenli sunucularda saklanır, yetkilendirilmemiş kişilerin erişimine kapalıdır. Form gönderimleri SSL şifreli bağlantı üzerinden yapılır.
          </p>

          <h2 className="font-display text-xl font-bold text-deep-blue">İletişim</h2>
          <p>
            Gizlilikle ilgili sorularınız için{" "}
            <a className="text-ocean" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
