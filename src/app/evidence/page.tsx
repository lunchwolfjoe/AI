import Link from "next/link";

interface EvidenceCard {
  id: string;
  title: string;
  category: string;
  description: string;
  source: string;
  sourceUrl?: string;
  date?: string;
  relatedParts?: number[];
}

const evidenceCards: EvidenceCard[] = [
  {
    id: "placeholder-1",
    title: "Sample Evidence Card",
    category: "Contracts",
    description:
      "This is a placeholder evidence card. Replace with actual publication-cleared evidence.",
    source: "Public Records Request",
    date: "2024-01-01",
    relatedParts: [1, 2],
  },
];

const categories = [
  { name: "All", count: evidenceCards.length },
  { name: "Contracts", count: evidenceCards.filter((e) => e.category === "Contracts").length },
  { name: "Communications", count: evidenceCards.filter((e) => e.category === "Communications").length },
  { name: "Financial", count: evidenceCards.filter((e) => e.category === "Financial").length },
  { name: "Personnel", count: evidenceCards.filter((e) => e.category === "Personnel").length },
];

export const metadata = {
  title: "Evidence | TEXANS FIRST*",
  description: "Publication-safe evidence cards supporting the investigation.",
};

export default function EvidencePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Evidence</h1>
        <p className="text-lg text-stone-600 max-w-3xl">
          Every claim in this investigation is supported by verifiable evidence. 
          Below are publication-cleared records, documents, and sources organized 
          by category.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 pb-4 border-b border-stone-200">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            {cat.name}
            <span className="ml-1 text-stone-400">({cat.count})</span>
          </button>
        ))}
      </div>

      {evidenceCards.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-stone-200 p-12 text-center">
          <p className="text-stone-500">
            Evidence cards will be added as the investigation is published.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceCards.map((card) => (
            <article
              key={card.id}
              className="rounded-lg border border-stone-200 bg-white p-6 transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-block rounded bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600">
                  {card.category}
                </span>
                {card.date && (
                  <time className="text-xs text-stone-400">{card.date}</time>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-stone-600 mb-4">{card.description}</p>
              <div className="pt-4 border-t border-stone-100">
                <p className="text-xs text-stone-500">
                  <strong>Source:</strong> {card.source}
                </p>
                {card.relatedParts && card.relatedParts.length > 0 && (
                  <p className="text-xs text-stone-500 mt-1">
                    <strong>Related:</strong> Part{" "}
                    {card.relatedParts.join(", Part ")}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <section className="rounded-lg bg-amber-50 border border-amber-200 p-6">
        <h2 className="font-semibold text-amber-900 mb-2">
          Publication Boundary Notice
        </h2>
        <p className="text-sm text-amber-800">
          Only publication-cleared evidence appears here. The master investigative 
          ledger, speculative leads, private reporting notes, and unreleased records 
          are maintained separately and are not part of this public repository.
        </p>
      </section>
    </div>
  );
}
