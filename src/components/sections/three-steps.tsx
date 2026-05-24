import { Phone, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Ara",
    time: "30 saniye",
    text: "Bizi arayın veya WhatsApp'tan yazın. Konumunuzu ve ihtiyacınızı söyleyin.",
    icon: Phone,
    tint: "from-ocean to-mediterranean",
    soft: "bg-ocean/10 text-ocean",
    border: "hover:border-ocean/50",
  },
  {
    n: "02",
    title: "Onayla",
    time: "5 dakika",
    text: "Size en yakın tankeri yönlendirelim, ulaşım süresini ve fiyatı netleştirelim.",
    icon: CheckCircle2,
    tint: "from-mediterranean to-cyan-400",
    soft: "bg-mediterranean/15 text-mediterranean",
    border: "hover:border-mediterranean/60",
  },
  {
    n: "03",
    title: "Teslim Al",
    time: "60 dakika",
    text: "Tankerimiz kapınızda. Suyunuz depoya güvenle ve hijyenik şekilde aktarılır.",
    icon: Truck,
    tint: "from-coral to-orange-400",
    soft: "bg-coral/10 text-coral",
    border: "hover:border-coral/50",
  },
];

export function ThreeSteps() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">3 Adımda Su Kapınızda</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            Sipariş vermek <span className="text-ocean">30 saniye</span>, teslimat{" "}
            <span className="text-coral">60 dakika</span>.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className={`group relative overflow-hidden rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated ${step.border}`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.tint}`}
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <span
                  className={`font-display text-5xl font-bold bg-gradient-to-br ${step.tint} bg-clip-text text-transparent`}
                >
                  {step.n}
                </span>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${step.soft}`}
                >
                  <step.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-deep-blue">
                {step.title}
              </h3>
              <p
                className={`mt-1 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${step.tint} bg-clip-text text-transparent`}
              >
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
