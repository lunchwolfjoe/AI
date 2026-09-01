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

const partTitles: Record<number, string> = {
  1: "The Promise",
  2: "The Bridge",
  3: "The Door",
  4: "The Gap",
  5: "The Machine",
  6: "The Ledger",
};

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStory(slug);
  const allStories = await getStories();

  if (!story) {
    notFound();
  }

  const sortedStories = allStories
    .filter(s => s.part)
    .sort((a, b) => (a.part || 0) - (b.part || 0));
  
  const currentIndex = sortedStories.findIndex(s => s.slug === slug);
  const prevStory = currentIndex > 0 ? sortedStories[currentIndex - 1] : null;
  const nextStory = currentIndex < sortedStories.length - 1 ? sortedStories[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Investigation
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12">
        {story.part && (
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-900 text-white font-bold text-lg">
              {story.part}
            </span>
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Part {story.part} of 6
              </p>
              <p className="text-stone-500 text-sm">
                {partTitles[story.part]}
              </p>
            </div>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 font-display leading-tight">
          {story.title}
        </h1>
        
        <p className="text-xl text-stone-600 leading-relaxed mb-6">
          {story.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 pb-8 border-b border-stone-200">
          {story.author && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {story.author}
            </span>
          )}
          {story.date && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(story.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div
        className="prose-investigation"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-stone-200">
        <div className="grid sm:grid-cols-2 gap-4">
          {prevStory ? (
            <Link
              href={`/stories/${prevStory.slug}`}
              className="group p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all"
            >
              <p className="text-sm text-stone-500 mb-2">← Previous</p>
              <p className="font-semibold group-hover:text-red-600 transition-colors">
                Part {prevStory.part}: {prevStory.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextStory ? (
            <Link
              href={`/stories/${nextStory.slug}`}
              className="group p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all text-right"
            >
              <p className="text-sm text-stone-500 mb-2">Next →</p>
              <p className="font-semibold group-hover:text-red-600 transition-colors">
                Part {nextStory.part}: {nextStory.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/evidence"
              className="group p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all text-right"
            >
              <p className="text-sm text-stone-500 mb-2">Explore →</p>
              <p className="font-semibold group-hover:text-red-600 transition-colors">
                View the Evidence
              </p>
            </Link>
          )}
        </div>
      </nav>

      {/* Related Links */}
      <footer className="mt-12 p-8 bg-stone-100 rounded-2xl">
        <h3 className="font-semibold mb-4">Continue Exploring</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/evidence"
            className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline"
          >
            View Evidence →
          </Link>
          <Link
            href="/methodology"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 hover:underline"
          >
            Read Methodology →
          </Link>
          <Link
            href="/responses"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 hover:underline"
          >
            See Responses →
          </Link>
        </div>
      </footer>
    </article>
  );
}
