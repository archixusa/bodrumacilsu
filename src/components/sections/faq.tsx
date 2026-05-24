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
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-mediterranean/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-coral/10 blur-3xl"
        aria-hidden
      />

      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
              <HelpCircle className="h-3.5 w-3.5" />
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-deep-blue/65">
            Aradığınız soruyu bulamadıysanız bizi direkt arayabilirsiniz; 30 saniyede yanıt veriyoruz.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, idx) => {
            const accent =
              idx % 3 === 0
                ? "data-[state=open]:border-ocean/50 data-[state=open]:bg-gradient-to-r data-[state=open]:from-ocean/5 data-[state=open]:to-transparent"
                : idx % 3 === 1
                ? "data-[state=open]:border-coral/50 data-[state=open]:bg-gradient-to-r data-[state=open]:from-coral/5 data-[state=open]:to-transparent"
                : "data-[state=open]:border-mediterranean/50 data-[state=open]:bg-gradient-to-r data-[state=open]:from-mediterranean/5 data-[state=open]:to-transparent";
            return (
              <AccordionItem
                key={item.q}
                value={`faq-${idx}`}
                className={`rounded-2xl border border-deep-blue/10 bg-white px-5 shadow-soft transition ${accent}`}
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-deep-blue hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-deep-blue/75">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
