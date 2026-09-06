import Link from "next/link";

const mainParts = [
  {
    part: 1,
    numeral: "I",
    title: "The Promise",
    description: "Texas said taxpayer-funded jobs should go to Texans. Its contractor records stop at the vendor.",
    slug: "the-promise",
  },
  {
    part: 2,
    numeral: "II",
    title: "The Purchase Order",
    description: "One $363,377 staffing assignment shows exactly what Texas can see — and what it cannot.",
    slug: "the-purchase-order",
  },
  {
    part: 3,
    numeral: "III",
    title: "Show Us the Ledger",
    description: "Texas does not need to choose between global business and Texans First. It needs to measure what it buys.",
    slug: "the-ledger",
  },
];

const contextParts = [
  {
    part: 4,
    numeral: "IV",
    title: "The Other End",
    description: "Texas promoted a bridge to India. Andhra Pradesh built machinery to turn that bridge into offices, investment and jobs.",
    slug: "andhra-apparatus",
  },
  {
    part: 5,
    numeral: "V",
    title: "The Connectors",
    description: "Texas's India strategy was built through public-private relationships. The disclosure systems remained separate.",
    slug: "the-connector",
  },
  {
    part: 6,
    numeral: "VI",
    title: "Educate. Lobby. Litigate.",
    description: "ITServe shows what happens when a fragmented staffing industry learns to act collectively.",
    slug: "itserve-alliance",
  },
];

function PartList({ parts }: { parts: typeof mainParts }) {
  return (
    <div className="space-y-0 border-t border-[#e5e5e5]">
      {parts.map((part) => (
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
  );
}

export default async function Home() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="label-caps text-[#8b0000] mb-6">An Investigation</p>

          <h1 className="font-display text-6xl sm:text-7xl leading-[0.95] mb-8">
            Texans<br />First<span className="text-[#8b0000]">*</span>
          </h1>

          <p className="font-serif-body text-2xl text-[#374151] leading-relaxed mb-6">
            Texas said taxpayer-funded jobs should go to Texans.
            Its contractor records stop at the vendor.
          </p>

          <p className="font-serif-body text-lg text-[#6b7280] leading-relaxed mb-10">
            By{" "}
            <a
              href="https://x.com/plumbnick"
              className="text-[#8b0000] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nick Plumb
            </a>
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

      <section className="border-t border-b border-[#e5e5e5] bg-[#faf9f7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <blockquote className="font-serif-body text-2xl sm:text-3xl text-center leading-relaxed italic">
            &ldquo;Employment opportunities, particularly those funded with taxpayer
            dollars, should be filled by Texans first.&rdquo;
          </blockquote>
          <p className="text-center text-[#6b7280] mt-6">
            — Governor Greg Abbott, January 27, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="label-caps text-[#8b0000] mb-4">The Governor&apos;s Own Data</p>
        <h2 className="font-display text-3xl mb-10">
          Texas-India Bilateral Investment, Last Decade
        </h2>

        <div className="sm:hidden space-y-6">
          <div className="border border-[#e5e5e5] p-6">
            <p className="label-caps text-[#6b7280] mb-4">India → Texas</p>
            <div className="space-y-3 font-serif-body">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="font-semibold">77</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Capital</span>
                <span className="font-semibold">$2.81B</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Jobs</span>
                <span className="font-semibold">9,450+</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#8b0000] p-6 bg-[#faf9f7]">
            <p className="label-caps text-[#8b0000] mb-4">Texas → India</p>
            <div className="space-y-3 font-serif-body">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="font-semibold text-[#8b0000]">181</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Capital</span>
                <span className="font-semibold text-[#8b0000]">$7.24B</span>
              </div>
              <div className="flex justify-between">
                <span>Announced Jobs</span>
                <span className="font-semibold text-[#8b0000]">63,345+</span>
              </div>
            </div>
          </div>
        </div>

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
                <td className="py-4 px-4 text-right">77</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">181</td>
              </tr>
              <tr className="border-b border-[#e5e5e5]">
                <td className="py-4 pr-8">Announced Capital</td>
                <td className="py-4 px-4 text-right">$2.81 billion</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">
                  $7.24 billion
                </td>
              </tr>
              <tr className="border-b border-[#e5e5e5]">
                <td className="py-4 pr-8">Announced Jobs</td>
                <td className="py-4 px-4 text-right">9,450+</td>
                <td className="py-4 px-4 text-right font-semibold text-[#8b0000]">
                  63,345+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#6b7280] mt-6 italic">
          Source: Governor&apos;s Economic Development &amp; Tourism Office, India &amp;
          Texas Profile, August 2026. Announced projects and jobs — not verified
          displacement.
        </p>

        <div
          className="mt-12 p-6 sm:p-8 bg-[#faf9f7]"
          style={{ borderLeft: "3px solid #8b0000" }}
        >
          <p className="font-serif-body text-lg leading-relaxed">
            These figures do not prove Texas lost jobs. They establish scale and
            direction on the metrics economic-development offices themselves use —
            and why worker geography is a legitimate accounting question.
          </p>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="label-caps text-[#8b0000] mb-6">The Central Finding</p>
          <p className="font-serif-body text-2xl sm:text-3xl leading-relaxed mb-8">
            Governor Abbott ordered Texas government to put Texans first in
            taxpayer-funded jobs, but the state still has no public statewide way
            to say who is performing the technology labor it buys from private
            contractors.
          </p>
          <p className="font-serif-body text-lg text-[#9ca3af] leading-relaxed">
            Not proof of fraud. Not proof of offshoring. A measurement gap.
          </p>
        </div>
      </section>

      <section className="border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="label-caps text-[#8b0000] mb-4">Main Investigation</p>
          <h2 className="font-display text-3xl mb-12">Three Stories</h2>
          <PartList parts={mainParts} />
        </div>
      </section>

      <section className="border-t border-[#e5e5e5] bg-[#faf9f7]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="label-caps text-[#8b0000] mb-4">Context</p>
          <h2 className="font-display text-3xl mb-4">How the Bridge Was Built</h2>
          <p className="font-serif-body text-[#6b7280] mb-12 max-w-2xl">
            These chapters do not prove that a specific Texas taxpayer-funded
            assignment was performed overseas. They explain the institutions,
            relationships and industry organization around the accounting gap.
          </p>
          <PartList parts={contextParts} />
        </div>
      </section>

      <section className="border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="/evidence"
              className="text-[#374151] hover:text-[#8b0000] transition-colors"
            >
              Evidence
            </Link>
            <span className="text-[#d1d5db]">·</span>
            <Link
              href="/methodology"
              className="text-[#374151] hover:text-[#8b0000] transition-colors"
            >
              Methodology
            </Link>
            <span className="text-[#d1d5db]">·</span>
            <Link
              href="/responses"
              className="text-[#374151] hover:text-[#8b0000] transition-colors"
            >
              Responses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
