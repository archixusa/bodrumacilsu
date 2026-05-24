import { siteConfig } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-blue via-ocean to-mediterranean px-6 py-16 text-center text-white sm:px-12 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-coral/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-mediterranean/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mediterranean">
              Numarayı kaydedin
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight !text-white sm:text-4xl lg:text-5xl">
              Susuz kalmadan önce{" "}
              <span className="bg-gradient-to-r from-coral via-amber-300 to-mediterranean bg-clip-text text-transparent">
                numaramızı kaydedin.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
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
      </div>
    </section>
  );
}
