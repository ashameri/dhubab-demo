import { Search, Rocket, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Audit',
    description: 'Deep-dive into your brand, audience, and current performance'
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Launch',
    description: 'Strategic campaign structure with winning creatives'
  },
  {
    id: 3,
    icon: Settings,
    title: 'Optimize',
    description: 'Daily monitoring, A/B testing, and performance tuning'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Scale',
    description: 'Profitable expansion across audiences and placements'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How we work</h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            A proven process that delivers results, every time.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#CFCFCF]"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <div className="bg-white rounded-3xl p-8 border-2 border-[#0A0A0A] hover:shadow-xl transition-all hover:-translate-y-2 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#FFD84D] flex items-center justify-center">
                        <Icon size={32} strokeWidth={2.5} />
                      </div>

                      {/* FIXED CONTRAST HERE */}
                      <span className="text-5xl font-bold text-[#0A0A0A]/40">0{step.id}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-[#0A0A0A]/70 leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 w-8 h-8 items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0A0A0A] flex items-center justify-center animate-bounce-x">
                        <ArrowRight size={20} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
