import Link from "next/link";

export const metadata = {
  title: "Responses | TEXANS FIRST*",
  description: "Right-of-reply requests and received responses.",
};

const responseRequests = [
  {
    recipient: "Office of Governor Greg Abbott",
    category: "Government",
    summary: "Questions about H-1B directive scope, contractor workforce measurement, and bilateral investment figures.",
  },
  {
    recipient: "Texas Department of Information Resources",
    category: "Government",
    summary: "Questions about ITSAC worker-level data collection and post-directive guidance.",
  },
  {
    recipient: "Texas Workforce Commission",
    category: "Government",
    summary: "Questions about Digerati assignment details and H-1B petition approvals under the directive.",
  },
  {
    recipient: "Texas Economic Development Corporation",
    category: "Government/Private",
    summary: "Questions about India mission roles and announced vs. realized jobs tracking.",
  },
  {
    recipient: "David Whitley / Gregory Strategies",
    category: "Intermediary",
    summary: "Questions about Wipro, Accenture, and Nextt representation; agencies contacted.",
  },
  {
    recipient: "John B. Scott",
    category: "Intermediary",
    summary: "Questions about Deloitte representation after chairing DIR.",
  },
  {
    recipient: "Jerry Strickland",
    category: "Intermediary",
    summary: "Questions about Cognizant representation and Abbott relationship.",
  },
  {
    recipient: "ITServe Alliance",
    category: "Association",
    summary: "Questions about Texas DIR contract holders and Andhra recruitment role.",
  },
  {
    recipient: "Digerati Systems",
    category: "Vendor",
    summary: "Questions about TWC assignment, worker residence, and subcontracting.",
  },
  {
    recipient: "Amzur",
    category: "Vendor",
    summary: "Questions about Texas public work and Andhra operations.",
  },
  {
    recipient: "Andhra Pradesh / APNRTS / APIIC",
    category: "International",
    summary: "Questions about ITServe recruitment and Dallas Technology Centre records.",
  },
];

export default function ResponsesPage() {
  return (
    <div className="bg-white">
      {/* Draft marker */}
      <div className="bg-[#fef3c7] border-b border-[#f59e0b] text-center py-1.5">
        <p className="text-xs font-medium text-[#92400e] tracking-wide">
          DRAFT — NOT FOR DISTRIBUTION
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <p className="label-caps text-[#8b0000] mb-4">Right of Reply</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-6">Responses</h1>
          <p className="font-serif-body text-xl text-[#374151] leading-relaxed">
            This page documents outreach to individuals and organizations named 
            in the investigation and publishes any responses received.
          </p>
        </header>

        {/* What this page is */}
        <section className="mb-12 p-6 bg-[#faf9f7] border-l-3 border-[#8b0000]" style={{ borderLeftWidth: '3px' }}>
          <h2 className="font-semibold text-[#1a1a1a] mb-3">About This Page</h2>
          <p className="font-serif-body text-[#374151] leading-relaxed mb-4">
            Before publication, I send questions to subjects of significant findings 
            and give them an opportunity to respond. These are reporting questions, 
            not accusations. Recipients are given clear deadlines and told that 
            responses may be quoted or summarized.
          </p>
          <p className="font-serif-body text-[#374151] leading-relaxed">
            Where a recipient corrects a factual premise, I verify the correction 
            independently. I do not characterize silence as confirmation.
          </p>
        </section>

        {/* Status block */}
        <section className="mb-12 p-6 border-2 border-[#1a1a1a]">
          <h2 className="font-display text-lg mb-4">Current Status</h2>
          <p className="font-serif-body text-[#374151] leading-relaxed mb-4">
            <strong>No on-the-record replies have been received</strong> as of September 1, 2026.
          </p>
          <p className="text-sm text-[#6b7280]">
            Requests logged in reporting notes; specific dates to be added before publication.
          </p>
        </section>

        {/* Who was contacted */}
        <section className="mb-16">
          <h2 className="font-display text-xl mb-6 pb-3 border-b-2 border-[#1a1a1a]">
            Questions Sent To
          </h2>
          
          <div className="space-y-6">
            {responseRequests.map((request, i) => (
              <article key={i} className="pb-6 border-b border-[#e5e5e5]">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="font-semibold text-[#1a1a1a]">
                    {request.recipient}
                  </h3>
                  <span className="text-sm text-[#6b7280]">
                    {request.category}
                  </span>
                </div>
                <p className="font-serif-body text-[#374151] leading-relaxed">
                  {request.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Received Responses */}
        <section className="mb-16">
          <h2 className="font-display text-xl mb-6 pb-3 border-b-2 border-[#1a1a1a]">
            Received Responses
          </h2>
          <p className="font-serif-body text-[#6b7280] italic">
            No on-the-record responses have been received. This section will be 
            updated if and when responses arrive.
          </p>
        </section>

        {/* Navigation */}
        <nav className="mt-16 pt-10 border-t border-[#e5e5e5] flex justify-between">
          <Link href="/methodology" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            ← Methodology
          </Link>
          <Link href="/" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            Back to Series →
          </Link>
        </nav>
      </div>
    </div>
  );
}
