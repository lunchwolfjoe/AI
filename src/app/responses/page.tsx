export const metadata = {
  title: "Responses | TEXANS FIRST*",
  description: "Right-of-reply statements and corrections log.",
};

interface Response {
  id: string;
  date: string;
  type: "right-of-reply" | "correction" | "clarification" | "update";
  from?: string;
  title: string;
  content: string;
  relatedStory?: string;
}

const responses: Response[] = [];

const typeStyles = {
  "right-of-reply": "bg-blue-100 text-blue-700",
  correction: "bg-red-100 text-red-700",
  clarification: "bg-amber-100 text-amber-700",
  update: "bg-green-100 text-green-700",
};

const typeLabels = {
  "right-of-reply": "Right of Reply",
  correction: "Correction",
  clarification: "Clarification",
  update: "Update",
};

export default function ResponsesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Responses</h1>
        <p className="text-lg text-stone-600">
          We are committed to fairness and accuracy. This page contains 
          right-of-reply statements from individuals and organizations named 
          in our investigation, as well as any corrections or clarifications 
          to our reporting.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Response Types</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-stone-200 p-4">
            <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${typeStyles["right-of-reply"]} mb-2`}>
              Right of Reply
            </span>
            <p className="text-sm text-stone-600">
              Statements from individuals or organizations named in our 
              investigation, published in full or summarized with their consent.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 p-4">
            <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${typeStyles.correction} mb-2`}>
              Correction
            </span>
            <p className="text-sm text-stone-600">
              Factual errors identified after publication, with details of what 
              was corrected and when.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 p-4">
            <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${typeStyles.clarification} mb-2`}>
              Clarification
            </span>
            <p className="text-sm text-stone-600">
              Additional context added to address potential misunderstandings, 
              without changing the substance of our reporting.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 p-4">
            <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${typeStyles.update} mb-2`}>
              Update
            </span>
            <p className="text-sm text-stone-600">
              New developments that have occurred since original publication.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Response Log</h2>
        {responses.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-stone-200 p-8 text-center">
            <p className="text-stone-500">
              No responses have been logged yet. This section will be updated 
              as the investigation is published and responses are received.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {responses.map((response) => (
              <article
                key={response.id}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block rounded px-2 py-1 text-xs font-medium ${typeStyles[response.type]}`}
                  >
                    {typeLabels[response.type]}
                  </span>
                  <time className="text-sm text-stone-400">{response.date}</time>
                </div>
                <h3 className="text-lg font-semibold mb-2">{response.title}</h3>
                {response.from && (
                  <p className="text-sm text-stone-500 mb-3">
                    From: {response.from}
                  </p>
                )}
                <div className="prose prose-sm prose-stone max-w-none">
                  <p>{response.content}</p>
                </div>
                {response.relatedStory && (
                  <p className="text-xs text-stone-400 mt-4 pt-4 border-t border-stone-100">
                    Related to: {response.relatedStory}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-lg bg-stone-100 p-6">
        <h2 className="font-semibold mb-2">Submit a Response</h2>
        <p className="text-sm text-stone-600">
          If you are named in our investigation and wish to provide a statement, 
          or if you have identified an error in our reporting, please contact us. 
          We review all submissions and will respond within a reasonable timeframe.
        </p>
      </section>
    </div>
  );
}
