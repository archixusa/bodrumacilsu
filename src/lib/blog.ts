export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  body: string[];
};

// Stub'lar — gerçek içerik sonra MDX'e taşınacak.
export const posts: BlogPost[] = [
  {
    slug: "bodrumda-yazin-su-kesintileri-2026",
    title: "Bodrum'da Yazın Sular Neden Kesiliyor? 2026 Rehberi",
    excerpt:
      "Bodrum yarımadasında her yaz yaşanan su kesintilerinin altında yatan altyapı ve nüfus dinamikleri.",
    date: "2026-05-15",
    readingMinutes: 6,
    body: [
      "Bodrum yarımadasının nüfusu kışın yaklaşık 180 binken yaz aylarında 1 milyona yaklaşır. Bu nüfus dalgalanması, mevcut su şebekesinin tasarım kapasitesinin çok ötesinde bir yüke karşılık geliyor.",
      "Bu yazıda kesintilerin sebeplerini ve siz ev veya site sahibi olarak alabileceğiniz pratik önlemleri ele alıyoruz.",
    ],
  },
  {
    slug: "su-deposu-temizligi-adim-adim",
    title: "Su Deposu Temizliği Nasıl Yapılır? Adım Adım Rehber",
    excerpt:
      "Sezona girmeden önce su deposunu temizleyip dezenfekte etmenin doğru yöntemi.",
    date: "2026-05-10",
    readingMinutes: 5,
    body: [
      "Su deposu temizliği, içme ve kullanma suyu kalitesi için kritik bir bakım adımıdır. En az yılda iki kez yapılması önerilir.",
      "Aşağıda profesyonel ekiplerimizin uyguladığı 6 adımlı temizlik prosedürünü adım adım anlatıyoruz.",
    ],
  },
  {
    slug: "tanker-suyu-icilebilir-mi",
    title: "Tanker Suyu İçilebilir mi? Sertifikalar ve Güvenlik",
    excerpt:
      "İçme suyu olarak teslim edilen tanker suyunun standardı, sertifikası ve güvenlik kontrolleri.",
    date: "2026-05-05",
    readingMinutes: 4,
    body: [
      "İçme suyu olarak teslim edilen tanker suyu, Sağlık Bakanlığı onaylı kaynaklardan temin edilir ve düzenli olarak analiz edilir.",
      "Bu yazıda 'tanker suyu içilebilir mi?' sorusunun teknik cevabını, talep edebileceğiniz belgeleri ve dikkat edilmesi gereken noktaları paylaşıyoruz.",
    ],
  },
  {
    slug: "yazlik-ev-su-stoklama",
    title: "Yazlık Eviniz İçin Su Stoklama İpuçları",
    excerpt:
      "Sezon başında ve sezon içinde su deposunu en verimli şekilde stoklamanın yolları.",
    date: "2026-04-28",
    readingMinutes: 5,
    body: [
      "Yazlık evlerde su deposu boyutu, kullanım sıklığı ve aile büyüklüğü stoklama stratejinizi belirleyen üç temel faktör.",
      "Bu yazıda pratik stoklama önerilerini ve hangi durumda profesyonel tanker desteği almanız gerektiğini ele alıyoruz.",
    ],
  },
  {
    slug: "site-yoneticilerine-aboneligin-avantajlari",
    title: "Site Yöneticileri İçin Su Aboneliği Avantajları",
    excerpt:
      "Apartman ve site yönetimleri için sözleşmeli su aboneliğinin maliyet ve operasyonel faydaları.",
    date: "2026-04-22",
    readingMinutes: 6,
    body: [
      "Site yönetiminde su deposunun durumunu kim, ne sıklıkta kontrol edecek? Boşalmadan önce sipariş kim verecek? Bu operasyonel yük, abonelik modeli ile ortadan kalkıyor.",
      "Yazıda site büyüklüğüne göre tipik abonelik paketlerini ve maliyet karşılaştırmasını paylaşıyoruz.",
    ],
  },
  {
    slug: "kirecli-su-sorunu-cozumleri",
    title: "Kireçli Su Sorunu ve Çözümleri",
    excerpt:
      "Bodrum yarımadasında sık karşılaşılan kireç sorunu ve evde, sitede uygulanabilecek çözümler.",
    date: "2026-04-15",
    readingMinutes: 5,
    body: [
      "Bodrum'un su kaynakları doğal olarak yüksek kalsiyum içerir; bu da kireç oluşumuna yol açar. Beyaz eşya, tesisat ve cilt sağlığı açısından çözüm üretmek gerekir.",
      "Yazıda merkezi yumuşatma sistemleri, tanker su tercihi ve günlük bakım önerileri yer alıyor.",
    ],
  },
  {
    slug: "havuz-dolumu-kac-ton",
    title: "Havuz Suyu Doldurma: Kaç Ton Lazım Hesaplayın",
    excerpt:
      "Havuz boyutuna göre ihtiyacınız olan ton hesabı ve dolum süresi tahmini.",
    date: "2026-04-08",
    readingMinutes: 4,
    body: [
      "Standart bir 8x4 metre havuz için ortalama 60-80 ton su gerekir. Daha büyük villalarda bu rakam 120 tona kadar çıkar.",
      "Bu yazıda havuz hacmi hesabı, paralel tanker kullanımı ve dolum sırasında dikkat edilmesi gereken noktaları anlatıyoruz.",
    ],
  },
  {
    slug: "insaat-santiyesi-su-tedariki",
    title: "İnşaat Şantiyesi İçin Su Tedariki",
    excerpt:
      "Şantiyelerde tanker su kullanımı, sözleşmeli planlama ve maliyet kontrolü.",
    date: "2026-04-01",
    readingMinutes: 6,
    body: [
      "Beton karımından toz bastırmaya, sıva işlerinden saha temizliğine kadar şantiyede su sürekli ve düzenli olmalı.",
      "Proje süresine bağlı sözleşmeli paketlerimizle hem fiyat hem de teslimat planı garanti altına alınıyor.",
    ],
  },
  {
    slug: "su-kesintilerinde-yapilacaklar",
    title: "Bodrum'daki Su Kesintilerinde Yapılacaklar",
    excerpt:
      "Su kesintisi haberini aldığınızda atılması gereken ilk adımlar ve hazırlık listesi.",
    date: "2026-03-25",
    readingMinutes: 4,
    body: [
      "Kesinti haberi geldiğinde önce mevcut depoyu kontrol edin, kritik kullanım için yedek suyu ayırın.",
      "Bu yazıda kesinti öncesi, sırasında ve sonrasında atmanız gereken adımları sıralı bir liste hâlinde paylaşıyoruz.",
    ],
  },
  {
    slug: "tanker-fiyatlari-2026-rehberi",
    title: "Su Tankeri Fiyatları 2026 — Şeffaf Fiyatlandırma Rehberi",
    excerpt:
      "2026 sezonunda tanker su fiyatlarını belirleyen kalemler ve müşteri olarak nelere dikkat etmelisiniz.",
    date: "2026-03-20",
    readingMinutes: 5,
    body: [
      "Tanker su fiyatı tek bir sayı değildir; tonaj, mesafe, su tipi ve aciliyet bileşenlerinden oluşur.",
      "Bu yazıda fiyat şeffaflığı kontrol listesini ve görmeniz gereken kırmızı bayrakları paylaşıyoruz.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
