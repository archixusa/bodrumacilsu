import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni · Bodrum Acil Su",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni. Verilerinizin nasıl işlendiği, kimlerle paylaşıldığı ve haklarınız.",
  path: "/kvkk/",
});

export default function KvkkPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-tight">
        <p className="eyebrow">Yasal</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
          KVKK Aydınlatma Metni
        </h1>
        <div className="prose-bodrum mt-8 space-y-5 text-base leading-relaxed text-deep-blue/80">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında {siteConfig.name} olarak veri sorumlusu sıfatıyla, sizden topladığımız kişisel verilerin işleme süreçleri hakkında sizi bilgilendirmek isteriz.
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Veri Sorumlusu</h2>
          <p>
            {siteConfig.name}, Bodrum / Muğla &mdash; iletişim:{" "}
            <a className="text-ocean" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Toplanan Kişisel Veriler</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Kimlik bilgisi (ad soyad)</li>
            <li>İletişim bilgisi (telefon, varsa e-posta)</li>
            <li>Teslimat adresi (ilçe, mahalle/site, açık adres bilgisi)</li>
            <li>Sipariş detayı (su tipi, tonaj, notlar)</li>
          </ul>
          <h2 className="font-display text-xl font-bold text-deep-blue">İşleme Amaçları</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Sipariş alma ve teslimat sürecinin yürütülmesi</li>
            <li>Müşteri hizmetleri ve şikayet çözümü</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi (faturalama vb.)</li>
          </ul>
          <h2 className="font-display text-xl font-bold text-deep-blue">Verilerin Paylaşıldığı Taraflar</h2>
          <p>
            Kişisel verileriniz, yalnızca teslimatın gerçekleştirilebilmesi amacıyla yetkilendirilmiş teslimat operatörlerimizle paylaşılır. Yasal zorunluluk halleri haricinde üçüncü taraflarla paylaşılmaz, yurt dışına aktarılmaz.
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Saklama Süresi</h2>
          <p>
            Kişisel verileriniz, yasal saklama süreleri boyunca (genel olarak 10 yıl) güvenli ortamda saklanır; bu sürenin sonunda silinir veya anonim hale getirilir.
          </p>
          <h2 className="font-display text-xl font-bold text-deep-blue">Haklarınız (KVKK m.11)</h2>
          <p>
            KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işleniyorsa buna ilişkin bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Taleplerinizi{" "}
            <a className="text-ocean" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>{" "}
            adresine iletebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
