import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What budget do I need to start?',
    answer: 'We adapt to your budget. During our initial analysis, we evaluate your goals, audience size, and what Meta recommends for your industry. You can start with whatever budget feels comfortable, and we’ll help you scale as results come in.'
  },
  {
    question: 'Do you create the ad creatives?',
    answer: 'Yes! Our Growth plan includes custom creative production. We create thumb-stopping hooks, test multiple variations, and iterate based on performance data weekly.'
  },
  {
    question: 'How fast will I see results?',
    answer: 'Most clients see positive momentum within 2-3 weeks. Significant results typically appear after 4-6 weeks of optimization. Meta ads require testing and iteration to unlock peak performance.'
  },
  {
    question: 'Can you integrate with WhatsApp/CRM?',
    answer: 'Absolutely. We specialize in WhatsApp-first funnels and can integrate with your existing CRM, whether it\'s HubSpot, Salesforce, RD Station, or custom solutions.'
  },
  {
    question: 'Can you build or redesign our website as well?',
    answer: 'Yes. Alongside Meta ads, we can design, redesign, or fully rebuild your website. Whether you need a modern landing page, a complete website refresh, or a high-performance funnel, we handle everything — strategy, design, development, and integrations.'
  },
  {
    question: 'What does reporting include?',
    answer: 'You get weekly performance summaries covering spend, impressions, CTR, CPC, CPL/CPA, ROAS, and conversion metrics. Growth plan clients receive a custom dashboard with real-time data and weekly strategy calls.'
  },
  {
    question: 'What are your contract terms?',
    answer: 'We work on a monthly rolling basis after an initial 3-month commitment. This ensures we have enough time to test, optimize, and scale, while giving you flexibility once results are proven.'
  },
  {
    question: 'Do you work with all industries?',
    answer: 'We focus on e-commerce, SaaS, education, health & wellness, and professional services. If you\'re in a different industry, reach out — we\'ll let you know if we\'re a good fit.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-lg text-[#0A0A0A]/70">
            Everything you need to know.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-[#0A0A0A] overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-[#FFD84D]/20 transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD84D] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={3} />
                  ) : (
                    <Plus size={20} strokeWidth={3} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t-2 border-[#CFCFCF]">
                    <p className="text-[#0A0A0A]/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
