import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni · Bodrum Acil Su",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni. Verilerinizin nasıl işlendiği, kimlerle paylaşıldığı ve haklarınız.",
  path: "/kvkk/",
});

export default function KvkkPage() {
  return (
    <LegalShell title="KVKK Aydınlatma Metni">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında{" "}
        {siteConfig.name} olarak veri sorumlusu sıfatıyla, sizden topladığımız kişisel verilerin işleme süreçleri hakkında sizi bilgilendirmek isteriz.
      </p>
      <h2>Veri Sorumlusu</h2>
      <p>
        {siteConfig.name}, Bodrum / Muğla &mdash; iletişim:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
      </p>
      <h2>Toplanan Kişisel Veriler</h2>
      <ul>
        <li>Kimlik bilgisi (ad soyad)</li>
        <li>İletişim bilgisi (telefon, varsa e-posta)</li>
        <li>Teslimat adresi (ilçe, mahalle/site, açık adres bilgisi)</li>
        <li>Sipariş detayı (su tipi, tonaj, notlar)</li>
      </ul>
      <h2>İşleme Amaçları</h2>
      <ul>
        <li>Sipariş alma ve teslimat sürecinin yürütülmesi</li>
        <li>Müşteri hizmetleri ve şikayet çözümü</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi (faturalama vb.)</li>
      </ul>
      <h2>Verilerin Paylaşıldığı Taraflar</h2>
      <p>
        Kişisel verileriniz, yalnızca teslimatın gerçekleştirilebilmesi amacıyla yetkilendirilmiş teslimat operatörlerimizle paylaşılır. Yasal zorunluluk halleri haricinde üçüncü taraflarla paylaşılmaz, yurt dışına aktarılmaz.
      </p>
      <h2>Saklama Süresi</h2>
      <p>
        Kişisel verileriniz, yasal saklama süreleri boyunca (genel olarak 10 yıl) güvenli ortamda saklanır; bu sürenin sonunda silinir veya anonim hale getirilir.
      </p>
      <h2>Haklarınız (KVKK m.11)</h2>
      <p>
        KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işleniyorsa buna ilişkin bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Taleplerinizi{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>{" "}
        adresine iletebilirsiniz.
      </p>
    </LegalShell>
  );
}
