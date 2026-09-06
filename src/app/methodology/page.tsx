import Link from "next/link";

export const metadata = {
  title: "Methodology | TEXANS FIRST*",
  description: "How this investigation gathered, verified, and presented the evidence.",
};

const recordTypes = [
  { record: "DIR Contract", proves: "Vendor eligibility to sell through this vehicle", notProves: "That any agency actually bought anything" },
  { record: "Purchase Order", proves: "Authorization up to stated amount", notProves: "Final amount paid or who did the work" },
  { record: "Payment Record", proves: "Money moved to the vendor", notProves: "Who performed the labor or where" },
  { record: "LCA Filing", proves: "Employer filed visa paperwork", notProves: "Worker was approved, started, or performed a specific contract" },
  { record: "Lobby Registration", proves: "Disclosed representation relationship", notProves: "Actual influence or that compensation was paid" },
  { record: "Campaign Donation", proves: "Political support/access context", notProves: "Quid pro quo or purchased official action" },
  { record: "FDI Announcement", proves: "Reported/announced investment intent", notProves: "Realized jobs, actual payroll, or causation" },
  { record: "Corporate India Office", proves: "Company has delivery capability there", notProves: "Any Texas work was performed there" },
];

export default function MethodologyPage() {
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
          <p className="label-caps text-[#8b0000] mb-4">How I Work</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-6">Methodology</h1>
          <p className="font-serif-body text-xl text-[#374151] leading-relaxed">
            This investigation distinguishes between what records prove, what they 
            suggest, and what remains unknown. Every claim is tied to a verifiable source.
          </p>
        </header>

        {/* Content */}
        <div className="prose-editorial">
          <h2>Source Hierarchy</h2>
          <p>
            I weight evidence by reliability. Not all records are equal.
          </p>
          
          <p>
            <strong>Primary records</strong> — executed contracts, official audits, ethics 
            filings, IRS records, corporate registrations — receive full weight.
          </p>
          
          <p>
            <strong>First-party statements</strong> — government press releases, official 
            agency documents — receive strong weight.
          </p>
          
          <p>
            <strong>Contemporaneous reporting</strong> — news accounts from the time 
            quoting principals — serves as corroboration.
          </p>
          
          <p>
            <strong>Secondary analysis</strong> — later compilations and third-party 
            databases — generates leads but does not prove claims.
          </p>

          <h2>What Each Record Type Proves</h2>
          <p>
            I am deliberate about not over-interpreting evidence. Each record type 
            has a specific scope.
          </p>
        </div>

        {/* Mobile-friendly record types */}
        <div className="mt-8 space-y-6 sm:hidden">
          {recordTypes.map((row, i) => (
            <div key={i} className="border border-[#e5e5e5] p-4">
              <p className="font-semibold text-[#1a1a1a] mb-3">{row.record}</p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-[#6b7280]">Proves:</span>{" "}
                  <span className="text-[#374151]">{row.proves}</span>
                </p>
                <p>
                  <span className="text-[#6b7280]">Does not prove:</span>{" "}
                  <span className="text-[#374151] italic">{row.notProves}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[#1a1a1a]">
                <th className="py-3 pr-4 text-left font-semibold">Record</th>
                <th className="py-3 px-4 text-left font-semibold">Proves</th>
                <th className="py-3 pl-4 text-left font-semibold">Does Not Prove</th>
              </tr>
            </thead>
            <tbody>
              {recordTypes.map((row, i) => (
                <tr key={i} className="border-b border-[#e5e5e5]">
                  <td className="py-3 pr-4 font-medium">{row.record}</td>
                  <td className="py-3 px-4 text-[#374151]">{row.proves}</td>
                  <td className="py-3 pl-4 text-[#6b7280] italic">{row.notProves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-editorial mt-12">
          <h2>How I Connect Records</h2>
          <p>
            I join records across entities and time using verified identifiers — not 
            assumptions. These include legal entity names, taxpayer/vendor IDs, contract 
            numbers, solicitation numbers, LCA case numbers, lobbyist/client identities, 
            corporate registrations, and named public roles.
          </p>
          <p>
            When names are ambiguous — multiple "John Smiths," for instance — I hold 
            the connection as a lead rather than a confirmed match unless corroborating 
            evidence establishes identity.
          </p>

          <h2>I Correct Myself</h2>
          <p>
            Several early theories were weakened or changed by later records. I document 
            these corrections rather than hide them:
          </p>
          <ul>
            <li>Whitley's Accenture representation began earlier than initially believed</li>
            <li>Amzur's India presence predates the 2016 Andhra recruitment push</li>
            <li>TxEDC does not administer the Texas Enterprise Fund — I initially overstated this</li>
            <li>The 2024 versus 2025 job figures use different methodologies and are not necessarily contradictory</li>
          </ul>

          <h2>Editorial Standards</h2>
          <p>
            <strong>This investigation is institutional, not ethnic.</strong>
          </p>
          <p>
            India, Indian companies, diaspora organizations, ITServe members, and H-1B 
            workers are not treated as a single category or as inherently problematic. 
            Economic development abroad, lawful immigration sponsorship, lobbying, 
            litigation, donations, and civic participation are not wrongdoing.
          </p>
          <p>
            The accountability question is specific: Did Texas build a system to measure 
            the promise it made? The answer appears to be no.
          </p>

          <h2>Subjects Were Contacted</h2>
          <p>
            Before publication, subjects of significant findings received questions and 
            an opportunity to respond. Responses — or the absence of responses — are 
            documented in the <Link href="/responses">Responses</Link> section.
          </p>
          <p>
            I do not characterize silence as confirmation. A nonresponse is reported 
            as exactly that.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-10 border-t border-[#e5e5e5] flex justify-between">
          <Link href="/evidence" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            ← Evidence
          </Link>
          <Link href="/responses" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            Responses →
          </Link>
        </nav>
      </div>
    </div>
  );
}
