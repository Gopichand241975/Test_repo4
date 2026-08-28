"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does SupportAI work?",
    answer: "SupportAI connects to your company's knowledge base (FAQs, documents, policies) and uses advanced AI to instantly answer customer questions 24/7. When a question is too complex, it automatically transfers the conversation to a human agent."
  },
  {
    question: "Can I train the AI with my own documents?",
    answer: "Yes! You can upload PDFs, Word documents, text files, and link directly to your existing website or help center. The AI will learn from this information to provide accurate, business-specific answers."
  },
  {
    question: "Can I connect it to my website?",
    answer: "Absolutely. SupportAI provides a simple snippet of code that you can add to any website. We also offer native integrations for popular platforms like Shopify, WordPress, and Webflow."
  },
  {
    question: "Can customers talk to a human?",
    answer: "Yes. Human handoff is a core feature. You can set rules for when to transfer a chat (e.g., if the user asks for a human, or if the AI isn't confident in the answer). The full chat history is preserved for the human agent."
  },
  {
    question: "Does SupportAI support multiple languages?",
    answer: "Yes, SupportAI natively understands and responds in over 50 languages. It can even detect the customer's language automatically and respond in that same language."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all our plans are month-to-month (unless you choose the discounted yearly plan) and you can cancel at any time directly from your dashboard."
  },
  {
    question: "Is my customer data secure?",
    answer: "Security is our top priority. We use enterprise-grade encryption, we are SOC2 compliant, and we do not use your proprietary business data or customer conversations to train our foundational models."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">Everything you need to know about the product and billing.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-border rounded-lg bg-background overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between font-medium text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200",
                  openIndex === index ? "rotate-180" : ""
                )} 
              />
            </button>
            <div 
              className={cn(
                "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-muted-foreground text-sm pt-2 border-t border-border mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
