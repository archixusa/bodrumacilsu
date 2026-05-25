export const siteConfig = {
  name: "Bodrum Acil Su",
  shortName: "Bodrum Acil Su",
  domain: "bodrumacilsu.com",
  url: "https://bodrumacilsu.com",
  description:
    "Bodrum-Milas bölgesinin en hızlı su tankeri hizmeti. 1 saatte kapınızda. İçme, kullanma ve havuz suyu için 7/24 ulaşılabiliriz.",
  ogDescription:
    "Bodrum-Milas'ın en hızlı su tankeri hizmeti. 1 saatte kapınızda. İçme, kullanma ve havuz suyu için bize ulaşın.",

  contact: {
    // TODO: gerçek bilgi — placeholder
    phone: process.env.NEXT_PUBLIC_PHONE ?? "+90 555 555 55 55",
    phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW ?? "+905555555555",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+905555555555",
    email: "info@bodrumacilsu.com",
    address: "Bodrum / Muğla",
  },

  social: {
    instagram: "https://instagram.com/bodrumacilsu",
    facebook: "https://facebook.com/bodrumacilsu",
  },

  rating: {
    value: 4.9,
    count: 218,
  },

  defaultOG: "/og-image.png",
  themeColor: "#2563EB",
} as const;

export const navigation = {
  main: [
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "Fiyatlar", href: "/fiyatlar" },
    { label: "S.S.S.", href: "/sik-sorulan-sorular" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ],
  footer: {
    services: [
      { label: "İçme Suyu", href: "/hizmetler/icme-suyu" },
      { label: "Kullanma Suyu", href: "/hizmetler/kullanma-suyu" },
      { label: "İnşaat Suyu", href: "/hizmetler/insaat-suyu" },
      { label: "Site Aboneliği", href: "/hizmetler/site-aboneligi" },
    ],
    company: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
      { label: "S.S.S.", href: "/sik-sorulan-sorular" },
      { label: "Fiyatlar", href: "/fiyatlar" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "KVKK", href: "/kvkk" },
      { label: "Çerez Politikası", href: "/cerez-politikasi" },
      { label: "Gizlilik", href: "/gizlilik" },
    ],
  },
};

export function waLink(text?: string) {
  const num = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const t = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${num}${t}`;
}

export function telLink() {
  return `tel:${siteConfig.contact.phoneRaw}`;
}
