import { useState } from "react";
import { ArrowRight } from "lucide-react";
import LeadMagnetForm from "./LeadMagnetForm";

const cases = [
  {
    id: 1,
    client: "E-commerce Fashion Brand",
    image: "/playbooks/ecommerce.jpg",
    metrics: [
      { label: "CPR", value: "$4.20" },
      { label: "Leads", value: "+212%" },
      { label: "ROAS", value: "3.4x" },
    ],
  },
  {
    id: 2,
    client: "SaaS Platform",
    image: "/playbooks/saas.jpg",
    metrics: [
      { label: "CPA", value: "-41%" },
      { label: "Conversions", value: "+156%" },
      { label: "ROAS", value: "4.2x" },
    ],
  },
  {
    id: 3,
    client: "Health & Wellness",
    image: "/playbooks/health.jpg",
    metrics: [
      { label: "CTR", value: "+68%" },
      { label: "Leads", value: "+2.1k" },
      { label: "ROAS", value: "3.8x" },
    ],
  },
  {
    id: 4,
    client: "Education Platform",
    image: "/playbooks/education.jpg",
    metrics: [
      { label: "CPL", value: "$8.50" },
      { label: "Sign-ups", value: "+189%" },
      { label: "ROAS", value: "5.1x" },
    ],
  },
];

export default function CaseStudies() {
  const [selectedPlaybook, setSelectedPlaybook] = useState<string | null>(null);

  return (
    <section id="cases" className="py-16 md:py-24 border-b border-[#CFCFCF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Playbooks & Proven Strategies
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Real campaigns. Real results. Real growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#0A0A0A] hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* IMAGE THUMBNAIL */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.client}
                  className="w-full h-full object-contain bg-white"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{caseStudy.client}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#FFD84D] rounded-full text-sm font-bold"
                    >
                      {metric.label} {metric.value}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPlaybook(caseStudy.client)}
                  className="inline-flex items-center gap-2 text-[#0A0A0A] font-bold hover:gap-4 transition-all"
                >
                  View Playbook
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP FORM */}
      {selectedPlaybook && (
        <LeadMagnetForm
          playbookTitle={selectedPlaybook}
          onClose={() => setSelectedPlaybook(null)}
        />
      )}
    </section>
  );
}
