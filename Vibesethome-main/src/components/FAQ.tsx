import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const defaultFaqs = [
  {
    question: "What's an 'agent'?",
    answer: "An AI agent is a smart software system that can perform tasks autonomously. Think of it as a digital assistant that can understand context, make decisions, and take actions across your business tools—like qualifying leads, processing invoices, or routing support tickets—without constant human oversight."
  },
  {
    question: "How long to see value?",
    answer: "Most clients see quick wins in 2–4 weeks. Simple automations like lead qualification or email routing can show immediate results, while more complex multi-step workflows typically deliver measurable ROI within the first month of deployment."
  },
  {
    question: "Do you replace my tools?",
    answer: "No, we augment your existing stack. Our agents work with your current CRM, email platform, support desk, and other tools via APIs and integrations. This means no disruption to your team's workflow—just enhanced efficiency and automation."
  },
  {
    question: "How do you handle data privacy?",
    answer: "We follow strict data minimization principles, only accessing what's needed for your specific automation. All data is encrypted in transit and at rest, with comprehensive audit logs. Our practices align with GDPR, PIPEDA, and other privacy regulations."
  },
  {
    question: "Can we start with a pilot?",
    answer: "Absolutely! We recommend starting with a fixed-scope sprint focusing on 1-2 high-impact automations. This allows you to see value quickly and build confidence before expanding to additional use cases across your organization."
  },
  {
    question: "What happens after launch?",
    answer: "We offer optional monthly iteration sprints to expand, optimize, and add new automations based on your evolving needs. Think of it as an ongoing partnership to continuously improve your operational efficiency through AI."
  }
];

interface FAQProps {
  faqs?: Array<{ question: string; answer: string }>;
}

export function FAQ({ faqs = defaultFaqs }: FAQProps = {}) {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[48px] font-bold">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[var(--lines)] rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200"
            >
              <AccordionTrigger 
                className="text-left font-medium hover:no-underline py-6"
                style={{ color: 'var(--text-primary)' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[var(--text-secondary)] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}