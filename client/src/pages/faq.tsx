import React, { useState } from 'react';
import { Link } from 'wouter';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What materials do you use in your products?",
    answer: "We use only the finest materials including organic cotton, merino wool, cashmere, and premium Italian leather. Each material is carefully selected for its quality, sustainability, and comfort."
  },
  {
    question: "How do I determine my size?",
    answer: "Please refer to our size guide for detailed measurements. If you're between sizes, we recommend sizing up for a more relaxed fit or sizing down for a more fitted look."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached. Return shipping is free for exchanges."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping is offered on orders over $200."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. International shipping times vary by location but typically take 7-14 business days. Additional customs fees may apply."
  },
  {
    question: "How should I care for my garments?",
    answer: "Each product comes with specific care instructions on the label. Generally, we recommend gentle machine wash or hand wash for most items, and dry cleaning for structured pieces like blazers."
  },
  {
    question: "Are your products sustainable?",
    answer: "Sustainability is core to our brand. We use organic and recycled materials where possible, work with ethical manufacturers, and design timeless pieces that last for years."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you'll receive a tracking number via email once your order ships. You can track your package directly through the carrier's website or our order status page."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-secondary text-text font-mono">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-secondary border-b border-border flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-text hover:text-text-muted transition-colors">
            ← BACK
          </Link>
          <Link href="/" className="text-lg font-normal tracking-wider">
            COLOMBE BLANK
          </Link>
        </div>
      </nav>

      <main className="pt-16 px-8 py-16 max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl mb-4">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-text-muted">Find answers to common questions about our products and services.</p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border bg-secondary"
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-hover transition-colors"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-question-${index}`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl transform transition-transform">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div
                  className="px-6 pb-6 text-text-muted leading-relaxed border-t border-border"
                  data-testid={`faq-answer-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-border text-center">
          <h3 className="text-xl mb-4">Still have questions?</h3>
          <p className="text-text-muted mb-6">
            Our customer service team is here to help you with any additional inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity"
            data-testid="contact-link"
          >
            CONTACT US
          </Link>
        </div>
      </main>
    </div>
  );
}