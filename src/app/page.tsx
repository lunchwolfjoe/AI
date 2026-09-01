import Link from "next/link";
import { getStories } from "@/lib/stories";

const seriesParts = [
  {
    part: 1,
    title: "The Promise",
    subtitle: "Executive Findings",
    description: "After Abbott declared taxpayer-funded jobs should go to Texans first, could Texas show who actually performed the work?",
    status: "published",
    slug: "executive-findings",
  },
  {
    part: 2,
    title: "The Bridge",
    subtitle: "Bilateral Investment",
    description: "Texas's own numbers show a highly asymmetric relationship: more projects, capital, and jobs flowing to India than from it.",
    status: "published",
    slug: "bilateral-investment",
  },
  {
    part: 3,
    title: "The Door",
    subtitle: "Revolving Door",
    description: "Former senior Abbott officials later represented technology vendors in the same ecosystem they once oversaw.",
    status: "published",
    slug: "revolving-door",
  },
  {
    part: 4,
    title: "The Gap",
    subtitle: "Contractor Visibility",
    description: "Texas sees vendors clearly but workers poorly. Standard templates lack fields for residence, work location, or visa status.",
    status: "coming-soon",
  },
  {
    part: 5,
    title: "The Machine",
    subtitle: "Andhra's Apparatus",
    description: "On the other side of the relationship, explicit government machinery to capture investment, operations, and jobs.",
    status: "coming-soon",
  },
  {
    part: 6,
    title: "The Ledger",
    subtitle: "What Should Change",
    description: "The central failure is measurement, not conspiracy. The fix is a statewide labor ledger.",
    status: "coming-soon",
  },
];

const keyFindings = [
  {
    stat: "6.86×",
    label: "More announced jobs in India than Texas jobs from Indian companies (2015-2024)",
  },
  {
    stat: "59,300+",
    label: "Jobs announced by Texas companies in India vs. 8,650+ from Indian companies in Texas",
  },
  {
    stat: "0",
    label: "Dedicated statewide fields for worker residence, visa status, or offshore delivery in standard ITSAC templates",
  },
];

export default async function Home() {
  const stories = await getStories();
  const publishedStories = stories.filter(s => s.slug !== 'sample-story');

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 border-b border-stone-200">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          TEXANS FIRST<span className="text-red-600">*</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-2">
          An investigation into Texas public technology contracting, 
          economic development, and the gap between promises about jobs 
          and the systems built to measure them.
        </p>
        <p className="text-sm text-stone-400 italic">
          *The asterisk reflects a common theme: programs marketed as benefiting 
          Texans often come with caveats not apparent in public messaging.
        </p>
      </section>

      {/* Key Numbers */}
      <section className="grid gap-6 sm:grid-cols-3">
        {keyFindings.map((finding, i) => (
          <div key={i} className="text-center p-6 rounded-lg bg-stone-100">
            <p className="text-3xl font-bold text-red-600 mb-2">{finding.stat}</p>
            <p className="text-sm text-stone-600">{finding.label}</p>
          </div>
        ))}
      </section>

      {/* Central Finding */}
      <section className="rounded-lg border-l-4 border-red-600 bg-stone-50 p-6">
        <h2 className="font-bold text-lg mb-2">The Central Finding</h2>
        <p className="text-stone-700">
          The evidence supports a public-policy mismatch: Texas leaders made geographically 
          specific promises about jobs while the state's public contracting systems largely 
          account at the vendor/contract level. <strong>The central proven failure is measurement, 
          not a proven conspiracy.</strong>
        </p>
      </section>

      {/* Series Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="h-1 w-8 bg-red-600 rounded"></span>
          The Six-Part Series
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seriesParts.map((part) => (
            <article
              key={part.part}
              className={`group relative rounded-lg border bg-white p-6 transition-all ${
                part.status === "published" 
                  ? "border-stone-300 hover:border-red-300 hover:shadow-md cursor-pointer" 
                  : "border-stone-200"
              }`}
            >
              {part.status === "published" && part.slug ? (
                <Link href={`/stories/${part.slug}`} className="absolute inset-0" />
              ) : null}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded bg-stone-800 px-2 py-1 text-xs font-medium text-white">
                  Part {part.part}
                </span>
                {part.status === "coming-soon" ? (
                  <span className="inline-block rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                    Coming Soon
                  </span>
                ) : (
                  <span className="inline-block rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Published
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-1">{part.title}</h3>
              <p className="text-sm font-medium text-red-600 mb-2">{part.subtitle}</p>
              <p className="text-sm text-stone-600">{part.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What This Investigation Does NOT Claim */}
      <section className="rounded-lg bg-stone-100 p-6">
        <h2 className="font-bold text-lg mb-4">What This Investigation Does NOT Claim</h2>
        <ul className="space-y-2 text-sm text-stone-700">
          <li className="flex gap-2">
            <span className="text-red-600 font-bold">✕</span>
            That a particular Texas-funded technology task was performed offshore through documented Andhra machinery.
          </li>
          <li className="flex gap-2">
            <span className="text-red-600 font-bold">✕</span>
            That Abbott personally knew of APNRTS/DTC or intended contractor labor to fall outside his Texans-first policy.
          </li>
          <li className="flex gap-2">
            <span className="text-red-600 font-bold">✕</span>
            That any lobbying relationship or campaign contribution caused a procurement, grant, or policy outcome.
          </li>
          <li className="flex gap-2">
            <span className="text-red-600 font-bold">✕</span>
            That India, Indian companies, diaspora organizations, ITServe members, or H-1B workers are a single category or inherently problematic.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg bg-stone-900 text-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Explore the Evidence</h2>
        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
          Every claim in this investigation is backed by public records, 
          documents, and verifiable sources. Review the evidence yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/evidence"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
          >
            View Evidence
          </Link>
          <Link
            href="/methodology"
            className="rounded-md border border-stone-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Our Methodology
          </Link>
        </div>
      </section>
    </div>
  );
}
