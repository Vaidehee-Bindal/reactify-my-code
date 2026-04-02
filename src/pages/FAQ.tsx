import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services do you offer?", a: "We offer comprehensive security solutions including Rakshak24x7 guard services and ATSIntel threat intelligence." },
  { q: "How can I get a quote?", a: "You can reach out via our Contact Us page or call us directly for a customized quote." },
  { q: "Do you operate 24/7?", a: "Yes, our Rakshak24x7 service provides round-the-clock security coverage." },
  { q: "Where are you located?", a: "We are headquartered in New Delhi with operations across India. Visit our Location page for details." },
  { q: "How do I join your team?", a: "Check our Careers section or contact us directly for open positions." },
];

const FAQ = () => {
  return (
    <div>
      <HeroBanner title="Frequently Asked Questions" backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-md px-4">
                <AccordionTrigger className="text-foreground font-heading font-semibold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
