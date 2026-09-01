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
      "TEXANS FIRST* is a six-part investigative series examining public records, contracts, and the gap between stated policy goals and actual outcomes in Texas state programs. We follow the money and document what we find.",
  },
  {
    question: "Why the asterisk in 'TEXANS FIRST*'?",
    answer:
      "The asterisk reflects a common theme in our findings: programs and policies marketed as benefiting Texans often come with significant caveats, exceptions, or unintended beneficiaries that aren't apparent in public messaging.",
  },
  {
    question: "Are you accusing anyone of crimes?",
    answer:
      "No. This investigation documents what public records show. We present verified facts and note patterns, but determining whether any laws were broken is the responsibility of appropriate authorities. Our role is to inform the public.",
  },
  {
    question: "How can I verify your claims?",
    answer:
      "Every substantive claim in our investigation is linked to source documents in our Evidence section. We encourage readers to review the primary sources themselves. Our Methodology page explains our verification standards.",
  },
  {
    question: "Why aren't all documents published?",
    answer:
      "We publish all publication-cleared evidence—documents that can be shared publicly without compromising ongoing reporting, source protection, or legal considerations. Some records remain in our secure archive until appropriate for release.",
  },
  {
    question: "How do you protect sources?",
    answer:
      "We follow industry-standard practices for source protection. Anonymous sources are used only when necessary and their information is independently verified. We never reveal confidential sources without their explicit consent.",
  },
  {
    question: "Can I contribute information?",
    answer:
      "Yes. If you have relevant documents or information, we want to hear from you. We have secure channels for receiving sensitive materials. All tips are reviewed, though we cannot respond to every submission.",
  },
  {
    question: "How do you fund this investigation?",
    answer:
      "This investigation is independently funded. We do not accept funding from any individual, organization, or government entity that is a subject of this investigation or could have a conflict of interest in its findings.",
  },
  {
    question: "Will there be more parts to the series?",
    answer:
      "Yes. This is an ongoing investigation. New parts will be published as reporting is completed and verified. Sign up for updates to be notified when new installments are released.",
  },
  {
    question: "I'm named in the investigation. How can I respond?",
    answer:
      "We actively seek comment from all individuals and organizations named in our reporting before publication. If you believe you should have been contacted, or wish to provide a statement, please reach out. All substantive responses are published in our Responses section.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-stone-600">
          Common questions about what our investigation does and does not claim, 
          how we work, and how to interpret our findings.
        </p>
      </header>

      <section className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-lg border border-stone-200 bg-white"
          >
            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium hover:bg-stone-50">
              <span className="pr-4">{faq.question}</span>
              <span className="flex-shrink-0 text-stone-400 group-open:rotate-180 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-stone-600">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </section>

      <section className="rounded-lg bg-stone-100 p-6">
        <h2 className="font-semibold mb-2">Still have questions?</h2>
        <p className="text-sm text-stone-600">
          If your question isn't answered here, check our{" "}
          <a href="/methodology" className="text-red-600 hover:underline">
            Methodology
          </a>{" "}
          page for more detail on how we work, or our{" "}
          <a href="/responses" className="text-red-600 hover:underline">
            Responses
          </a>{" "}
          section for answers to specific inquiries we've received.
        </p>
      </section>
    </div>
  );
}
