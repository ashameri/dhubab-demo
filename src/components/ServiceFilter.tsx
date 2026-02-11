import { useState } from 'react';
import { Target, Palette, Users, MessageCircle, FlaskConical, BarChart3 } from 'lucide-react';

const services = [
  {
    id: 'strategy',
    icon: Target,
    title: 'Campaign Strategy',
    description: 'From brief to scalable structure in 7 days.',
    category: 'Campaign Strategy'
  },
  {
    id: 'creative',
    icon: Palette,
    title: 'Creative Sprints',
    description: 'Thumb-stopping hooks & iterations weekly.',
    category: 'Creative & UGC'
  },
  {
    id: 'targeting',
    icon: Users,
    title: 'Audience & Targeting',
    description: 'Laser-focused segments that convert.',
    category: 'Audience & Targeting'
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'WhatsApp Funnels',
    description: 'Lead-to-chat flows that actually convert.',
    category: 'WhatsApp Funnels'
  },
  {
    id: 'testing',
    icon: FlaskConical,
    title: 'Optimization & A/B',
    description: 'Relentless testing. Lower CPA, higher ROAS.',
    category: 'A/B Testing'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics',
    description: 'Clear dashboards. Zero fluff.',
    category: 'Analytics & ROAS'
  }
];

const categories = [
  'All',
  'Campaign Strategy',
  'Creative & UGC',
  'Audience & Targeting',
  'WhatsApp Funnels',
  'A/B Testing',
  'Analytics & ROAS'
];

export default function ServiceFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What we do best</h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            End-to-end Meta advertising. Strategy, creative, optimization, and scale.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 px-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full border-2 font-medium transition-all hover:scale-105 ${
                activeCategory === category
                  ? 'bg-[#FFD84D] border-[#0A0A0A] text-[#0A0A0A]'
                  : 'bg-white border-[#CFCFCF] text-[#0A0A0A] hover:border-[#0A0A0A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 border-2 border-[#0A0A0A] hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                  backgroundSize: '10px 10px'
                }}></div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#FFD84D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[#0A0A0A]/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#FFD84D] rounded-3xl p-8 md:p-12 border-2 border-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '20px 20px'
          }}></div>
          <div className="relative max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Dhubab</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>WhatsApp-first funnels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Rapid creative iterations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Data-driven scaling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Clear weekly reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
