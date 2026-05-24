import { buildMetadata, jsonLdScript } from "@/lib/seo";
import { faqs } from "@/lib/faq";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Sıkça Sorulan Sorular · Bodrum Acil Su",
  description:
    "Teslimat süresi, fiyatlandırma, su kalitesi, fatura ve site aboneliği hakkında en sık sorulan sorular ve cevapları.",
  path: "/sik-sorulan-sorular/",
});

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema)}
      />
      <FAQ title="Sıkça Sorulan Sorular" eyebrow="Tüm cevaplar" />
      <FinalCTA />
    </>
  );
}
