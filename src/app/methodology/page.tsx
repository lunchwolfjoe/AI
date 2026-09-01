import Link from "next/link";

export const metadata = {
  title: "Methodology | TEXANS FIRST*",
  description: "How we gathered, verified, and presented the evidence.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">How We Work</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-display">
          Methodology
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed">
          This investigation distinguishes between what records prove, what they suggest, 
          and what remains unknown. Every claim is tied to a verifiable source.
        </p>
      </header>

      {/* Source Hierarchy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center text-lg font-bold">1</span>
          Source Hierarchy
        </h2>
        <p className="text-stone-600 mb-8">
          We weight evidence by reliability. Not all records are equal.
        </p>
        
        <div className="space-y-4">
          {[
            {
              level: "Primary",
              color: "bg-green-500",
              examples: "Executed contracts, official audits, ethics filings, IRS records, corporate registrations",
              weight: "Full weight"
            },
            {
              level: "First-Party",
              color: "bg-blue-500",
              examples: "Government press releases, official statements, published agency documents",
              weight: "Strong weight"
            },
            {
              level: "Contemporaneous",
              color: "bg-amber-500",
              examples: "News reports from the time quoting principals, dated photographs, meeting records",
              weight: "Corroborating weight"
            },
            {
              level: "Secondary",
              color: "bg-stone-400",
              examples: "Later analysis, aggregated data, third-party databases",
              weight: "Lead generation only"
            },
          ].map((source, i) => (
            <div key={i} className="flex items-stretch gap-4 bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className={`${source.color} w-2 flex-shrink-0`}></div>
              <div className="py-4 pr-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{source.level}</h3>
                  <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">{source.weight}</span>
                </div>
                <p className="text-stone-600 text-sm">{source.examples}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Records Mean */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center text-lg font-bold">2</span>
          What Each Record Type Proves
        </h2>
        <p className="text-stone-600 mb-8">
          We are deliberate about not over-interpreting evidence. Each record type has a specific scope.
        </p>

        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="text-left p-4 font-bold text-stone-900">Record Type</th>
                  <th className="text-left p-4 font-bold text-stone-900">What It Proves</th>
                  <th className="text-left p-4 font-bold text-stone-900">What It Does NOT Prove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  {
                    type: "DIR Contract",
                    proves: "Vendor is eligible to sell through this vehicle",
                    notProves: "That any agency actually bought anything"
                  },
                  {
                    type: "Purchase Order",
                    proves: "Authorization up to stated amount",
                    notProves: "Final amount paid or who did the work"
                  },
                  {
                    type: "Payment Record",
                    proves: "Money moved to the vendor",
                    notProves: "Who performed the labor or where"
                  },
                  {
                    type: "LCA Filing",
                    proves: "Employer filed visa paperwork",
                    notProves: "Worker was approved, started, or performed specific contract"
                  },
                  {
                    type: "Lobby Registration",
                    proves: "Disclosed representation relationship",
                    notProves: "Actual influence or that compensation was paid"
                  },
                  {
                    type: "Campaign Donation",
                    proves: "Political support/access context",
                    notProves: "Quid pro quo or purchased official action"
                  },
                  {
                    type: "FDI Announcement",
                    proves: "Reported/announced investment intent",
                    notProves: "Realized jobs, actual payroll, or causation"
                  },
                  {
                    type: "Corporate India Office",
                    proves: "Company has delivery capability there",
                    notProves: "Any Texas work was performed there"
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900">{row.type}</td>
                    <td className="p-4 text-stone-600">{row.proves}</td>
                    <td className="p-4 text-stone-500 italic">{row.notProves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Analytical Method */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center text-lg font-bold">3</span>
          How We Connect Records
        </h2>
        <p className="text-stone-600 mb-8">
          We join records across entities and time using verified identifiers — not assumptions.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Legal entity name", icon: "🏢" },
            { label: "Taxpayer/vendor ID", icon: "🔢" },
            { label: "Contract number", icon: "📄" },
            { label: "Solicitation number", icon: "📋" },
            { label: "LCA case number", icon: "📑" },
            { label: "Lobbyist/client identity", icon: "🤝" },
            { label: "Corporate registration", icon: "📁" },
            { label: "Named public role", icon: "👤" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl border border-stone-200 p-4">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="font-medium text-amber-900 mb-2">When names are ambiguous</p>
          <p className="text-amber-800">
            If we cannot verify a match with certainty, we hold it as a lead — not a confirmed connection. 
            Multiple "John Smiths" are not assumed to be the same person without corroborating evidence.
          </p>
        </div>
      </section>

      {/* Corrections */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center text-lg font-bold">4</span>
          We Correct Ourselves
        </h2>
        <p className="text-stone-600 mb-6">
          Several early theories were weakened or changed by later records. We document these corrections.
        </p>

        <div className="space-y-4">
          {[
            "Whitley's Accenture representation began earlier than initially believed",
            "Amzur's India presence predates the 2016 Andhra recruitment push",
            "TxEDC does not administer the Texas Enterprise Fund (we initially overstated this)",
            "The 2024 vs 2025 job figures use different methodologies — not necessarily a contradiction",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 text-sm">✓</span>
              <p className="text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center text-lg font-bold">5</span>
          Editorial Standards
        </h2>
        
        <div className="bg-stone-900 text-white rounded-2xl p-8">
          <p className="text-xl font-medium mb-6">
            This investigation is institutional, not ethnic.
          </p>
          <p className="text-stone-300 leading-relaxed mb-6">
            India, Indian companies, diaspora organizations, ITServe members, and H-1B workers are 
            <strong className="text-white"> not treated as a single category</strong> or as inherently problematic. 
            Economic development abroad, lawful immigration sponsorship, lobbying, litigation, donations, 
            and civic participation are not wrongdoing.
          </p>
          <p className="text-stone-300 leading-relaxed">
            The accountability question is specific: <strong className="text-white">Did Texas build a system to 
            measure the promise it made?</strong> The answer appears to be no.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-100 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Questions about our methods?</h3>
        <p className="text-stone-600 mb-6">
          We welcome good-faith questions about our reporting standards.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/evidence" className="text-red-600 font-semibold hover:underline">
            View the Evidence →
          </Link>
          <Link href="/responses" className="text-stone-600 font-semibold hover:underline">
            See Our Outreach →
          </Link>
        </div>
      </section>
    </div>
  );
}
