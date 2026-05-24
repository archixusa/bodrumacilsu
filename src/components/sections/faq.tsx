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
    <section className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-deep-blue/65">
            Aradığınız soruyu bulamadıysanız bizi direkt arayabilirsiniz; 30 saniyede yanıt veriyoruz.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, idx) => (
            <AccordionItem
              key={item.q}
              value={`faq-${idx}`}
              className="rounded-2xl border border-deep-blue/10 bg-white px-5 shadow-soft data-[state=open]:border-ocean/40"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-deep-blue hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-deep-blue/75">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
