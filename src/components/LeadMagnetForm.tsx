import { useRef, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

interface LeadMagnetFormProps {
  onClose: () => void;
  playbookTitle: string;
}

export default function LeadMagnetForm({
  onClose,
  playbookTitle,
}: LeadMagnetFormProps) {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Map playbook titles to URLs
  const getPlaybookUrl = (title: string): string => {
    const urlMap: Record<string, string> = {
      "E-commerce Fashion Brand":
        "https://dhubab.com/pdfs/Presentation - E-commerce Fashion Brand Playbook-3.pdf",
      "Education Platform":
        "https://dhubab.com/pdfs/Presentation - Education Platform Playbook.pdf",
      "Health & Wellness":
        "https://dhubab.com/pdfs/Presentation - Health & Fitness.pdf",
      "SaaS Platform":
        "https://dhubab.com/pdfs/Presentation - SaaS Platform Playbook.pdf",
    };

    return urlMap[title] || "";
  };

  // Send Email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const pdfUrl = getPlaybookUrl(playbookTitle);

    const formData = new FormData(form.current!);
    const fromName = formData.get("from_name") as string;
    const fromEmail = formData.get("from_email") as string;

    console.log("Sending email with:", {
      from_name: fromName,
      from_email: fromEmail,
      playbook_title: playbookTitle,
      playbook_url: pdfUrl,
    });

    emailjs
      .send(
        "service_hm0fnuh",
        "template_mr19c2j",
        {
          from_name: fromName,
          from_email: fromEmail,
          playbook_title: playbookTitle,
          playbook_url: pdfUrl,
        },
        "vFWQfElsQlJmyI7Zl"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);

          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold mb-2">Check Your Email!</h3>
            <p className="text-gray-600">
              Your {playbookTitle} is on its way.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">
              Get Your {playbookTitle}
            </h2>
            <p className="text-gray-600 mb-6">Enter your details below.</p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border-2 border-[#0A0A0A] rounded-xl"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border-2 border-[#0A0A0A] rounded-xl"
              />

              <input
                type="hidden"
                name="playbook_title"
                value={playbookTitle}
              />

              {/* ✅ Added missing playbook_url */}
              <input
                type="hidden"
                name="playbook_url"
                value={getPlaybookUrl(playbookTitle)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFD84D] text-[#0A0A0A] font-bold py-4 rounded-xl hover:bg-[#ffd000] transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get Playbook"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
