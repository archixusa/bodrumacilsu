import Link from "next/link";
import { CallButton } from "@/components/shared/call-button";

export default function NotFound() {
  return (
    <section className="section bg-sand/30">
      <div className="container-tight">
        <div className="mx-auto max-w-xl rounded-3xl border border-deep-blue/10 bg-white p-10 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-deep-blue sm:text-4xl">
            Bu sayfa bulunamadı.
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            Aradığınız sayfa kaldırılmış, taşınmış veya adresi yanlış olabilir. Aşağıdaki seçeneklerden devam edebilirsiniz.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-deep-blue/15 px-6 font-semibold text-deep-blue"
            >
              Anasayfa
            </Link>
            <CallButton size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
