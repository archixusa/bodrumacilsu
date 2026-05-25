import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faq";

interface FAQProps {
  items?: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}

export function FAQ({
  items = faqs,
  title = "Sıkça sorulan sorular",
  eyebrow = "S.S.S.",
}: FAQProps) {
  return (
    <section className="relative section overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-100/40 blur-3xl"
        aria-hidden
      />

      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Aradığınız soruyu bulamadıysanız bizi direkt arayabilirsiniz; 30 saniyede yanıt veriyoruz.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, idx) => (
            <AccordionItem
              key={item.q}
              value={`faq-${idx}`}
              className="rounded-2xl border border-slate-200 bg-white px-5 transition data-[state=open]:border-brand-300 data-[state=open]:bg-brand-50/40 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-ink hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
