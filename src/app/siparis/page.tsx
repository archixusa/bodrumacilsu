import { buildMetadata } from "@/lib/seo";
import { OrderForm } from "@/components/order/order-form";

export const metadata = buildMetadata({
  title: "Online Sipariş Ver · Bodrum Acil Su",
  description:
    "3 adımda Bodrum-Milas için tanker su siparişinizi verin. WhatsApp'tan anında dönüş, 60 dakikada teslimat.",
  path: "/siparis/",
});

export default function OrderPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Online sipariş</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            3 adımda <span className="gradient-text">tanker su siparişi.</span>
          </h1>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Formu tamamlayın, WhatsApp&apos;tan anlık dönüş yapalım. Acil müşterilerimize 60 dakikalık teslimat sözü veriyoruz.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-elevated sm:p-10">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
