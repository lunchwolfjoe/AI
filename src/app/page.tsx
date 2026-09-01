import Link from "next/link";

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
  return (
    <div className="space-y-0">
      {/* Hero Section - Full bleed */}
      <section className="relative hero-gradient text-white -mx-4 px-4 -mt-8 mb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto py-24 sm:py-32 text-center">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-6">
            A Six-Part Investigation
          </p>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 font-display">
            TEXANS<br/>FIRST<span className="text-red-500">*</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light">
            Texas promised taxpayer-funded jobs would go to Texans. 
            <span className="text-white font-normal"> The state built no system to measure if that happened.</span>
          </p>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <Link
              href="/stories/executive-findings"
              className="group bg-white text-stone-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-red-500 hover:text-white transition-all"
            >
              Begin the Investigation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* The Key Question */}
      <section className="bg-stone-900 text-white -mx-4 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-6xl sm:text-7xl font-black text-red-500 mb-8">"</p>
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed mb-8">
            Taxpayer-funded employment opportunities should be filled by Texans first.
          </blockquote>
          <cite className="text-stone-400 text-lg">
            — Governor Greg Abbott, January 27, 2026
          </cite>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-20 -mx-4 px-4 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">The Governor's Own Data</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display">
              Follow the Money
            </h2>
            <p className="text-stone-600 mt-4 text-lg">Texas-India bilateral investment, 2015–2024</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* India to Texas */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-3xl">
                  🇮🇳
                </div>
                <div>
                  <p className="text-stone-500 text-sm uppercase tracking-wider">From India</p>
                  <p className="text-2xl font-bold">Indian Companies → Texas</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-500 text-sm">Projects</p>
                    <p className="text-5xl font-black">74</p>
                  </div>
                  <div className="h-16 w-24 bg-stone-200 rounded-lg"></div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-500 text-sm">Capital Investment</p>
                    <p className="text-5xl font-black">$2.7<span className="text-2xl">B</span></p>
                  </div>
                  <div className="h-16 w-20 bg-stone-200 rounded-lg"></div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-500 text-sm">Announced Jobs</p>
                    <p className="text-5xl font-black">8,650<span className="text-2xl">+</span></p>
                  </div>
                  <div className="h-16 w-8 bg-stone-200 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Texas to India */}
            <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center text-3xl">
                  🇺🇸
                </div>
                <div>
                  <p className="text-stone-400 text-sm uppercase tracking-wider">From Texas</p>
                  <p className="text-2xl font-bold">Texas Companies → India</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-400 text-sm">Projects</p>
                    <p className="text-5xl font-black text-red-400">175</p>
                  </div>
                  <div className="h-16 w-full max-w-[140px] bg-red-500 rounded-lg"></div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-400 text-sm">Capital Investment</p>
                    <p className="text-5xl font-black text-red-400">$7.6<span className="text-2xl">B</span></p>
                  </div>
                  <div className="h-16 w-full max-w-[140px] bg-red-500 rounded-lg"></div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-stone-400 text-sm">Announced Jobs</p>
                    <p className="text-5xl font-black text-red-400">59,300<span className="text-2xl">+</span></p>
                  </div>
                  <div className="h-16 w-full max-w-[140px] bg-red-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* The Ratio */}
          <div className="mt-12 text-center">
            <p className="text-stone-500 mb-6">For every job announced coming to Texas...</p>
            <div className="inline-flex items-center gap-4 bg-stone-900 text-white px-8 py-6 rounded-2xl">
              <span className="text-6xl sm:text-7xl font-black text-red-400">6.9</span>
              <span className="text-left text-lg">
                jobs were announced<br/>
                <span className="text-stone-400">going to India</span>
              </span>
            </div>
          </div>

          <p className="text-center text-stone-500 text-sm mt-8 max-w-2xl mx-auto">
            Source: Governor's Economic Development & Tourism Office, Texas & India profile, July 2025. 
            These are the state's own reported figures.
          </p>
        </div>
      </section>

      {/* The Core Finding */}
      <section className="py-20 -mx-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-600 text-white rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="relative">
              <p className="text-red-200 text-sm font-bold uppercase tracking-widest mb-6">The Central Finding</p>
              <p className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
                Texas made a promise about where jobs would go — then built no public system to track whether it was kept.
              </p>
              <p className="text-xl text-red-100 leading-relaxed">
                The state knows its vendors. It knows its contracts. It knows its payments. 
                <strong className="text-white"> But it cannot tell you who actually does the work, or where they do it from.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Series */}
      <section className="py-20 -mx-4 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">The Investigation</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display">Six Parts. One Story.</h2>
          </div>

          <div className="grid gap-4">
            {seriesParts.map((part, index) => (
              <Link
                key={part.part}
                href={`/stories/${part.slug}`}
                className="group block"
              >
                <article className="flex items-center gap-6 sm:gap-10 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 hover:border-red-300 hover:shadow-xl transition-all">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-900 text-white flex items-center justify-center text-2xl sm:text-3xl font-black group-hover:bg-red-600 transition-colors">
                    {part.part}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-red-600 transition-colors">
                        {part.title}
                      </h3>
                      <span className="hidden sm:inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full">
                        {part.subtitle}
                      </span>
                    </div>
                    <p className="text-stone-600 line-clamp-2">{part.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-stone-300 group-hover:text-red-500 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Found */}
      <section className="py-20 -mx-4 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">The Evidence</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display">What the Records Show</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "The economic relationship is deeply asymmetric",
                detail: "Texas companies announced nearly 7× more jobs in India than Indian companies announced in Texas — according to the Governor's own office.",
                likelihood: "Documented in official state records"
              },
              {
                title: "Worker-level data is systematically absent",
                detail: "Standard ITSAC templates have no fields for worker residence, location, or visa status. Texas tracks vendors, not the humans doing the work.",
                likelihood: "Confirmed by template review"
              },
              {
                title: "Andhra Pradesh built receiving infrastructure",
                detail: "Official APNRTS materials describe facilitating 'offshore operations in any segment.' The ITServe recruitment program placed 50+ companies with state support.",
                likelihood: "Documented in government records"
              },
              {
                title: "The revolving door is well-traveled",
                detail: "Multiple former Abbott officials now represent technology vendors selling to the state. Whitley, Scott, Strickland — the pattern is clear.",
                likelihood: "Verified via ethics filings"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-600 mb-4">{item.detail}</p>
                <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.likelihood}
                </p>
              </div>
            ))}
          </div>

          {/* What we strongly suspect */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                ⚡
              </span>
              What the Evidence Strongly Suggests
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Some Texas-funded technology work was likely performed offshore, though we cannot yet trace a specific task to a specific overseas worker.",
                "The lack of worker-level tracking is not an accident — it's a system designed to see contracts, not labor.",
                "The revolving door between Abbott's office and technology vendors creates obvious conflicts, even if we can't prove specific corrupt acts.",
                "Abbott's 'Texans First' promise was always unenforceable without a system to measure compliance.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-amber-800 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 -mx-4 px-4 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 font-display">See It Yourself</h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Every claim links to primary sources. Government records. Official filings. The state's own data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/evidence"
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all"
            >
              Browse the Evidence
            </Link>
            <Link
              href="/methodology"
              className="border border-stone-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              How We Verified
            </Link>
            <Link
              href="/responses"
              className="border border-stone-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Official Responses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
