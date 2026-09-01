import { notFound } from "next/navigation";
import Link from "next/link";
import { getStory, getAllStorySlugs } from "@/lib/stories";

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

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStory(slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Investigation
      </Link>

      <header className="mb-8 pb-8 border-b border-stone-200">
        {story.part && (
          <span className="inline-block rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700 mb-4">
            Part {story.part}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {story.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
          {story.author && <span>By {story.author}</span>}
          {story.date && (
            <time dateTime={story.date}>
              {new Date(story.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </header>

      <div
        className="prose prose-stone prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-red-600 prose-blockquote:bg-stone-50 prose-blockquote:py-1 prose-blockquote:px-4
          prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />

      <footer className="mt-12 pt-8 border-t border-stone-200">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/evidence"
            className="text-sm font-medium text-red-600 hover:text-red-700"
          >
            View Related Evidence →
          </Link>
          <Link
            href="/methodology"
            className="text-sm font-medium text-stone-600 hover:text-stone-900"
          >
            Read Our Methodology →
          </Link>
        </div>
      </footer>
    </article>
  );
}
