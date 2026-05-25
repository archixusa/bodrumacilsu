import type { ReactNode } from "react";

interface LegalShellProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function LegalShell({
  title,
  eyebrow = "Yasal",
  children,
}: LegalShellProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 right-1/3 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl"
        aria-hidden
      />

      <div className="container-tight relative py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-muted [&_a]:font-semibold [&_a]:text-brand-700 [&_a:hover]:text-brand-800 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  );
}
