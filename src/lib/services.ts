import { Droplet, Waves, HardHat, Building2, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  long: string;
  icon: LucideIcon;
  bullets: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "icme-suyu",
    title: "İçme Suyu Tankeri",
    short:
      "Sağlık Bakanlığı onaylı kaynaklardan, evinizin içme suyu deposuna güvenle aktarılır.",
    description:
      "İçme suyu olarak teslim edilen su, sağlık bakanlığı onaylı kaynaklardan temin edilir. Her yüklemede kalite kontrolü yapılır, talep üzerine analiz raporu sunulur.",
    long: "İçme suyu siparişlerinde teslim ettiğimiz su, ilgili mevzuatlara uygun, sağlık bakanlığı onaylı kaynaklardan temin edilir. Tankerlerimiz gıda taşımacılığına uygun şekilde paslanmaz iç yüzeylidir; her yüklemeden önce dezenfekte edilir. Talep üzerine kaynak ve analiz raporunu siparişle birlikte paylaşıyoruz. Çocuğunuza, misafirlerinize gönül rahatlığıyla servis edebileceğiniz bir su standardı sunuyoruz.",
    icon: Droplet,
    bullets: [
      "Sağlık Bakanlığı onaylı kaynak",
      "Paslanmaz iç yüzeyli tanker",
      "Analiz raporu talebe açık",
      "Hijyenik hortum ve filtre sistemi",
    ],
    cta: "İçme Suyu Siparişi Ver",
  },
  {
    slug: "kullanma-suyu",
    title: "Kullanma Suyu Tankeri",
    short:
      "Banyo, çamaşır, bahçe sulama ve genel kullanım için ekonomik kullanma suyu seçeneği.",
    description:
      "Banyo, mutfak, çamaşır, bahçe sulama gibi genel kullanım amacına yönelik ekonomik su seçeneği. İçme amaçlı tüketim için önerilmez.",
    long: "Kullanma suyu, ev içindeki içme amacı dışındaki tüm su ihtiyaçları için tercih edilen ekonomik bir seçenek. Banyo, mutfak temizliği, çamaşır, bulaşık, bahçe sulama ve tuvalet rezervuarları için uygundur. İçme amaçlı tüketmenizi önermiyoruz; ancak hijyenik depolama ve taşıma standartlarımız, kullanma suyu için de yüksek seviyede.",
    icon: Waves,
    bullets: [
      "Ekonomik tarife",
      "Banyo, mutfak, bahçe için ideal",
      "5 ila 30 ton arası tonaj seçenekleri",
      "Aynı gün teslimat",
    ],
    cta: "Kullanma Suyu Siparişi Ver",
  },
  {
    slug: "insaat-suyu",
    title: "İnşaat & Şantiye Suyu",
    short:
      "Şantiye, beton karımı ve toz bastırma için yüksek tonajlı, düzenli akışlı teslimat.",
    description:
      "İnşaat sektörünün özel ihtiyaçlarına uygun, yüksek tonajlı ve düzenli akışlı tedarik. Sözleşmeli proje fiyatlandırması mümkün.",
    long: "İnşaat şantiyeleri için tanker su, projelerin süreklilik gerektirdiği kritik bir kaynak. Beton hazırlama, sıva işleri, toz bastırma ve genel temizlik için yüksek tonaj ve düzenli akış sağlıyoruz. Proje süresince sözleşmeli çalışıyor, sabit fiyat garantisi veriyoruz. Şantiyenizdeki vardiya saatlerine uygun teslimat planı kuruyoruz.",
    icon: HardHat,
    bullets: [
      "Proje süresi sözleşmeli sabit fiyat",
      "Yüksek tonaj (30 ton ve üzeri)",
      "Vardiya saatlerine uygun planlama",
      "Faturalı, KDV dahil/hariç seçenekleri",
    ],
    cta: "Şantiye Teklifi Alın",
  },
  {
    slug: "site-aboneligi",
    title: "Site Aboneliği",
    short:
      "Apartman, site ve toplu konutlar için aylık veya sezonluk sözleşmeli düzenli teslimat.",
    description:
      "Apartman ve site yönetimleri için ay başına sabit fiyatla düzenli teslimat sözleşmesi. Sezonluk veya yıllık olabilir; acil çağrılarda öncelik avantajı vardır.",
    long: "Site aboneliği, apartman ve toplu konut yönetimleri için kurguladığımız sözleşmeli paket. Aylık veya sezonluk olarak çalışıyor; depo seviyesi belli bir eşiğin altına düştüğünde otomatik teslimat. Acil çağrılarda sözleşmeli müşterilerimiz birinci öncelikli hizmet alıyor. Birim fiyatlar bireysel siparişlerden avantajlı, fatura ve raporlama düzenli.",
    icon: Building2,
    bullets: [
      "Aylık veya sezonluk paketler",
      "Otomatik teslimat eşiği",
      "Acil çağrıda 1. sıra öncelik",
      "Site yönetimine aylık rapor",
    ],
    cta: "Site Yönetimi Teklifi",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
