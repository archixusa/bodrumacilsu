import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="section bg-sand/30">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Müşteri Yorumları</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            Bodrum&apos;un susayanı emanet ediyor.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col gap-4 rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft"
            >
              <Quote className="h-6 w-6 text-coral" />
              <blockquote className="flex-1 text-base leading-relaxed text-deep-blue/85">
                {t.text}
              </blockquote>
              <div className="flex items-center justify-between border-t border-deep-blue/5 pt-4">
                <figcaption>
                  <p className="font-display font-bold text-deep-blue">
                    {t.author}
                  </p>
                  <p className="text-xs text-deep-blue/60">{t.region}</p>
                </figcaption>
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`${t.rating} yıldız`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-coral text-coral"
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
