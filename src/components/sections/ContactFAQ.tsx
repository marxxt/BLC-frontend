"use client";
// components/sections/ContactFAQ.tsx
import { useState } from "react";
import ContactFAQItem from "../ui/ContactFAQItem";
import Link from "next/link";

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How Can I Contact Customer Service?",
      answer: "Reach our customer service via phone, email, or our website.",
    },
    {
      id: 2,
      question: "Are There Any Hidden Fees?",
      answer:
        "No, we believe in transparent pricing. All fees are clearly disclosed upfront with no hidden charges.",
    },
    {
      id: 3,
      question: "What Should I Do If My Application Is Denied?",
      answer:
        "If your application is denied, we'll provide feedback on the reasons and suggest alternative solutions or improvements you can make for future applications.",
    },
    {
      id: 4,
      question: "Who Can I Talk To For More Information?",
      answer:
        "You can speak with our funding advisors by calling our main office or using the contact form above. Our team is ready to answer all your questions.",
    },
  ];

  const handleFAQToggle = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Queries Answered
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our FAQ section for insights into our services. Discover
            quick answers to help you.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="/faq"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>

          <Link
            href="/services"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Service Details
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <ContactFAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === faq.id}
              onToggle={() => handleFAQToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
