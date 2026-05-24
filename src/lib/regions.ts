export type Region = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroLead: string;
  description: string;
  longDescription: string;
  neighborhoods: string[];
  specialNote: string;
  highlights: string[];
  faq: { q: string; a: string }[];
};

export const regions: Region[] = [
  {
    slug: "bodrum-merkez",
    name: "Bodrum Merkez",
    title: "Bodrum Merkez Su Tankeri | 7/24 Acil Su Teslimatı",
    metaDescription:
      "Bodrum merkez ve çevresine 1 saat içinde tanker su teslimatı. İçme, kullanma ve havuz suyu için 7/24 hizmet.",
    heroHeadline: "Bodrum Merkez'e Hızlı Tanker Su Hizmeti",
    heroLead:
      "Bodrum Kalesi çevresinden Konacık'a, Cumhuriyet'ten Tepecik'e — merkezin tamamına saat farkı gözetmeden teslimat.",
    description:
      "Bodrum kalesi çevresi, Cumhuriyet Caddesi, Kumbahçe, Tepecik mahalleleri başta olmak üzere Bodrum merkezin tamamına tanker su hizmeti veriyoruz. Yoğun sezon kesintilerinde bile teslimat sürelerimizi tutuyoruz.",
    longDescription:
      "Bodrum merkez, yaz aylarında nüfusun en yoğun yaşadığı bölge. Şebeke arızası, depo boşalması veya beklenmedik misafir akını — sebebi ne olursa olsun ekibimiz 60 dakikalık ortalama teslimat süresini koruyor. Marina çevresi, Kale önü, Cumhuriyet Caddesi ve sırt mahalleler için ayrı rotalarımız var. İçme suyu siparişlerinde teslim edilen su Sağlık Bakanlığı onaylı kaynaklardan gelir; istenildiğinde analiz raporu paylaşılır. Otel, restoran ve butik işletmelerle kurumsal anlaşmalar yapıyor; faturalı, KDV dahil/hariç seçenekleriyle çalışıyoruz.",
    neighborhoods: [
      "Cumhuriyet",
      "Kumbahçe",
      "Tepecik",
      "Türkkuyusu",
      "Eskiçeşme",
      "Konacık",
    ],
    specialNote: "Marina ve yat çevresi rezervasyonları için B2B özel fiyat.",
    highlights: [
      "Ortalama 45-60 dakika teslimat",
      "Marina ve restoranlara sözleşmeli hizmet",
      "Faturalı kurumsal anlaşmalar",
    ],
    faq: [
      {
        q: "Bodrum merkezde gece teslimat yapıyor musunuz?",
        a: "Evet, 7/24 ulaşılabilir ekibimiz var. Gece teslimatlarda küçük bir ek ücret olabilir, telefonda netleştirilir.",
      },
      {
        q: "Marina çevresindeki yatlara su veriyor musunuz?",
        a: "Veriyoruz. D-Marin ve Milta Marina çevresi için ayrı bir ekibimiz hizmet veriyor. Tekne içi hortum sistemleri için filtreli ikmal yapıyoruz.",
      },
    ],
  },
  {
    slug: "yalikavak",
    name: "Yalıkavak",
    title: "Yalıkavak Su Tankeri | Marina ve Sitelere Hızlı Teslimat",
    metaDescription:
      "Yalıkavak Marina, Geriş, Tilkicik mevkileri ve tüm yazlık sitelere içme & kullanma suyu tankeri. 1 saatte kapınızda.",
    heroHeadline: "Yalıkavak'a Profesyonel Su Tankeri Hizmeti",
    heroLead:
      "Palmarina çevresi, Geriş, Tilkicik, Sandıma — lüks villa ve sitelere hijyenik tanker teslimatı.",
    description:
      "Palmarina çevresi, Geriş, Tilkicik, Sandıma mevkilerindeki villalar ve sitelere düzenli su teslimatı yapıyoruz. Lüks tatil bölgesi olmanın gerektirdiği titizlikle, hijyen sertifikalı tankerlerle çalışıyoruz.",
    longDescription:
      "Yalıkavak'ın yazlık nüfusu ve Palmarina merkezli sosyal hayatı bölgenin su talebini katlıyor. Lüks villalar, butik oteller ve mega yat tedarikleri — hepsi farklı standart gerektiriyor. Tankerlerimiz Yalıkavak yollarında her gün rotada; sözleşmeli site müşterilerimize garantili haftalık teslimat sunuyoruz. Mega yat ikmali için ayrı filtre ve hortum sistemimiz var; tekne içi tanklara hijyenik aktarım yapıyoruz. Personelimiz tek tip kıyafetli, sessiz çalışmaya alışkın ve site giriş prosedürlerine hakim.",
    neighborhoods: ["Geriş", "Tilkicik", "Sandıma", "Palmarina çevresi", "Kavak Sarnıç"],
    specialNote: "Yat ve mega-yat su ikmali için ayrı hizmet.",
    highlights: [
      "Mega yat ikmali için özel filtre",
      "Site sözleşmelerinde haftalık garanti",
      "Lüks villa kullanımına uygun standartlar",
    ],
    faq: [
      {
        q: "Yalıkavak'ta hangi sitelere düzenli geliyorsunuz?",
        a: "Geriş, Tilkicik ve Sandıma hattındaki büyük yazlık sitelerin çoğunda sözleşmeli müşterimiz var. Site yöneticinizle iletişime geçtiğimizde toplu fiyat sunuyoruz.",
      },
      {
        q: "Palmarina'daki yatlara ikmal yapıyor musunuz?",
        a: "Yapıyoruz. Marina yönetimi koordinasyonuyla, tekne büyüklüğüne uygun tonajda ve hijyenik hortum sistemiyle teslimat sağlıyoruz.",
      },
    ],
  },
  {
    slug: "turgutreis",
    name: "Turgutreis",
    title: "Turgutreis Su Tankeri | Sahil Sitelerine Acil Su",
    metaDescription:
      "Turgutreis ve Akyarlar bölgesindeki tüm sitelere ve villalara tanker su hizmeti. Hafta sonu yoğunluğunda bile zamanında teslimat.",
    heroHeadline: "Turgutreis ve Akyarlar'a Su Tankeri",
    heroLead:
      "Sahil hattının en yoğun bölgesinde, hafta sonu önceliği ve gece teslimatıyla garantili hizmet.",
    description:
      "Turgutreis sahil hattı, Akyarlar, Kadıkalesi mevkileri yazın en yoğun su talebinin olduğu bölgelerden. Biz bu yoğunluğa hazırlıklı çalışıyoruz: gece teslimatı, hafta sonu önceliği, sözleşmeli site müşterilerine garanti.",
    longDescription:
      "Turgutreis-Akyarlar hattı yazın su deposunun en hızlı boşaldığı yer. Cumartesi öğleden sonraları siparişler katlanıyor; biz bu yoğunluğa özel slot sistemi kurduk. Sözleşmeli site müşterilerimiz acil çağrılarda önceliklendiriliyor — beklemiyorlar. Akyarlar ve Kadıkalesi'nin daracık sahil yollarına uygun küçük tonajlı tankerlerimiz var. Pazar günleri bile düzenli rotada olan bir ekiple çalışıyoruz.",
    neighborhoods: ["Akyarlar", "Kadıkalesi", "Bahçelievler", "Sabahiye"],
    specialNote: "Cumartesi-Pazar günleri için randevulu hızlı slot sistemi.",
    highlights: [
      "Hafta sonu öncelikli teslimat",
      "Akyarlar dar yolları için 5 tonluk tanker",
      "Site sözleşmesinde acil çağrı garantisi",
    ],
    faq: [
      {
        q: "Cumartesi akşamı su bittiğinde ne kadar sürede gelirsiniz?",
        a: "Hafta sonu yoğunluğunda ortalama süremiz 60-90 dakikadır. Sözleşmeli müşterilerimize 60 dakika garantisi veriyoruz.",
      },
      {
        q: "Akyarlar'daki villamın yolu çok dar, tanker girer mi?",
        a: "Genelde girer. Ön bilgiyle 5 veya 10 tonluk küçük tankerlerimizi yönlendiriyoruz. Hortum uzatma ekipmanımız da var.",
      },
    ],
  },
  {
    slug: "gumbet",
    name: "Gümbet",
    title: "Gümbet Su Tankeri | Otel ve Villa Su Teslimatı",
    metaDescription:
      "Gümbet'teki oteller, hostel ve villalara hijyenik tanker su hizmeti. İçme suyu sertifikalı, fiyatlar şeffaf.",
    heroHeadline: "Gümbet'e Otel & Villa Su Tankeri",
    heroLead:
      "Otel, apart ve pansiyonlara faturalı, sözleşmeli su tedariki — turistik yoğunluğa hazır.",
    description:
      "Gümbet'in turistik yoğunluğu su tüketimini katlıyor. Otellere ve apart işletmelere düzenli teslimat sözleşmeleri yapıyoruz. Pansiyon sahipleri için aylık abonelik avantajlı.",
    longDescription:
      "Gümbet sezonun en yoğun yaşandığı bölgelerden. Otel doluluğu zirvedeyken bir gün su gelmemesi işletme için felaket. Bu yüzden Gümbet otelleriyle aylık abonelik anlaşmaları yapıyoruz: depo seviyesi belli bir eşiğin altına düştüğünde otomatik teslimat. Pansiyonlar ve apartlar için faturalı, KDV dahil/hariç paketlerimiz var. Bardakçı koyu yolundaki tesislere ulaşımda problem yaşamayan filo araçlarımız mevcut.",
    neighborhoods: ["Gümbet merkez", "Bardakçı koyu yolu"],
    specialNote: "Otel/pansiyon faturalandırması, KDV dahil/hariç seçenekleri.",
    highlights: [
      "Otel ve apart işletmelerine aylık abonelik",
      "Faturalı KDV seçenekleri",
      "Sezonluk garantili teslimat",
    ],
    faq: [
      {
        q: "Otelimiz için aylık sabit fiyatlı anlaşma yapabilir miyiz?",
        a: "Evet. Doluluk ve depo kapasitenize göre ay başına sabit tutarlı paket sunuyoruz. Sezonluk veya yıllık olabilir.",
      },
      {
        q: "E-fatura kesiyor musunuz?",
        a: "Kurumsal müşterilere e-fatura desteğimiz var. Mükellef bilgilerinizi paylaşmanız yeterli.",
      },
    ],
  },
  {
    slug: "bitez",
    name: "Bitez",
    title: "Bitez Su Tankeri | Site ve Villalara Tanker Su",
    metaDescription:
      "Bitez koyu, Bitez merkez ve çevre sitelere tanker su hizmeti. İçme suyu ve havuz dolumu için 7/24 ulaşılabiliriz.",
    heroHeadline: "Bitez'e Güvenilir Su Tankeri",
    heroLead:
      "Sakin koyun titiz müşterilerine, havuz dolumundan içme suyuna güvenli teslimat.",
    description:
      "Bitez'in sakin atmosferinde villa ve site sahiplerinin tercih ettiği güvenilir tanker hizmeti. Havuz dolumlarında kireç oranı düşük, temiz kaynak suyu kullanıyoruz.",
    longDescription:
      "Bitez koyu ve Mandalya yolu sitelerinde villa sahibi olan müşterilerimiz, su kaynağının kalitesi konusunda çok dikkatli. Bu yüzden Bitez teslimatlarında düşük kireçli kaynaklarla çalışıyoruz; havuz dolumlarında pH ve sertlik kontrolü yapıyoruz. Site yönetimleriyle yaptığımız anlaşmalar sayesinde mevsim açılışında havuzları gün içinde dolduruyoruz.",
    neighborhoods: ["Bitez merkez", "Mandalya yolu siteleri"],
    specialNote: "Havuz dolumu için özel iletişim hattı.",
    highlights: [
      "Düşük kireçli kaynak suyu",
      "Havuz dolumunda pH kontrolü",
      "Site yönetimleriyle sezonluk anlaşma",
    ],
    faq: [
      {
        q: "Havuzumu kaç saatte doldurursunuz?",
        a: "Havuz hacmine göre değişir. 60 tonluk standart bir havuzu 2-3 saat içinde, paralel tankerlerle dolduruyoruz.",
      },
      {
        q: "İçme suyu için sertifika alabilir miyim?",
        a: "Alabilirsiniz. İçme suyu siparişinde Sağlık Bakanlığı onaylı kaynak belgesini teslimatla beraber paylaşıyoruz.",
      },
    ],
  },
  {
    slug: "ortakent",
    name: "Ortakent",
    title: "Ortakent Yahşi Su Tankeri | Hızlı Tanker Su Teslimatı",
    metaDescription:
      "Ortakent, Yahşi, Yalı mevkilerine hızlı tanker su teslimatı. Site aboneliği ve bireysel sipariş.",
    heroHeadline: "Ortakent & Yahşi'ye Su Tankeri",
    heroLead:
      "Yazlık sitelerin yoğunlaştığı hatta sürekli rotada — ortalama 45 dakikada teslimat.",
    description:
      "Ortakent–Yahşi hattı yazlık sitelerin yoğun olduğu, su deposunun sık boşaldığı bölgelerden. Tankerlerimiz bu hatta sürekli rotada — sipariş ortalaması 45 dakikada teslim ediliyor.",
    longDescription:
      "Ortakent-Yahşi-Yalı üçgeni Bodrum'un yazlık site yoğunluğunun en yüksek olduğu bölgelerden. Su depoları küçük, kullanıcı sayısı yazın yüksek, sıklıkla boşalıyor. Biz bu hattı sürekli aktif tutuyoruz; çoğu zaman tanker zaten bölgede oluyor — siparişten 45 dakika sonra teslimat normal. Sözleşmeli site müşterilerimize indirimli paket sunuyoruz.",
    neighborhoods: ["Yahşi sahil", "Ortakent merkez", "Yalı mevkii"],
    specialNote: "Site aboneliği indirimli paket.",
    highlights: [
      "Ortalama 45 dakika teslimat",
      "Site abonelikte indirim",
      "Yalı mevkii yat ikmali",
    ],
    faq: [
      {
        q: "Yahşi sahilde villamız var, sözleşmesiz arama yapsak ne kadar sürer?",
        a: "Bireysel siparişlerde de ortalama 60 dakikalık teslimat süremiz var. Sözleşmeli müşterilerimize 45 dakika garantisi veriyoruz.",
      },
    ],
  },
  {
    slug: "gundogan",
    name: "Gündoğan",
    title: "Gündoğan Su Tankeri | Koy Sitelerine Su Hizmeti",
    metaDescription:
      "Gündoğan'a tanker su hizmeti. Yazlık sitelere düzenli teslimat, içme ve kullanma suyu.",
    heroHeadline: "Gündoğan'a Tanker Su Hizmeti",
    heroLead:
      "Dar yollara uygun küçük tonajlı tankerlerle koy içine kadar erişim.",
    description:
      "Gündoğan'ın daracık yollarına uygun küçük ve orta tonajlı tankerlerimizle erişim sorunu olmadan teslimat yapıyoruz. Yıllık sözleşmeli müşteri portföyümüz büyüyor.",
    longDescription:
      "Gündoğan koyu, Çiftlik ve Üzümlü hattı dar yollu, eğimli ve büyük tankerler için zorlu. Bu yüzden bölgeye 5 ve 10 tonluk küçük tankerlerimizle hizmet veriyoruz. Yerel operatörlerimiz Gündoğan içindeki her dar geçidi tanıyor; villa giriş kapılarınızda manevra problemi yaşatmıyoruz. Yıllık sözleşmelerde sabit fiyat avantajımız var.",
    neighborhoods: ["Gündoğan merkez", "Çiftlik", "Üzümlü"],
    specialNote: "Dar yollar için 5 ve 10 tonluk tanker seçeneği.",
    highlights: [
      "5/10 tonluk dar yol tankerleri",
      "Yıllık sözleşmede sabit fiyat",
      "Yerel operatör avantajı",
    ],
    faq: [
      {
        q: "Villamın yolu çok dar, 30 tonluk bir tanker giremez. Ne yapacağız?",
        a: "Gündoğan için 5 tonluk küçük tankerlerimiz var. Birden fazla seferle de teslim edebiliriz; ekstra ücret yok, kapıda alınan tonaj üzerinden fiyatlandırma yapıyoruz.",
      },
    ],
  },
  {
    slug: "turkbuku",
    name: "Türkbükü & Göltürkbükü",
    title: "Türkbükü Su Tankeri | Premium Su Teslimat Hizmeti",
    metaDescription:
      "Türkbükü ve Göltürkbükü'nün lüks villa ve butik otellerine premium tanker su hizmeti. Diskresyon ve hız garantili.",
    heroHeadline: "Türkbükü'ne Premium Su Tankeri",
    heroLead:
      "Butik otel ve lüks villalara özel teslimat protokolü — randevulu, üniformalı, sessiz.",
    description:
      "Türkbükü'nün özenli atmosferinde, butik otel ve lüks villalara uygun hizmet standardı sunuyoruz. Önceden randevulu teslimat, üniformalı personel, sessiz operasyon.",
    longDescription:
      "Türkbükü ve Göltürkbükü'nde misafir akışı, dünyaca tanınmış konseptlerin bulunduğu bir bölge. Burada teslimat sadece bir su işi değil; ev sahibinin atmosferine saygı duyma işi. Randevulu çalışıyoruz — gelmeden önce kontak kişiyle teyit alıyoruz. Üniformalı personel, sessiz operatör, gerekirse arka kapıdan giriş. Misafir kalabalığında görünmeyen, hızla işini bitirip ayrılan bir hizmet sunuyoruz.",
    neighborhoods: ["Göltürkbükü", "Çakıl koyu", "Maça Kızı çevresi"],
    specialNote: "Premium konseptli butik otellere özel teslimat protokolü.",
    highlights: [
      "Üniformalı personel, sessiz operasyon",
      "Randevulu teslimat",
      "Butik otellere özel protokol",
    ],
    faq: [
      {
        q: "Misafirlerimiz havuz başındayken teslimat yapabilir misiniz?",
        a: "Yapıyoruz. Personelimiz arka servis girişinden, en sessiz şekilde işi tamamlar. Çoğu müşterimiz teslimatın yapıldığını farkına bile varmıyor.",
      },
    ],
  },
  {
    slug: "milas-merkez",
    name: "Milas Merkez",
    title: "Milas Su Tankeri | Şehir Merkezi ve Çevresine Su",
    metaDescription:
      "Milas merkez ve mahallelerine içme ve kullanma suyu tankeri. Kuyu/şebeke arızalarında acil çözüm.",
    heroHeadline: "Milas Merkez'e Su Tankeri Hizmeti",
    heroLead:
      "Şebeke arızası, kuyu sorunu veya köy teslimatı — Milas'ın tamamına ulaşıyoruz.",
    description:
      "Milas merkez, Hayıtlı, Pazaryeri çevresi ve civar köylere tanker su hizmeti. Şebeke arızaları ve kuyu sorunlarında acil müdahale.",
    longDescription:
      "Milas merkez ve çevresindeki köyler için tanker su, Bodrum'a göre farklı bir ihtiyacı karşılıyor: burada yaz yoğunluğundan çok şebeke arızaları ve kuyu sorunları belirleyici. Acil arızalarda 60-90 dakika içinde bölgedeyiz; köy teslimatlarında dar yollara uygun küçük tankerlerimizi yönlendiriyoruz. Toplu köy teslimatları için indirimli paket fiyatlarımız var.",
    neighborhoods: ["Hayıtlı", "Pazaryeri", "Hisarbaşı", "Cumhuriyet"],
    specialNote: "Köy ve mezralara teslimat için özel araç filosu.",
    highlights: [
      "Şebeke arızası ve kuyu sorununa acil çözüm",
      "Köy/mezra teslimatına uygun araçlar",
      "Toplu teslimatta indirimli paket",
    ],
    faq: [
      {
        q: "Köyümüze tek seferde 100 ton su getirebilir misiniz?",
        a: "Birkaç tankerle paralel teslimat yapıyoruz. Toplam tonaj üzerinden köy/site indirimli paket sunuyoruz.",
      },
    ],
  },
  {
    slug: "guvercinlik",
    name: "Güvercinlik",
    title: "Güvercinlik Su Tankeri | Marina ve Villa Teslimatı",
    metaDescription:
      "Güvercinlik Marina çevresi ve villa sitelerine tanker su hizmeti. Yat ikmali ve site aboneliği.",
    heroHeadline: "Güvercinlik'e Tanker Su Hizmeti",
    heroLead:
      "D-Marin çevresine ve villalara hijyen sertifikalı, profesyonel su ikmali.",
    description:
      "D-Marin Güvercinlik çevresindeki villalar ve marinadaki tekneler için profesyonel su ikmali. Hijyen standartları en üst seviyede tutulur.",
    longDescription:
      "Güvercinlik bölgesi marina çevresindeki yüksek standartlı villalar ve teknelerle tanımlı. Burada hijyen ve diskresyon birinci öncelik. Tekne ikmali için ayrı filtre setlerimiz var; gıda taşımacılığı sertifikalı tankerlerimizle çalışıyoruz. D-Marin yönetimi koordinasyonunda yat ikmali protokollerine uyuyoruz.",
    neighborhoods: ["Güvercinlik merkez", "D-Marin çevresi"],
    specialNote: "Tekne ikmali için özel hortum ve filtre sistemi.",
    highlights: [
      "D-Marin protokolüne uyumlu ikmal",
      "Hijyen sertifikalı tankerler",
      "Villa sitelerine sözleşmeli teslimat",
    ],
    faq: [
      {
        q: "D-Marin'deki teknemize ikmal için ne yapmamız gerekiyor?",
        a: "Marina yönetimi üzerinden veya bizimle direkt iletişimle randevu alıyoruz. Tekne büyüklüğüne uygun ekipmanla geliyoruz.",
      },
    ],
  },
  {
    slug: "mumcular",
    name: "Mumcular",
    title: "Mumcular Su Tankeri | Köy ve Tarımsal Su Teslimatı",
    metaDescription:
      "Mumcular ve civar köylere tanker su hizmeti. Tarım ve hayvancılık suyu, içme suyu.",
    heroHeadline: "Mumcular'a Köy ve Tarım Suyu",
    heroLead:
      "Tarım ve hayvancılık için büyük tonajlı tankerler, köylere toplu fiyat avantajı.",
    description:
      "Mumcular bölgesinin tarım ve hayvancılık ihtiyacına uygun, büyük tonajlı tanker filomuzla çalışıyoruz. Köylere özel toplu fiyatlandırma.",
    longDescription:
      "Mumcular'ın yapısı Bodrum sahil bölgelerinden farklı: burada tarım, hayvancılık ve sürdürülebilir köy yaşamı söz konusu. 30 tonluk büyük tankerlerimiz, sezonluk sulama paketlerimiz ve hayvan suluğu teslimatımız var. Köy muhtarlıkları ve kooperatiflerle çalışabiliyor, toplu fiyatlandırma yapıyoruz.",
    neighborhoods: ["Mumcular merkez ve civar köyler"],
    specialNote: "Tarımsal sulama için sezonluk paketler.",
    highlights: [
      "30 tonluk büyük tankerler",
      "Sezonluk tarım paketleri",
      "Köy/kooperatif toplu fiyat",
    ],
    faq: [
      {
        q: "Köy meydanına tek seferde 20 ton içme suyu lazım, mümkün mü?",
        a: "Mümkün. Köy muhtarlığı koordinasyonunda toplu fiyatlandırma yapıp tek seferde teslim ediyoruz.",
      },
    ],
  },
  {
    slug: "gulluk",
    name: "Güllük",
    title: "Güllük Su Tankeri | Sahil ve Liman Bölgesine Su",
    metaDescription:
      "Güllük sahil bölgesi ve limana tanker su hizmeti. Site, villa ve işletmelere düzenli teslimat.",
    heroHeadline: "Güllük'e Profesyonel Su Tankeri",
    heroLead:
      "Sahil hattı, liman ve işletmelere düzenli teslimat — cari hesap ve faturalı çalışma.",
    description:
      "Güllük sahil hattı ve liman çevresine düzenli teslimat. Liman işletmelerine sözleşmeli hizmet, sitelere acil müdahale.",
    longDescription:
      "Güllük, liman ekonomisi ve yazlık sahil sitelerinin iç içe geçtiği bir bölge. Liman çevresindeki işletmelere cari hesap üzerinden faturalı çalışıyoruz; sahil sitelerinde ise abonelik bazlı düzenli teslimat sözleşmelerimiz var. Liman ve gümrük bölgesi erişim prosedürlerine hakimiz.",
    neighborhoods: ["Güllük merkez", "Sahil", "Liman çevresi"],
    specialNote: "Liman bölgesindeki ticari işletmelere fatura/cari hesap.",
    highlights: [
      "Cari hesap ve e-fatura",
      "Liman bölgesi erişim deneyimi",
      "Site abonelik paketleri",
    ],
    faq: [
      {
        q: "Liman içindeki tesisimize teslimat yapabilir misiniz?",
        a: "Yapıyoruz. Gerekli giriş izinleri için müşterimizden öncesinde koordinasyon talep ediyoruz; sonrası standart prosedür.",
      },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
