import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center">
            <span className="text-white font-bold text-lg">DD</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">Dhubab</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <a href="#home" className="px-5 py-2 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Home</a>
          <a href="#services" className="px-5 py-2 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Services</a>
          <a href="#cases" className="px-5 py-2 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Playbooks</a>
          <a href="#benefits" className="px-5 py-2 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Why Dhubab</a>
          <a href="#contact" className="px-5 py-2 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Contact</a>
        </nav>

        {/* Socials + Call Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://facebook.com"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0A0A0A] flex items-center justify-center hover:bg-[#FFD84D] transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Visit our Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0A0A0A] flex items-center justify-center hover:bg-[#FFD84D] transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashameri/"
              aria-label="Visit our LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0A0A0A] flex items-center justify-center hover:bg-[#FFD84D] transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* WhatsApp Call Button */}
          <a
            href="https://wa.me/447309304079"
            aria-label="Book a strategy call on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FFD84D] text-[#0A0A0A] rounded-full font-bold hover:scale-105 transition-transform hidden sm:block"
          >
            Book Strategy Call
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#CFCFCF] bg-white">
          <nav className="flex flex-col p-6 gap-2">
            <a href="#home" className="px-5 py-3 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Home</a>
            <a href="#services" className="px-5 py-3 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Services</a>
            <a href="#cases" className="px-5 py-3 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Playbooks</a>
            <a href="#benefits" className="px-5 py-3 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Why Dhubab</a>
            <a href="#contact" className="px-5 py-3 rounded-full hover:bg-[#FFD84D] transition-colors font-medium">Contact</a>

            <a
              href="https://wa.me/447309304079"
              aria-label="Book a strategy call on WhatsApp"
              target="_blank"
              className="px-5 py-3 bg-[#FFD84D] text-[#0A0A0A] rounded-full font-bold text-center mt-4"
            >
              Book Strategy Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
