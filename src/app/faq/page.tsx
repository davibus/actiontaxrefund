'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'What documents do I need to bring for my tax appointment?',
    answer: 'You\'ll need to bring: W-2s from all employers, 1099 forms for freelance or contract work, last year\'s tax return, Social Security cards for all family members, photo ID, bank account information for direct deposit, and any relevant deduction documentation (mortgage interest, charitable donations, medical expenses, etc.).',
  },
  {
    question: 'How much do your tax preparation services cost?',
    answer: 'My pricing varies based on the complexity of your return. I provide a free estimate before starting any work. Contact me for a personalized quote based on your specific situation.',
  },
  {
    question: 'How long does it take to prepare my tax return?',
    answer: 'Most individual returns are completed within 1-2 business days. More complex returns may take longer. I\'ll give you a timeline estimate at your appointment. E-filed returns typically receive refunds within 10-21 days.',
  },
  {
    question: 'Do you offer year-round tax services?',
    answer: 'Yes! While tax season is my busiest time, I provide year-round services including tax planning, quarterly estimated payments, IRS representation, bookkeeping, and tax consulting. I\'m here to help whenever you need me.',
  },
  {
    question: 'Can you help with back taxes or unfiled returns?',
    answer: 'Absolutely. I can help you file prior year returns and work with the IRS to resolve any outstanding issues. I\'ll help you understand your options and create a plan to get you back on track.',
  },
  {
    question: 'What if I receive an IRS notice or audit letter?',
    answer: 'Don\'t panic! Contact me immediately. I offer IRS representation services and will help you respond appropriately. I\'ll review the notice, explain what it means, and represent you in communications with the IRS.',
  },
  {
    question: 'Do you prepare business tax returns?',
    answer: 'Yes, I prepare returns for sole proprietors, partnerships, LLCs, and S-corporations. I also offer bookkeeping services and quarterly tax planning to help keep your business finances organized year-round.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling me at (530) 701-6538 or using my online scheduling form. During tax season, I recommend booking early as appointments fill up quickly.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'I accept cash, checks, and major credit cards. For your convenience, I also offer the option to deduct my fee from your refund (refund transfer).',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. I take your privacy seriously and follow strict confidentiality protocols. Your personal and financial information is never shared with third parties and is secured using industry-standard practices.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-accent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about my tax services.
            Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white paper-texture">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-navy-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-navy-50/50 transition-colors"
                >
                  <span className="font-display font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-navy-600 leading-relaxed border-t border-navy-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m here to help! Contact me directly and I&apos;ll be happy
            to answer any questions you have about my services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:530-701-6538"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 border border-navy-200 rounded-xl font-semibold hover:bg-navy-50 transition-all"
            >
              <Phone className="w-5 h-5" />
              (530) 701-6538
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
