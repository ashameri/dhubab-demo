import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFD84D] flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-lg">DD</span>
              </div>
              <span className="font-bold text-2xl">Dhubab</span>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              Meta ads done right. Strategy, creative, and optimization to turn clicks into customers.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                hover:bg-[#FFD84D] hover:text-[#0A0A0A] hover:border-[#FFD84D] transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                hover:bg-[#FFD84D] hover:text-[#0A0A0A] hover:border-[#FFD84D] transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                hover:bg-[#FFD84D] hover:text-[#0A0A0A] hover:border-[#FFD84D] transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-[#FFD84D] transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">Services</a></li>
              <li><a href="#cases" className="text-white/70 hover:text-[#FFD84D] transition-colors">Case Studies</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-[#FFD84D] transition-colors">Why Dhubab</a></li>
              <li><a href="#process" className="text-white/70 hover:text-[#FFD84D] transition-colors">How we work</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">Campaign Strategy</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">Creative & UGC</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">Audience Targeting</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">WhatsApp Funnels</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFD84D] transition-colors">A/B Testing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#FFD84D] mt-1 flex-shrink-0" />
                <a href="mailto:hello@dhubab.com" className="text-white/70 hover:text-[#FFD84D] transition-colors">
                  hello@dhubab.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#FFD84D] mt-1 flex-shrink-0" />
                <a href="tel:+5548996381881" className="text-white/70 hover:text-[#FFD84D] transition-colors">
                  +55 48 99638 1881
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FFD84D] mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Brazil, UK, USA
                </span>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Dhubab Digital Marketing. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-[#FFD84D] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#FFD84D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/5548996381881"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#FFD84D] rounded-full flex items-center justify-center
        shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle size={32} className="text-[#0A0A0A]" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      </a>
    </footer>
  );
}
