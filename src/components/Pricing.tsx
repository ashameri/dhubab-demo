import {
  ArrowRight,
  TrendingUp,
  Rocket,
  Zap,
  Target,
  Flame,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    title: "Profitable Growth",
    desc: "Scale revenue with campaigns engineered for ROAS, lower CPA, and predictable customer acquisition.",
    icon: <TrendingUp size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
  {
    title: "Faster Results",
    desc: "Rapid creative testing and data-driven iteration to find winning angles that convert quickly.",
    icon: <Rocket size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
  {
    title: "More Sales Every Day",
    desc: "WhatsApp-first funnels that turn clicks into conversations — and conversations into customers.",
    icon: <Zap size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
  {
    title: "Operational Clarity",
    desc: "Clear reporting and real-time insights so you know exactly what’s working — and what to scale.",
    icon: <Target size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
  {
    title: "Campaigns That Go Viral",
    desc: "UGC-style hooks, emotional triggers, and rapid testing frameworks designed to spark engagement.",
    icon: <Flame size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
  {
    title: "Done-With-You Support",
    desc: "Direct access to experts who help you launch, scale, and optimise your Meta strategy.",
    icon: <Handshake size={32} strokeWidth={2.5} className="text-[#FFD84D]" />,
  },
];

export default function WhyChooseDhubab() {
  return (
    <section id="benefits" className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why brands choose Dhubab
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Because we don’t sell tasks — we sell outcomes. Revenue growth,
            better customers, and profitable scaling.
          </p>
        </div>

        {/* 2-column layout like Pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 border-2 border-[#CFCFCF] hover:border-[#0A0A0A] hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-[#0A0A0A]/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5548996381881"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#FFD84D] border-2 border-[#0A0A0A] px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
          >
            Book a Strategy Call
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
