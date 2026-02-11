import { ArrowRight, Eye, Smile, TrendingUp, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block">Skyrocket</span>{' '}
              <span className="inline-block">your growth</span>
              <br />
              <span className="inline-block">
                with{' '}
                <span className="relative inline-block px-4 py-1">
                  <span className="relative z-10">Dhubab</span>
                  <span className="absolute inset-0 border-4 border-[#0A0A0A] rounded-3xl"></span>
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#0A0A0A]/80 max-w-xl leading-relaxed">
              We plan, launch & scale profitable Meta campaigns that turn clicks into WhatsApp conversations and customers.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              
              {/* YELLOW BUTTON — NOW OPENS WHATSAPP */}
              <a
                href="https://wa.me/5548996381881"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FFD84D] text-[#0A0A0A] rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Chat on WhatsApp
                <ArrowRight size={20} className="animate-bounce-x" />
              </a>

              {/* SECOND BUTTON — NOW PLAYBOOKS */}
              <a
                href="#playbooks"
                className="px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] rounded-full font-bold text-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                See Playbooks
              </a>
            </div>

            {/* METRICS */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-[#0A0A0A] text-[#FFD84D] rounded-full text-sm font-bold">
                ROAS 3.2×
              </span>
              <span className="px-4 py-2 bg-[#0A0A0A] text-[#FFD84D] rounded-full text-sm font-bold">
                CPA −41%
              </span>
              <span className="px-4 py-2 bg-[#0A0A0A] text-[#FFD84D] rounded-full text-sm font-bold">
                CTR +68%
              </span>
              <span className="px-4 py-2 bg-[#0A0A0A] text-[#FFD84D] rounded-full text-sm font-bold">
                +2.1k leads
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 space-y-4">
              <div className="bg-[#FFD84D] rounded-3xl p-8 aspect-square flex items-center justify-center border-2 border-[#0A0A0A] hover:scale-105 transition-transform">
                <ArrowRight size={80} strokeWidth={3} className="animate-bounce-x" />
              </div>

              <div className="bg-white rounded-3xl p-6 border-2 border-[#0A0A0A] hover:scale-105 transition-transform relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                    backgroundSize: '12px 12px'
                  }}
                ></div>

                <div className="relative space-y-2">
                  <MessageCircle size={32} />
                  <p className="text-sm font-bold">need!</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 space-y-4 pt-8">
              <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center border-2 border-[#0A0A0A] hover:scale-105 transition-transform">
                <Eye size={80} strokeWidth={3} className="animate-wiggle" />
              </div>

              <div className="bg-[#0A0A0A] rounded-3xl p-8 flex items-center justify-center border-2 border-[#0A0A0A] hover:scale-105 transition-transform">
                <Smile size={60} strokeWidth={3} className="text-[#FFD84D]" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="bg-white rounded-3xl p-6 border-2 border-[#0A0A0A] hover:scale-105 transition-transform relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                    backgroundSize: '8px 8px'
                  }}
                ></div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#FFD84D] flex items-center justify-center">
                      <TrendingUp size={32} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">+3.2x ROAS</p>
                      <p className="text-sm text-[#0A0A0A]/60">Average client growth</p>
                    </div>
                  </div>

                  <Smile size={40} className="text-[#0A0A0A]/20 animate-wiggle" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
