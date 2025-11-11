import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my identity really protected?",
    answer:
      "Yes, absolutely. We use military-grade encryption and never collect identifying information. We don't track IP addresses, and all submissions are routed through secure, anonymous channels.",
  },
  {
    question: "What happens after I submit a report?",
    answer:
      "Your report is reviewed by our investigation team, cross-referenced with other submissions, and forwarded to appropriate legal authorities when necessary. You'll never be contacted unless you provide a way to reach you.",
  },
  {
    question: "Can I be sued for whistleblowing?",
    answer:
      "Whistleblower protections exist in most jurisdictions. Since your identity remains completely anonymous through our platform, legal action against you is virtually impossible. We also work with legal experts to ensure compliance.",
  },
  {
    question: "How do you verify the claims?",
    answer:
      "We have a rigorous verification process that includes cross-referencing multiple sources, consulting with medical experts, and reviewing any documentation provided. Only verified claims are made public.",
  },
  {
    question: "What if I have evidence to share?",
    answer:
      "You can securely upload documents, photos, or other evidence through our encrypted submission portal. All files are automatically encrypted and stored securely.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Your safety and privacy questions answered
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-strong rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
