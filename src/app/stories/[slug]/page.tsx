import { notFound, redirect } from "next/navigation";
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

  const info = partInfo[story.part || 1];
  return {
    title: `${info?.title || story.title} | TEXANS FIRST*`,
    description: story.excerpt,
  };
}

const partInfo: Record<number, { numeral: string; title: string; slug: string }> = {
  1: { numeral: "I", title: "The Promise", slug: "the-promise" },
  2: { numeral: "II", title: "The Connector", slug: "the-connector" },
  3: { numeral: "III", title: "The Other End", slug: "andhra-apparatus" },
  4: { numeral: "IV", title: "The Governors", slug: "revolving-door" },
  5: { numeral: "V", title: "The Network", slug: "itserve-alliance" },
  6: { numeral: "VI", title: "The Ledger", slug: "the-ledger" },
};

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStory(slug);
  const allStories = await getStories();

  if (!story) {
    notFound();
  }

  const info = partInfo[story.part || 1] || { numeral: "", title: "", slug: "" };

  const sortedStories = allStories
    .filter(s => s.part)
    .sort((a, b) => (a.part || 0) - (b.part || 0));
  
  const currentIndex = sortedStories.findIndex(s => s.slug === slug);
  const prevStory = currentIndex > 0 ? sortedStories[currentIndex - 1] : null;
  const nextStory = currentIndex < sortedStories.length - 1 ? sortedStories[currentIndex + 1] : null;

  return (
    <article className="bg-white">
      {/* Draft marker */}
      <div className="bg-[#fef3c7] border-b border-[#f59e0b] text-center py-1.5">
        <p className="text-xs font-medium text-[#92400e] tracking-wide">
          DRAFT — NOT FOR DISTRIBUTION
        </p>
      </div>

      {/* Header */}
      <header className="mx-auto max-w-3xl px-6 pt-12 pb-10">
        {/* Series label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="label-caps text-[#8b0000]">
            Part {info.numeral}
          </span>
          <span className="text-[#d1d5db]">|</span>
          <span className="label-caps text-[#6b7280]">
            {info.title}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6">
          {info.title}
        </h1>

        {/* Excerpt */}
        <p className="font-serif-body text-xl text-[#374151] leading-relaxed mb-8">
          {story.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-[#6b7280] pt-6 border-t border-[#e5e5e5]">
          <a 
            href="https://x.com/plumbnick"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b0000] transition-colors"
          >
            By Nick Plumb
          </a>
          <span>·</span>
          <time>
            {new Date(story.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <div
          className="prose-editorial has-dropcap"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      </div>

      {/* Navigation */}
      <nav className="border-t border-[#e5e5e5] bg-[#faf9f7]">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="grid sm:grid-cols-2 gap-8">
            {prevStory ? (
              <Link
                href={`/stories/${prevStory.slug}`}
                className="group"
              >
                <p className="label-caps text-[#9ca3af] mb-2">Previous</p>
                <p className="font-display text-lg group-hover:text-[#8b0000] transition-colors">
                  {partInfo[prevStory.part || 1]?.numeral}. {partInfo[prevStory.part || 1]?.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextStory ? (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="group sm:text-right"
              >
                <p className="label-caps text-[#9ca3af] mb-2">Next</p>
                <p className="font-display text-lg group-hover:text-[#8b0000] transition-colors">
                  {partInfo[nextStory.part || 1]?.numeral}. {partInfo[nextStory.part || 1]?.title}
                </p>
              </Link>
            ) : (
              <Link
                href="/evidence"
                className="group sm:text-right"
              >
                <p className="label-caps text-[#9ca3af] mb-2">Continue</p>
                <p className="font-display text-lg group-hover:text-[#8b0000] transition-colors">
                  View the Evidence
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Series index */}
      <div className="border-t border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="label-caps text-[#6b7280] mb-6">The Complete Series</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(partInfo).map(([partNum, sInfo]) => {
              const isCurrent = sInfo.slug === slug;
              return (
                <Link
                  key={partNum}
                  href={`/stories/${sInfo.slug}`}
                  className={`block p-4 border transition-colors ${
                    isCurrent 
                      ? 'border-[#8b0000] bg-[#faf9f7]' 
                      : 'border-[#e5e5e5] hover:border-[#8b0000]'
                  }`}
                >
                  <p className="label-caps text-[#9ca3af] mb-1">Part {sInfo.numeral}</p>
                  <p className={`font-medium ${isCurrent ? 'text-[#8b0000]' : ''}`}>
                    {sInfo.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
