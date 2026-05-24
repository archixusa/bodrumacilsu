import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

const avatars = [
  "bg-gradient-to-br from-coral to-amber-400 text-white",
  "bg-gradient-to-br from-mediterranean to-cyan-400 text-white",
  "bg-gradient-to-br from-emerald-500 to-teal-400 text-white",
];

const ribbons = [
  "from-coral/15 to-amber-200/20",
  "from-mediterranean/15 to-cyan-200/20",
  "from-emerald-400/15 to-teal-200/20",
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
    <section className="relative section bg-gradient-to-b from-white to-sand/30">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Müşteri Yorumları</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            Bodrum&apos;un susayanı{" "}
            <span className="bg-gradient-to-r from-coral to-orange-400 bg-clip-text text-transparent">
              emanet ediyor.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.author}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <span
                className={`absolute -top-16 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${ribbons[idx % ribbons.length]} blur-2xl`}
                aria-hidden
              />
              <Quote className="relative h-7 w-7 text-coral" />
              <blockquote className="relative flex-1 text-base leading-relaxed text-deep-blue/90">
                {t.text}
              </blockquote>
              <div className="relative flex items-center justify-between border-t border-deep-blue/5 pt-4">
                <figcaption className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${avatars[idx % avatars.length]}`}
                    aria-hidden
                  >
                    {initials(t.author)}
                  </span>
                  <span>
                    <p className="font-display font-bold text-deep-blue">
                      {t.author}
                    </p>
                    <p className="text-xs text-deep-blue/60">{t.region}</p>
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
