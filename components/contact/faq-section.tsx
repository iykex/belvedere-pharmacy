import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/general/section-divider-head";
import { FAQS_CONTACTS_PAGE } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";

export default function FAQSection() {
  return (
    <section>
      <WidthConstraint className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-section-header font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-card-title text-muted-foreground">
            Find answers to common questions about our pharmacy services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {FAQS_CONTACTS_PAGE.map((faq) => {
              return (
                <AccordionItem value={faq.value} key={faq.value}>
                  <AccordionTrigger className="text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </WidthConstraint>
    </section>
  );
}
