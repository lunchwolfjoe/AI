import Link from "next/link";
import { getStories } from "@/lib/stories";

const seriesParts = [
  {
    part: 1,
    title: "The Promise",
    description: "How a state program meant to help Texans became something else entirely.",
    status: "coming-soon",
  },
  {
    part: 2,
    title: "The Pattern",
    description: "Examining the contracts, the connections, and the coincidences.",
    status: "coming-soon",
  },
  {
    part: 3,
    title: "The Players",
    description: "Who benefits when public money flows through private hands.",
    status: "coming-soon",
  },
  {
    part: 4,
    title: "The Paper Trail",
    description: "Following the documents that tell a different story.",
    status: "coming-soon",
  },
  {
    part: 5,
    title: "The Pushback",
    description: "What happens when questions are asked.",
    status: "coming-soon",
  },
  {
    part: 6,
    title: "The Path Forward",
    description: "Accountability, reforms, and what comes next.",
    status: "coming-soon",
  },
];

export default async function Home() {
  const stories = await getStories();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          TEXANS FIRST<span className="text-red-600">*</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-2">
          A six-part investigative series examining public records, 
          contracts, and the gap between promises and reality.
        </p>
        <p className="text-sm text-stone-400">
          *Terms and conditions may apply
        </p>
      </section>

      {/* Series Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="h-1 w-8 bg-red-600 rounded"></span>
          The Series
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seriesParts.map((part) => (
            <article
              key={part.part}
              className="group relative rounded-lg border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-md"
            >
              <div className="mb-3">
                <span className="inline-block rounded bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600">
                  Part {part.part}
                </span>
                {part.status === "coming-soon" && (
                  <span className="ml-2 inline-block rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{part.title}</h3>
              <p className="text-sm text-stone-600">{part.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Published Stories */}
      {stories.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="h-1 w-8 bg-red-600 rounded"></span>
            Published Stories
          </h2>
          <div className="space-y-4">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="block rounded-lg border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                    <p className="text-sm text-stone-600">{story.excerpt}</p>
                  </div>
                  <time className="text-xs text-stone-400 whitespace-nowrap">
                    {story.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
