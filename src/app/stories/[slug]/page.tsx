import { notFound } from "next/navigation";
import Link from "next/link";
import { getStory, getAllStorySlugs, getStories } from "@/lib/stories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStory(slug);

  if (!story) {
    return { title: "Story Not Found" };
  }

  return {
    title: `${story.title} | TEXANS FIRST*`,
    description: story.excerpt,
  };
}

const storyMeta: Record<string, { 
  subtitle: string; 
  heroGradient: string;
  heroIcon: string;
  location: string;
  readTime: string;
  heroImage?: string;
}> = {
  "executive-findings": {
    subtitle: "The Promise",
    heroGradient: "from-stone-900 via-stone-800 to-red-950",
    heroIcon: "📋",
    location: "Austin, Texas",
    readTime: "12 min read",
  },
  "bilateral-investment": {
    subtitle: "The Bridge", 
    heroGradient: "from-blue-950 via-stone-900 to-stone-800",
    heroIcon: "🌉",
    location: "Austin ↔ Hyderabad",
    readTime: "8 min read",
  },
  "revolving-door": {
    subtitle: "The Door",
    heroGradient: "from-amber-950 via-stone-900 to-stone-800",
    heroIcon: "🚪",
    location: "Texas State Capitol",
    readTime: "7 min read",
  },
  "contractor-visibility": {
    subtitle: "The Gap",
    heroGradient: "from-stone-900 via-slate-900 to-stone-800",
    heroIcon: "👁️",
    location: "State Agency Records",
    readTime: "9 min read",
  },
  "andhra-apparatus": {
    subtitle: "The Machine",
    heroGradient: "from-orange-950 via-stone-900 to-stone-800",
    heroIcon: "⚙️",
    location: "Andhra Pradesh, India",
    readTime: "10 min read",
  },
  "the-ledger": {
    subtitle: "The Ledger",
    heroGradient: "from-emerald-950 via-stone-900 to-stone-800",
    heroIcon: "📒",
    location: "The Path Forward",
    readTime: "11 min read",
  },
};

const partTitles: Record<number, string> = {
  1: "The Promise",
  2: "The Bridge",
  3: "The Door",
  4: "The Gap",
  5: "The Machine",
  6: "The Ledger",
};

function StoryHero({ story, meta }: { story: { title: string; excerpt: string; part?: number; slug: string }; meta: typeof storyMeta[string] }) {
  return (
    <div className={`relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 mb-12 bg-gradient-to-br ${meta.heroGradient}`}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Part indicator */}
          {story.part && (
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{meta.heroIcon}</span>
                <div>
                  <p className="text-red-400 font-bold text-sm uppercase tracking-[0.2em]">
                    Part {story.part} of 6
                  </p>
                  <p className="text-white/60 text-sm font-medium">
                    {meta.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {story.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
            {story.excerpt}
          </p>
          
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/20">
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {meta.location}
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {meta.readTime}
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Investigation Team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyInsight({ children, title = "Key Finding" }: { children: React.ReactNode; title?: string }) {
  return (
    <aside className="my-10 p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-r-xl">
      <p className="text-red-600 font-bold text-xs uppercase tracking-[0.15em] mb-2">{title}</p>
      <p className="text-stone-800 font-medium leading-relaxed">{children}</p>
    </aside>
  );
}

function FigureBox({ 
  caption, 
  source,
  type = "document"
}: { 
  caption: string; 
  source?: string;
  type?: "map" | "document" | "data" | "photo"
}) {
  const typeStyles = {
    map: { bg: "from-blue-100 to-cyan-100", icon: "🗺️", label: "Geographic Context" },
    document: { bg: "from-amber-100 to-yellow-100", icon: "📄", label: "Primary Document" },
    data: { bg: "from-emerald-100 to-teal-100", icon: "📊", label: "Data Visualization" },
    photo: { bg: "from-stone-200 to-stone-300", icon: "📷", label: "Documentary Image" },
  };
  
  const style = typeStyles[type];
  
  return (
    <figure className="my-10">
      <div className={`aspect-[16/9] bg-gradient-to-br ${style.bg} rounded-xl flex items-center justify-center relative overflow-hidden`}>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fig-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fig-grid)" />
          </svg>
        </div>
        <div className="text-center z-10">
          <span className="text-6xl mb-4 block">{style.icon}</span>
          <span className="text-sm font-medium text-stone-600 uppercase tracking-wide">{style.label}</span>
        </div>
      </div>
      <figcaption className="mt-3 px-2">
        <p className="text-sm text-stone-600 leading-relaxed">{caption}</p>
        {source && (
          <p className="text-xs text-stone-400 mt-1 font-mono">Source: {source}</p>
        )}
      </figcaption>
    </figure>
  );
}

function PullQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <blockquote className="my-12 relative">
      <div className="absolute -left-4 -top-4 text-8xl text-red-200 font-serif leading-none select-none">"</div>
      <div className="relative bg-stone-50 p-8 rounded-2xl border border-stone-200">
        <p className="text-2xl sm:text-3xl font-medium text-stone-800 leading-relaxed italic">
          {children}
        </p>
        {attribution && (
          <footer className="mt-4 text-sm text-stone-500 font-medium">
            — {attribution}
          </footer>
        )}
      </div>
    </blockquote>
  );
}

function ProgressBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 z-50">
      <div 
        id="reading-progress"
        className="h-full bg-red-600 transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}

function ReadingProgressScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var progressBar = document.getElementById('reading-progress');
            if (!progressBar) return;
            
            function updateProgress() {
              var scrollTop = window.scrollY;
              var docHeight = document.documentElement.scrollHeight - window.innerHeight;
              var progress = (scrollTop / docHeight) * 100;
              progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
            }
            
            window.addEventListener('scroll', updateProgress, { passive: true });
            updateProgress();
          })();
        `,
      }}
    />
  );
}

function processContentWithEnhancements(content: string, slug: string): string {
  const enhancements: Record<string, { 
    pullQuotes: Array<{ after: string; quote: string; attribution?: string }>;
    figures: Array<{ after: string; caption: string; source?: string; type: "map" | "document" | "data" | "photo" }>;
    keyInsights: Array<{ after: string; title?: string; text: string }>;
  }> = {
    "executive-findings": {
      pullQuotes: [
        { 
          after: "### 1. Abbott's own bilateral figures",
          quote: "Texas leaders made geographically specific promises about jobs while the state's contracting systems largely account at the vendor/contract level.",
        },
      ],
      figures: [
        { 
          after: "### 2. Texas deliberately built the relationship",
          caption: "Governor Abbott's 2018 and 2024 India missions included facility tours at Wipro, Infosys, TCS, and HCLTech headquarters, demonstrating direct state engagement in building the bilateral technology relationship.",
          source: "Governor's Office records, 2018-2024",
          type: "photo"
        },
      ],
      keyInsights: [
        {
          after: "### 10. The central proven failure",
          title: "Core Finding",
          text: "The evidence supports a public-policy mismatch: Texas leaders made promises about jobs going to Texans while the state's systems account only at the vendor level—not the worker level.",
        },
      ],
    },
    "bilateral-investment": {
      pullQuotes: [],
      figures: [
        {
          after: "## The Numbers",
          caption: "FDI flow comparison showing 2.36× more projects, 2.81× more capital, and 6.86× more jobs announced by Texas companies in India versus Indian companies in Texas (2015-2024).",
          source: "Governor's Economic Development & Tourism Office, July 2025",
          type: "data"
        },
        {
          after: "## Texas Built a Public-Private Bridge",
          caption: "Geographic scope of the Texas-India economic development relationship, spanning Austin headquarters operations to technology hubs in Hyderabad, Bangalore, and Chennai.",
          source: "TxEDC mission materials",
          type: "map"
        },
      ],
      keyInsights: [
        {
          after: "## What These Figures Mean",
          title: "Important Context",
          text: "These figures cannot be converted into 'jobs shipped from Texas.' A new job in India may support new markets rather than replace existing Texas workers.",
        },
      ],
    },
    "revolving-door": {
      pullQuotes: [
        {
          after: "The revolving-door evidence",
          quote: "Former senior Abbott officials later represented technology vendors around the same ecosystem.",
        },
      ],
      figures: [
        {
          after: "## The Key Personnel",
          caption: "Timeline of key personnel movements between Governor Abbott's office and private sector roles representing major technology contractors (2017-2024).",
          source: "Texas Ethics Commission filings",
          type: "document"
        },
      ],
      keyInsights: [],
    },
    "contractor-visibility": {
      pullQuotes: [],
      figures: [
        {
          after: "## The DIR ITSAC Framework",
          caption: "Simplified view of Texas's contractor workforce management structure: state agencies request labor through DIR master contracts, with visibility ending at the vendor level.",
          source: "DIR administrative rules",
          type: "data"
        },
      ],
      keyInsights: [
        {
          after: "## What Texas Tracks",
          title: "The Visibility Gap",
          text: "Standard current templates identify remote work and staffing categories but contain no dedicated statewide field for citizenship, work-authorization category, or offshore delivery.",
        },
      ],
    },
    "andhra-apparatus": {
      pullQuotes: [
        {
          after: "The state-level machinery",
          quote: "Official APNRTS materials describe government-assisted investment pipelines facilitating NRT investors establishing offshore operations.",
        },
      ],
      figures: [
        {
          after: "## APNRTS Structure",
          caption: "The Andhra Pradesh Non-Resident Telugu Society operates investment pipelines connecting diaspora investors to state-facilitated business opportunities.",
          source: "APNRTS official materials",
          type: "map"
        },
        {
          after: "## ITServe's Role",
          caption: "ITServe Alliance organizational structure showing the intersection of business education, lobbying, litigation, and international economic development activities.",
          source: "ITServe public records and conference materials",
          type: "document"
        },
      ],
      keyInsights: [],
    },
    "the-ledger": {
      pullQuotes: [],
      figures: [
        {
          after: "## A Statewide Labor Ledger",
          caption: "Proposed data architecture for a comprehensive Texas public contractor labor ledger, tracking residency, work location, subcontracting, and visa status.",
          source: "Investigation team proposal",
          type: "data"
        },
      ],
      keyInsights: [
        {
          after: "## The Core Demand",
          title: "The Path Forward",
          text: "The strongest defensible demand is a statewide labor ledger capable of measuring Texas residency, actual work location, subcontracting, and temporary-visa use in aggregate.",
        },
      ],
    },
  };

  const storyEnhancements = enhancements[slug];
  if (!storyEnhancements) return content;

  let processedContent = content;

  storyEnhancements.pullQuotes.forEach(pq => {
    const pullQuoteHtml = `
      <div class="story-pullquote">
        <div class="pullquote-mark">"</div>
        <blockquote>${pq.quote}</blockquote>
        ${pq.attribution ? `<footer>— ${pq.attribution}</footer>` : ''}
      </div>
    `;
    processedContent = processedContent.replace(
      pq.after,
      `${pq.after}\n${pullQuoteHtml}\n`
    );
  });

  storyEnhancements.figures.forEach(fig => {
    const typeLabels: Record<string, { icon: string; label: string; bg: string }> = {
      map: { icon: "🗺️", label: "Geographic Context", bg: "fig-map" },
      document: { icon: "📄", label: "Primary Document", bg: "fig-document" },
      data: { icon: "📊", label: "Data Visualization", bg: "fig-data" },
      photo: { icon: "📷", label: "Documentary Image", bg: "fig-photo" },
    };
    const style = typeLabels[fig.type];
    
    const figureHtml = `
      <figure class="story-figure">
        <div class="figure-placeholder ${style.bg}">
          <span class="figure-icon">${style.icon}</span>
          <span class="figure-type">${style.label}</span>
        </div>
        <figcaption>
          <p class="figure-caption">${fig.caption}</p>
          ${fig.source ? `<p class="figure-source">Source: ${fig.source}</p>` : ''}
        </figcaption>
      </figure>
    `;
    processedContent = processedContent.replace(
      fig.after,
      `${fig.after}\n${figureHtml}\n`
    );
  });

  storyEnhancements.keyInsights.forEach(ki => {
    const insightHtml = `
      <aside class="story-key-insight">
        <p class="insight-title">${ki.title || 'Key Finding'}</p>
        <p class="insight-text">${ki.text}</p>
      </aside>
    `;
    processedContent = processedContent.replace(
      ki.after,
      `${ki.after}\n${insightHtml}\n`
    );
  });

  return processedContent;
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStory(slug);
  const allStories = await getStories();

  if (!story) {
    notFound();
  }

  const meta = storyMeta[slug] || {
    subtitle: partTitles[story.part || 1] || "Investigation",
    heroGradient: "from-stone-900 to-stone-800",
    heroIcon: "📰",
    location: "Texas",
    readTime: "8 min read",
  };

  const sortedStories = allStories
    .filter(s => s.part)
    .sort((a, b) => (a.part || 0) - (b.part || 0));
  
  const currentIndex = sortedStories.findIndex(s => s.slug === slug);
  const prevStory = currentIndex > 0 ? sortedStories[currentIndex - 1] : null;
  const nextStory = currentIndex < sortedStories.length - 1 ? sortedStories[currentIndex + 1] : null;

  const enhancedContent = processContentWithEnhancements(story.content, slug);

  return (
    <>
      <ProgressBar />
      <ReadingProgressScript />
      
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Investigation
          </Link>
        </div>

        {/* Hero Section */}
        <StoryHero story={{ ...story, slug }} meta={meta} />

        {/* Drop cap intro */}
        <div className="story-content">
          <div
            className="prose-investigation drop-cap-first"
            dangerouslySetInnerHTML={{ __html: enhancedContent }}
          />
        </div>

        {/* Series Navigation */}
        <nav className="mt-16 pt-8 border-t-2 border-stone-200">
          <p className="text-center text-sm text-stone-500 uppercase tracking-[0.15em] font-medium mb-6">
            Continue the Investigation
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prevStory ? (
              <Link
                href={`/stories/${prevStory.slug}`}
                className="group p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-all"
              >
                <p className="text-sm text-stone-400 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </p>
                <p className="font-bold text-lg group-hover:text-red-600 transition-colors">
                  Part {prevStory.part}: {partTitles[prevStory.part || 1]}
                </p>
                <p className="text-sm text-stone-600 mt-1 line-clamp-2">{prevStory.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {nextStory ? (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="group p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-all text-right"
              >
                <p className="text-sm text-stone-400 mb-2 flex items-center justify-end gap-2">
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
                <p className="font-bold text-lg group-hover:text-red-600 transition-colors">
                  Part {nextStory.part}: {partTitles[nextStory.part || 1]}
                </p>
                <p className="text-sm text-stone-600 mt-1 line-clamp-2">{nextStory.title}</p>
              </Link>
            ) : (
              <Link
                href="/evidence"
                className="group p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 border border-red-200 transition-all text-right"
              >
                <p className="text-sm text-red-500 mb-2 flex items-center justify-end gap-2">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
                <p className="font-bold text-lg text-red-700">
                  View the Evidence
                </p>
                <p className="text-sm text-red-600/80 mt-1">Explore primary sources and documents</p>
              </Link>
            )}
          </div>
        </nav>

        {/* Series Overview */}
        <div className="mt-12 p-8 bg-stone-900 rounded-2xl text-white">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-3">
            <span className="text-red-500">●</span>
            Full Series
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sortedStories.map((s, i) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className={`p-3 rounded-lg transition-all ${
                  s.slug === slug 
                    ? 'bg-white/20 ring-2 ring-red-500' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <p className="text-xs text-white/60 mb-1">Part {i + 1}</p>
                <p className={`text-sm font-medium ${s.slug === slug ? 'text-white' : 'text-white/80'}`}>
                  {partTitles[s.part || 1]}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <footer className="mt-12 grid sm:grid-cols-3 gap-4">
          <Link
            href="/evidence"
            className="p-6 rounded-xl border border-stone-200 hover:border-red-300 hover:bg-red-50 transition-all group"
          >
            <span className="text-2xl mb-2 block">📎</span>
            <p className="font-semibold group-hover:text-red-600 transition-colors">Evidence</p>
            <p className="text-sm text-stone-500">Primary sources</p>
          </Link>
          <Link
            href="/methodology"
            className="p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all group"
          >
            <span className="text-2xl mb-2 block">🔬</span>
            <p className="font-semibold group-hover:text-stone-900 transition-colors">Methodology</p>
            <p className="text-sm text-stone-500">Our approach</p>
          </Link>
          <Link
            href="/responses"
            className="p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all group"
          >
            <span className="text-2xl mb-2 block">💬</span>
            <p className="font-semibold group-hover:text-stone-900 transition-colors">Responses</p>
            <p className="text-sm text-stone-500">Official replies</p>
          </Link>
        </footer>
      </article>
    </>
  );
}
