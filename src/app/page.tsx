import Link from "next/link";
import { getStories } from "@/lib/stories";

const seriesParts = [
  {
    part: 1,
    title: "The Promise",
    subtitle: "Executive Findings",
    description: "After Abbott declared taxpayer-funded jobs should go to Texans first, could Texas show who actually performed the work?",
    slug: "executive-findings",
  },
  {
    part: 2,
    title: "The Bridge",
    subtitle: "Bilateral Investment",
    description: "Texas's own numbers show a highly asymmetric relationship: more projects, capital, and jobs flowing to India than from it.",
    slug: "bilateral-investment",
  },
  {
    part: 3,
    title: "The Door",
    subtitle: "Revolving Door",
    description: "Former senior Abbott officials later represented technology vendors in the same ecosystem they once oversaw.",
    slug: "revolving-door",
  },
  {
    part: 4,
    title: "The Gap",
    subtitle: "Contractor Visibility",
    description: "Texas sees vendors clearly but workers poorly. Standard templates lack fields for residence, work location, or visa status.",
    slug: "contractor-visibility",
  },
  {
    part: 5,
    title: "The Machine",
    subtitle: "Andhra's Apparatus",
    description: "On the other side of the relationship, explicit government machinery to capture investment, operations, and jobs.",
    slug: "andhra-apparatus",
  },
  {
    part: 6,
    title: "The Ledger",
    subtitle: "What Should Change",
    description: "The central failure is measurement, not conspiracy. The fix is a statewide labor ledger.",
    slug: "the-ledger",
  },
];

export default async function Home() {
  const stories = await getStories();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="hero-gradient text-white -mx-4 px-4 py-20 sm:py-28 -mt-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 font-display">
            TEXANS FIRST<span className="text-red-500">*</span>
          </h1>
          <p className="text-xl sm:text-2xl text-stone-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            An investigation into Texas public technology contracting, 
            economic development, and the gap between promises and measurement.
          </p>
          <p className="text-sm text-stone-500 italic">
            *Terms and conditions may apply
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/stories/executive-findings"
              className="bg-white text-stone-900 px-8 py-4 rounded-md font-semibold hover:bg-stone-100 transition-colors"
            >
              Read the Investigation
            </Link>
            <Link
              href="/evidence"
              className="border border-stone-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View Evidence
            </Link>
          </div>
        </div>
      </section>

      {/* The Numbers - Visual Data */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="accent-bar mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold tracking-tight font-display">The Numbers Don't Lie</h2>
          <p className="text-stone-600 mt-2">Texas-India bilateral investment, 2015–2024 (Governor's own data)</p>
        </div>

        <div className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
            {/* India to Texas */}
            <div>
              <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">Indian Companies → Texas</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Projects</span>
                    <span className="text-2xl font-bold">74</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Capital</span>
                    <span className="text-2xl font-bold">$2.7B</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 rounded-full" style={{width: '36%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Announced Jobs</span>
                    <span className="text-2xl font-bold">&gt;8,650</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texas to India */}
            <div>
              <p className="text-red-400 text-sm uppercase tracking-wider mb-2">Texas Companies → India</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Projects</span>
                    <span className="text-2xl font-bold text-red-400">175</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Capital</span>
                    <span className="text-2xl font-bold text-red-400">$7.6B</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Announced Jobs</span>
                    <span className="text-2xl font-bold text-red-400">&gt;59,300</span>
                  </div>
                  <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ratio callouts */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-stone-700">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-red-400">2.4×</p>
              <p className="text-stone-400 text-sm mt-1">more projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-red-400">2.8×</p>
              <p className="text-stone-400 text-sm mt-1">more capital</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-red-400">6.9×</p>
              <p className="text-stone-400 text-sm mt-1">more jobs</p>
            </div>
          </div>
          
          <p className="text-stone-500 text-xs text-center mt-6">
            Source: Governor's Economic Development & Tourism Office, Texas & India profile, July 2025. 
            Figures are reported/announced investment, not audited realized employment.
          </p>
        </div>
      </section>

      {/* Central Finding */}
      <section className="mb-20">
        <div className="bg-stone-50 border-l-4 border-red-600 p-8 sm:p-12 rounded-r-2xl">
          <p className="text-sm text-red-600 font-semibold uppercase tracking-wider mb-4">Central Finding</p>
          <p className="text-2xl sm:text-3xl font-display leading-relaxed text-stone-900">
            The evidence supports a public-policy mismatch: Texas leaders made geographically 
            specific promises about jobs while the state's contracting systems largely account 
            at the vendor level.
          </p>
          <p className="text-xl text-stone-600 mt-6">
            <strong className="text-stone-900">The central proven failure is measurement, not a proven conspiracy.</strong>
          </p>
        </div>
      </section>

      {/* The Series */}
      <section className="mb-20">
        <div className="mb-12">
          <div className="accent-bar mb-6"></div>
          <h2 className="text-3xl font-bold tracking-tight font-display">The Six-Part Series</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {seriesParts.map((part) => (
            <Link
              key={part.part}
              href={`/stories/${part.slug}`}
              className="group block"
            >
              <article className="h-full rounded-xl border border-stone-200 bg-white p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-900 text-white text-sm font-bold">
                    {part.part}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                      {part.title}
                    </h3>
                    <p className="text-red-600 text-sm font-medium">{part.subtitle}</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {part.description}
                </p>
                <p className="text-red-600 text-sm font-medium mt-4 group-hover:underline">
                  Read Part {part.part} →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* What This Does NOT Claim */}
      <section className="mb-20">
        <div className="bg-stone-100 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold mb-8 font-display">What This Investigation Does NOT Claim</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "That a particular Texas-funded technology task was performed offshore through documented Andhra machinery.",
              "That Abbott personally knew of APNRTS/DTC or intended contractor labor to fall outside his Texans-first policy.",
              "That any lobbying relationship or campaign contribution caused a procurement, grant, or policy outcome.",
              "That India, Indian companies, diaspora organizations, ITServe members, or H-1B workers are a single category or inherently problematic.",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-sm">
                  ✕
                </span>
                <p className="text-stone-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-8">
        <div className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-display">Explore the Evidence</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Every claim in this investigation is backed by public records, 
            documents, and verifiable sources. Review the evidence yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/evidence"
              className="bg-white text-stone-900 px-8 py-4 rounded-md font-semibold hover:bg-stone-100 transition-colors"
            >
              View All Evidence
            </Link>
            <Link
              href="/methodology"
              className="border border-stone-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Our Methodology
            </Link>
            <Link
              href="/responses"
              className="border border-stone-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Responses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
