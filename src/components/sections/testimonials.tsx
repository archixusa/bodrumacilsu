import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

const avatars = [
  "bg-gradient-to-br from-accent2-500 to-amber-400 text-white",
  "bg-gradient-to-br from-brand-600 to-sky-400 text-white",
  "bg-gradient-to-br from-emerald-600 to-teal-400 text-white",
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="relative section bg-surface-tint">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Müşteri yorumları</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Bodrum&apos;un susayanı bize{" "}
            <span className="gradient-text">emanet ediyor.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.author}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-elevated"
            >
              <Quote className="h-7 w-7 text-accent2-500" aria-hidden />
              <blockquote className="relative flex-1 text-base leading-relaxed text-ink">
                {t.text}
              </blockquote>
              <div className="relative flex items-center justify-between border-t border-slate-100 pt-4">
                <figcaption className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold ${avatars[idx % avatars.length]}`}
                    aria-hidden
                  >
                    {initials(t.author)}
                  </span>
                  <span>
                    <p className="font-display font-semibold text-ink">
                      {t.author}
                    </p>
                    <p className="text-xs text-ink-muted">{t.region}</p>
                  </span>
                </figcaption>
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`${t.rating} yıldız`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
