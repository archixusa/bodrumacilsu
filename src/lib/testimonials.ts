export type Testimonial = {
  text: string;
  author: string;
  region: string;
  rating: number;
};

// TODO: gerçek müşteri yorumlarıyla değiştirilecek. Şimdilik sektörel realistik örnekler.
export const testimonials: Testimonial[] = [
  {
    text: "Yalıkavak'taki villamızda Cuma akşamı su bitti, panikledik. Aradığımız diğer firmalar 'sabah gelelim' dedi, bunlar bir saat içinde geldiler. Misafirlerimizin önünde rezil olmadık.",
    author: "Ayşe K.",
    region: "Yalıkavak",
    rating: 5,
  },
  {
    text: "Sitemiz için aylık abonelik yaptık. Su her ayın 1'inde otomatik geliyor, depoyu kimsenin kontrol etmesine gerek kalmıyor. Yönetici olarak hayatımı kurtardı.",
    author: "Mehmet Ö.",
    region: "Bitez Yönetim Kurulu",
    rating: 5,
  },
  {
    text: "Otelimiz için sürekli su tankerine ihtiyacımız var. Fatura, KDV, hijyen sertifikası — hepsi düzenli. Profesyonel bir firma.",
    author: "Tolga D.",
    region: "Gümbet otel işletmecisi",
    rating: 5,
  },
];
