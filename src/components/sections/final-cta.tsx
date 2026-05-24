import { siteConfig } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl bg-deep-blue px-6 py-16 text-center text-white sm:px-12 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediterranean">
            Numarayı kaydedin
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight !text-white sm:text-4xl lg:text-5xl">
            Susuz kalmadan önce numaramızı kaydedin.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            7/24 ulaşılabiliriz. Yaz, kış, bayram fark etmez. Acil ihtiyacınızda biz buradayız.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton size="lg" variant="coral" />
            <WhatsAppLink
              size="lg"
              text={`Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
