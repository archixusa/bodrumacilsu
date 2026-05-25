import Link from "next/link";
import { CallButton } from "@/components/shared/call-button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-accent2-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-tight relative py-16 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-elevated">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Bu sayfa <span className="gradient-text">bulunamadı.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Aradığınız sayfa kaldırılmış, taşınmış veya adresi yanlış olabilir. Aşağıdaki seçeneklerden devam edebilirsiniz.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 font-semibold text-ink transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
            >
              Anasayfa
            </Link>
            <CallButton size="md" variant="coral" />
          </div>
        </div>
      </div>
    </section>
  );
}
