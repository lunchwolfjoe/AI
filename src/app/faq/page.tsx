import Link from "next/link";

export const metadata = {
  title: "FAQ | TEXANS FIRST*",
  description: "Frequently asked questions about the investigation.",
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is this investigation about?",
    answer:
      "This investigation examines whether Texas built a system capable of measuring the promise Governor Abbott made — that taxpayer-funded employment opportunities should go to Texans first. We follow the public records.",
  },
  {
    question: "Why the asterisk?",
    answer:
      "The asterisk reflects what the records show: 'Texans First' came with terms and conditions. The state could count vendors, contracts, and payments — but not who actually performed the work or where.",
  },
  {
    question: "Are you accusing anyone of crimes?",
    answer:
      "No. This investigation documents institutional failures, not individual crimes. We present verified facts from public records. Where patterns emerge, we name them. Determining whether laws were broken is for appropriate authorities.",
  },
  {
    question: "How can I verify your claims?",
    answer:
      "Every substantive claim links to a source document in our Evidence section. We encourage readers to check the primary sources themselves.",
  },
  {
    question: "Is this anti-immigrant?",
    answer:
      "No. This investigation is institutional, not ethnic. India, Indian companies, diaspora organizations, and H-1B workers are not treated as a single category or as inherently problematic. The accountability question is whether Texas built the system to measure what its leaders promised.",
  },
  {
    question: "Why focus on India specifically?",
    answer:
      "Because that is where the Governor's own records point. Abbott's office reports significantly more Texas-company investment and job announcements into India than the reverse. Texas actively built this relationship through official missions and recruitment.",
  },
  {
    question: "How do you fund this investigation?",
    answer:
      "This investigation is independently funded. We do not accept funding from any individual, organization, or government entity that is a subject of this investigation.",
  },
  {
    question: "I am named in the investigation. How can I respond?",
    answer:
      "We seek comment from all individuals and organizations named before publication. All substantive responses are published in our Responses section. If you believe you should have been contacted, please reach out.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <p className="label-caps text-[#8b0000] mb-4">Questions</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-6">FAQ</h1>
          <p className="font-serif-body text-xl text-[#374151] leading-relaxed">
            Common questions about what this investigation does and does not claim.
          </p>
        </header>

        {/* FAQs */}
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <article key={index} className="pb-10 border-b border-[#e5e5e5]">
              <h2 className="font-display text-lg mb-4">{faq.question}</h2>
              <p className="font-serif-body text-[#374151] leading-relaxed">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-10 border-t border-[#e5e5e5] flex justify-between">
          <Link href="/methodology" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            ← Methodology
          </Link>
          <Link href="/evidence" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            Evidence →
          </Link>
        </nav>
      </div>
    </div>
  );
}
