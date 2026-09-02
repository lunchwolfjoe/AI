import Link from "next/link";

const seriesParts = [
  {
    part: 1,
    numeral: "I",
    title: "The Promise",
    description: "How Texas spent a decade courting an India-facing technology economy and still cannot show who performs the work taxpayers buy.",
    slug: "the-promise",
  },
  {
    part: 2,
    numeral: "II",
    title: "The Connector",
    description: "Arun Agarwal is not the scandal. He is the design — a person whose value is the ability to move between institutions.",
    slug: "the-connector",
  },
  {
    part: 3,
    numeral: "III",
    title: "The Other End",
    description: "Texas celebrated the relationship. Andhra Pradesh built machinery to capture the investment, operations and jobs.",
    slug: "andhra-apparatus",
  },
  {
    part: 4,
    numeral: "IV",
    title: "The Governors",
    description: "Some of the officials who knew the system from the inside went to work around the companies using it.",
    slug: "revolving-door",
  },
  {
    part: 5,
    numeral: "V",
    title: "The Network",
    description: "Educate. Lobby. Litigate. How a fragmented industry learned to act collectively.",
    slug: "itserve-alliance",
  },
  {
    part: 6,
    numeral: "VI",
    title: "The Ledger",
    description: "Texas promised taxpayer-funded jobs to Texans. Its contractor system still cannot show who performs the work.",
    slug: "the-ledger",
  },
];

export default async function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="label-caps text-[#8b0000] mb-6">An Investigation in Six Parts</p>
          
          <h1 className="font-display text-6xl sm:text-7xl leading-[0.95] mb-8">
            Texans<br />First<span className="text-[#8b0000]">*</span>
          </h1>
          
          <p className="font-serif-body text-2xl text-[#374151] leading-relaxed mb-6">
            Texas promised taxpayer-funded jobs would go to Texans. 
            The state built no system to measure if that happened.
          </p>

          <p className="font-serif-body text-lg text-[#6b7280] leading-relaxed mb-10">
            By <a href="https://x.com/plumbnick" className="text-[#8b0000] hover:underline" target="_blank" rel="noopener noreferrer">Nick Plumb</a>
            <span className="mx-2">·</span>
            September 2026
          </p>

          <Link
            href="/stories/the-promise"
            className="inline-block border-2 border-[#1a1a1a] px-8 py-4 font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Begin Reading
          </Link>
        </div>
      </section>

      {/* The Quote */}
      <section className="border-t border-b border-[#e5e5e5] bg-[#faf9f7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <blockquote className="font-serif-body text-2xl sm:text-3xl text-center leading-relaxed italic">
            "Taxpayer-funded employment opportunities should be filled by Texans first."
          </blockquote>
          <p className="text-center text-[#6b7280] mt-6">
            — Governor Greg Abbott, January 27, 2026
          </p>
        </div>
      </section>

      {/* The Numbers - responsive: cards on mobile, table on desktop */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="label-caps text-[#8b0000] mb-4">The Governor's Own Data</p>
        <h2 className="font-display text-3xl mb-10">Texas-India Bilateral Investment, 2015–2024</h2>

        {/* Mobile: Stacked cards */}
        <div className="sm:hidden space-y-6">
          <div className="border border-[#e5e5e5] p-6">
            <p className="label-caps text-[#6b7280] mb-4">India → Texas</p>
            <div className="space-y-3 font-serif-body">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="font-semibold">74</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Capital</span>
                <span className="font-semibold">$2.7B</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Jobs</span>
                <span className="font-semibold">8,650+</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#8b0000] p-6 bg-[#faf9f7]">
            <p className="label-caps text-[#8b0000] mb-4">Texas → India</p>
            <div className="space-y-3 font-serif-body">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="font-semibold text-[#8b0000]">175</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Capital</span>
                <span className="font-semibold text-[#8b0000]">$7.6B</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Jobs</span>
                <span className="font-semibold text-[#8b0000]">59,300+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Table */}
        <div className="hidden sm:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1a1a1a]">
                <th className="py-3 pr-8 font-semibold"></th>
                <th className="py-3 px-4 font-semibold text-right">India → Texas</th>
                <th className="py-3 px-4 font-semibold text-right">Texas → India</th>
              </tr>
            </thead>
            <tbody className="font-serif-body">
              <tr className="border-b border-[#e5e5e5]">
                <td className="py-4 pr-8">Projects</td>
                <td className="py-4 px-4 text-right">74</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">175</td>
              </tr>
              <tr className="border-b border-[#e5e5e5]">
                <td className="py-4 pr-8">Announced Capital</td>
                <td className="py-4 px-4 text-right">$2.7 billion</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">$7.6 billion</td>
              </tr>
              <tr className="border-b border-[#e5e5e5]">
                <td className="py-4 pr-8">Announced Jobs</td>
                <td className="py-4 px-4 text-right">8,650+</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">59,300+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#6b7280] mt-6 italic">
          Source: Governor's Economic Development & Tourism Office, Texas & India profile, July 2025.
        </p>

        <div className="mt-12 p-6 sm:p-8 bg-[#faf9f7] border-l-3 border-[#8b0000]" style={{ borderLeftWidth: '3px' }}>
          <p className="font-serif-body text-lg leading-relaxed">
            For every job announced coming to Texas, <strong className="text-[#8b0000]">nearly seven jobs</strong> were announced going to India — using the Governor's own figures.
          </p>
        </div>
      </section>

      {/* The Finding */}
      <section className="bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="label-caps text-[#8b0000] mb-6">The Central Finding</p>
          <p className="font-serif-body text-2xl sm:text-3xl leading-relaxed mb-8">
            The relevant distinction is not Indian versus American. 
            It is <em>measured</em> versus <em>unmeasured</em>.
          </p>
          <p className="font-serif-body text-lg text-[#9ca3af] leading-relaxed">
            One government built machinery to bring jobs home. 
            Texas built machinery to recruit companies — but not to follow where the labor actually went.
          </p>
        </div>
      </section>

      {/* The Series */}
      <section className="border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="label-caps text-[#8b0000] mb-4">The Investigation</p>
          <h2 className="font-display text-3xl mb-12">Contents</h2>

          <div className="space-y-0 border-t border-[#e5e5e5]">
            {seriesParts.map((part) => (
              <Link
                key={part.part}
                href={`/stories/${part.slug}`}
                className="group block border-b border-[#e5e5e5] py-8 hover:bg-[#faf9f7] transition-colors -mx-6 px-6"
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <span className="font-display text-3xl sm:text-4xl text-[#d1d5db] group-hover:text-[#8b0000] transition-colors w-12 sm:w-16 flex-shrink-0">
                    {part.numeral}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl mb-2 group-hover:text-[#8b0000] transition-colors">
                      {part.title}
                    </h3>
                    <p className="font-serif-body text-[#6b7280] leading-relaxed">
                      {part.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources - compact row */}
      <section className="border-t border-[#e5e5e5] bg-[#faf9f7]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/evidence" className="text-[#374151] hover:text-[#8b0000] transition-colors">
              Evidence
            </Link>
            <span className="text-[#d1d5db]">·</span>
            <Link href="/methodology" className="text-[#374151] hover:text-[#8b0000] transition-colors">
              Methodology
            </Link>
            <span className="text-[#d1d5db]">·</span>
            <Link href="/responses" className="text-[#374151] hover:text-[#8b0000] transition-colors">
              Responses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
