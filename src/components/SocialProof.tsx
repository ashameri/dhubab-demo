import { Star, Quote } from "lucide-react";
import {
  FaWordpress,
  FaReact,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiMeta,
  SiGoogleanalytics,
  SiJavascript,
  SiTypescript,
  SiElementor,
  SiVite,
} from "react-icons/si";

// -------------------- TESTIMONIALS --------------------
const testimonials = [
  {
    id: 1,
    quote:
      "Dhubab transformed our Meta campaigns. We went from struggling with CAC to scaling profitably in 6 weeks.",
    author: "Carolina M.",
    role: "CMO, Fashion Brand",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The WhatsApp funnel integration was a game-changer. Our conversion rate doubled overnight.",
    author: "Rafael S.",
    role: "Founder, SaaS Platform",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Finally, an agency that actually understands performance marketing. Clear reporting, consistent results.",
    author: "Beatriz L.",
    role: "Marketing Director",
    rating: 5,
  },
];

// -------------------- TOOLS & PLATFORMS --------------------
const tools = [
  { name: "WordPress", icon: <FaWordpress size={34} /> },
  { name: "React", icon: <FaReact size={34} /> },
  { name: "JavaScript", icon: <SiJavascript size={34} /> },
  { name: "TypeScript", icon: <SiTypescript size={34} /> },
  { name: "Meta Ads", icon: <SiMeta size={34} /> },
  { name: "Facebook", icon: <FaFacebook size={34} /> },
  { name: "Instagram", icon: <FaInstagram size={34} /> },
  { name: "WhatsApp", icon: <FaWhatsapp size={34} /> },
  { name: "Google", icon: <FaGoogle size={34} /> },
  { name: "Google Analytics", icon: <SiGoogleanalytics size={34} /> },
  { name: "Elementor", icon: <SiElementor size={34} /> },
  { name: "Vite", icon: <SiVite size={34} /> },
];

// -------------------- COMPONENT --------------------
export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* -------------------- TITLE -------------------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client love</h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </div>

        {/* -------------------- TESTIMONIALS GRID -------------------- */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 border-2 border-[#0A0A0A] hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <Quote size={40} className="text-[#FFD84D] mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#FFD84D" stroke="#FFD84D" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="border-t-2 border-[#CFCFCF] pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-[#0A0A0A]/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* -------------------- TOOLS WE USE -------------------- */}
        <div>
          <p className="text-center text-sm font-bold text-[#0A0A0A]/60 mb-8 uppercase tracking-wider">
            Tools & Platforms We Use
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-[1200px] mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-4 border-2 border-[#0A0A0A] rounded-xl bg-white hover:bg-[#FFD84D]/10 hover:shadow-lg transition"
              >
                {tool.icon}
                <span className="font-semibold text-sm text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
