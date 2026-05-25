import { AlertTriangle, Droplets, ThermometerSun, Users } from "lucide-react";

const problems = [
  {
    icon: ThermometerSun,
    title: "Yaz aylarında şebeke yetmiyor",
    text: "Mayıs–Eylül arası nüfus 3 katına çıkıyor, kesintiler kaçınılmaz hale geliyor.",
  },
  {
    icon: Droplets,
    title: "Depo bir gecede boşalıyor",
    text: "Misafir varken, havuz dolarken, çamaşır yıkanırken — uyarı vermeden bitiveriyor.",
  },
  {
    icon: Users,
    title: "Hızlı bulamayınca panik",
    text: "Saatlerce tanker arayıp 'sabaha gelelim' yanıtı alıyor, fiyat şişiyor.",
  },
];

export function ProblemStatement() {
  return (
    <section className="relative section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-accent2-100 text-accent2-600">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
            </span>
            Tanıdık geldi mi?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Bodrum yazlarında{" "}
            <span className="text-accent2-600">su kesintisi</span> rutin —{" "}
            <span className="text-brand-700">panik</span> olmasın.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Her yaz aynı senaryo: depo bitiyor, tanker bulunmuyor, fiyat yükseliyor. Bizim bütün varlık nedenimiz, bu üç maddeyi senin gündeminden çıkarmak.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <li
              key={p.title}
              className="group rounded-2xl border border-slate-200 bg-surface-tint p-6 transition-colors duration-200 hover:border-accent2-300 hover:bg-accent2-50/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent2-600 shadow-soft ring-1 ring-accent2-100">
                <p.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
