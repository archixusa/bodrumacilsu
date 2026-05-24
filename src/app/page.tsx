import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { ThreeSteps } from "@/components/sections/three-steps";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustPoints } from "@/components/sections/trust-points";
import { RegionsGrid } from "@/components/sections/regions-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Bodrum Acil Su · 7/24 Tanker Su Hizmeti",
  description:
    "Bodrum-Milas bölgesinin en hızlı su tankeri hizmeti. 1 saatte kapınızda. İçme, kullanma ve havuz suyu için 7/24 ulaşılabiliriz.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeSteps />
      <ServicesGrid />
      <TrustPoints />
      <RegionsGrid />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
