import Link from "next/link";

export const metadata = {
  title: "Methodology | TEXANS FIRST*",
  description: "How this investigation gathered, verified, and presented the evidence.",
};

export default function MethodologyPage() {
  return (
    <div className="bg-white">
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

          <table>
            <thead>
              <tr>
                <th>Record</th>
                <th>Proves</th>
                <th>Does Not Prove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DIR Contract</td>
                <td>Vendor eligibility to sell through this vehicle</td>
                <td>That any agency actually bought anything</td>
              </tr>
              <tr>
                <td>Purchase Order</td>
                <td>Authorization up to stated amount</td>
                <td>Final amount paid or who did the work</td>
              </tr>
              <tr>
                <td>Payment Record</td>
                <td>Money moved to the vendor</td>
                <td>Who performed the labor or where</td>
              </tr>
              <tr>
                <td>LCA Filing</td>
                <td>Employer filed visa paperwork</td>
                <td>Worker was approved, started, or performed a specific contract</td>
              </tr>
              <tr>
                <td>Lobby Registration</td>
                <td>Disclosed representation relationship</td>
                <td>Actual influence or that compensation was paid</td>
              </tr>
              <tr>
                <td>Campaign Donation</td>
                <td>Political support/access context</td>
                <td>Quid pro quo or purchased official action</td>
              </tr>
              <tr>
                <td>FDI Announcement</td>
                <td>Reported/announced investment intent</td>
                <td>Realized jobs, actual payroll, or causation</td>
              </tr>
              <tr>
                <td>Corporate India Office</td>
                <td>Company has delivery capability there</td>
                <td>Any Texas work was performed there</td>
              </tr>
            </tbody>
          </table>

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
