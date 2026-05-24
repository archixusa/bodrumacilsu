import { Phone, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Ara",
    time: "30 saniye",
    text: "Bizi arayın veya WhatsApp'tan yazın. Konumunuzu ve ihtiyacınızı söyleyin.",
    icon: Phone,
  },
  {
    n: "02",
    title: "Onayla",
    time: "5 dakika",
    text: "Size en yakın tankeri yönlendirelim, ulaşım süresini ve fiyatı netleştirelim.",
    icon: CheckCircle2,
  },
  {
    n: "03",
    title: "Teslim Al",
    time: "60 dakika",
    text: "Tankerimiz kapınızda. Suyunuz depoya güvenle ve hijyenik şekilde aktarılır.",
    icon: Truck,
  },
];

export function ThreeSteps() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">3 Adımda Su Kapınızda</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            Sipariş vermek 30 saniye, teslimat 60 dakika.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="group rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft transition hover:border-ocean/40 hover:shadow-elevated"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-bold text-deep-blue/15">
                  {step.n}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sand text-deep-blue">
                  <step.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-deep-blue">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-ocean">
                {step.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-deep-blue/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
