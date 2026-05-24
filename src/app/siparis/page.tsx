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
    <section className="bg-sand/30 py-16 sm:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Online Sipariş</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            3 adımda tanker su siparişi
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            Formu tamamlayın, WhatsApp&apos;tan anlık dönüş yapalım. Acil müşterilerimize 60 dakikalık teslimat sözü veriyoruz.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-deep-blue/10 bg-white p-6 shadow-soft sm:p-10">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
