import { Phone, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Ara",
    time: "30 saniye",
    text: "Bizi arayın veya WhatsApp'tan yazın. Konumunuzu ve ihtiyacınızı söyleyin.",
    icon: Phone,
    bar: "from-brand-700 to-brand-500",
    pill: "bg-brand-100 text-brand-700",
  },
  {
    n: "02",
    title: "Onayla",
    time: "5 dakika",
    text: "Size en yakın tankeri yönlendirelim, ulaşım süresini ve fiyatı netleştirelim.",
    icon: CheckCircle2,
    bar: "from-brand-500 to-brand-400",
    pill: "bg-brand-50 text-brand-600",
  },
  {
    n: "03",
    title: "Teslim al",
    time: "60 dakika",
    text: "Tankerimiz kapınızda. Suyunuz depoya güvenle ve hijyenik şekilde aktarılır.",
    icon: Truck,
    bar: "from-accent2-500 to-accent2-400",
    pill: "bg-accent2-100 text-accent2-700",
  },
];

export function ThreeSteps() {
  return (
    <section className="section bg-surface-tint">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Çözüm</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Sipariş <span className="text-brand-700">30 saniye</span>, teslimat{" "}
            <span className="text-accent2-600">60 dakika</span>.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Form doldurmadan, sıraya girmeden, fiyat şişirmesine maruz kalmadan.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={step.n}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-elevated"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.bar}`}
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-bold text-slate-200">
                  {step.n}
                </span>
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.pill}`}
                >
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p
                className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${step.pill}`}
              >
                {step.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {step.text}
              </p>
              {idx < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-slate-200 lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
