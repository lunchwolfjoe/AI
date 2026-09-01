import Link from "next/link";

export const metadata = {
  title: "Responses | TEXANS FIRST*",
  description: "Right-of-reply statements, pending requests, and corrections log.",
};

interface ResponseRequest {
  id: string;
  recipient: string;
  category: string;
  dateSent?: string;
  deadline?: string;
  status: "pending" | "sent" | "received" | "no-response";
  summary: string;
}

const responseRequests: ResponseRequest[] = [
  {
    id: "gov-abbott",
    recipient: "Office of Governor Greg Abbott",
    category: "Government",
    status: "pending",
    summary: "Questions about H-1B directive scope, contractor workforce measurement, India mission coordination, and bilateral investment figures.",
  },
  {
    id: "dir",
    recipient: "Texas Department of Information Resources",
    category: "Government",
    status: "pending",
    summary: "Questions about ITSAC worker-level data collection, offshore delivery disclosure, and post-directive guidance.",
  },
  {
    id: "twc",
    recipient: "Texas Workforce Commission",
    category: "Government",
    status: "pending",
    summary: "Questions about Digerati assignment details, H-1B petition approvals under the directive, and contractor workforce controls.",
  },
  {
    id: "txedc",
    recipient: "Texas Economic Development Corporation",
    category: "Government/Private",
    status: "pending",
    summary: "Questions about India mission roles, announced vs. realized jobs tracking, and coordination with Andhra organizations.",
  },
  {
    id: "whitley",
    recipient: "David Whitley / Gregory Strategies",
    category: "Intermediary",
    status: "pending",
    summary: "Questions about Wipro, Accenture, and Nextt representation; agencies contacted; cooling-off compliance.",
  },
  {
    id: "scott",
    recipient: "John B. Scott",
    category: "Intermediary",
    status: "pending",
    summary: "Questions about Deloitte representation after chairing DIR; recusal practices.",
  },
  {
    id: "hughs",
    recipient: "Ruth Ruggero Hughs",
    category: "Intermediary",
    status: "pending",
    summary: "Questions about technology vendor representation after TWC and Secretary of State roles. Pending final registration verification.",
  },
  {
    id: "strickland",
    recipient: "Jerry Strickland",
    category: "Intermediary",
    status: "pending",
    summary: "Questions about Cognizant representation; Texas vs. federal lobbying subjects; Abbott relationship safeguards.",
  },
  {
    id: "cognizant",
    recipient: "Cognizant",
    category: "Vendor",
    status: "pending",
    summary: "Questions about H-1B use on Texas contracts, offshore delivery, and state vs. federal lobbying separation.",
  },
  {
    id: "itserve",
    recipient: "ITServe Alliance",
    category: "Association",
    status: "pending",
    summary: "Questions about Texas DIR contract holders, H-1B tracking, Andhra recruitment role, and Abbott 2022 event.",
  },
  {
    id: "digerati",
    recipient: "Digerati Systems",
    category: "Vendor",
    status: "pending",
    summary: "Questions about TWC assignment, worker residence/location, subcontracting, and India-based recruiting.",
  },
  {
    id: "amzur",
    recipient: "Amzur",
    category: "Vendor",
    status: "pending",
    summary: "Questions about Texas public work, Andhra operations, APNRT benefits, and offshore delivery practices.",
  },
  {
    id: "wipro",
    recipient: "Wipro",
    category: "Vendor",
    status: "pending",
    summary: "Questions about Whitley representation subjects and offshore delivery of Texas work.",
  },
  {
    id: "accenture",
    recipient: "Accenture",
    category: "Vendor",
    status: "pending",
    summary: "Questions about Whitley representation and Texas resident vs. non-resident labor quantification.",
  },
  {
    id: "andhra",
    recipient: "Andhra Pradesh / APNRTS / APIIC",
    category: "International",
    status: "pending",
    summary: "Questions about ITServe recruitment firm list, incentive disbursements, Dallas Technology Centre records, and Texas coordination.",
  },
];

const statusStyles = {
  pending: "bg-stone-100 text-stone-600",
  sent: "bg-blue-100 text-blue-700",
  received: "bg-green-100 text-green-700",
  "no-response": "bg-amber-100 text-amber-700",
};

const statusLabels = {
  pending: "Pending",
  sent: "Sent",
  received: "Response Received",
  "no-response": "No Response",
};

interface Response {
  id: string;
  date: string;
  type: "right-of-reply" | "correction" | "clarification";
  from: string;
  title: string;
  content: string;
}

const responses: Response[] = [];

export default function ResponsesPage() {
  const pendingCount = responseRequests.filter(r => r.status === "pending").length;
  const sentCount = responseRequests.filter(r => r.status === "sent").length;
  const receivedCount = responseRequests.filter(r => r.status === "received").length;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Responses</h1>
        <p className="text-lg text-stone-600">
          We seek comment from all individuals and organizations named in this investigation 
          before publication. This page tracks our outreach and publishes responses received.
        </p>
      </header>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-stone-100 p-4 text-center">
          <p className="text-2xl font-bold text-stone-900">{pendingCount}</p>
          <p className="text-sm text-stone-600">Pending</p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 text-center">
          <p className="text-2xl font-bold text-blue-700">{sentCount}</p>
          <p className="text-sm text-stone-600">Sent</p>
        </div>
        <div className="rounded-lg bg-green-50 p-4 text-center">
          <p className="text-2xl font-bold text-green-700">{receivedCount}</p>
          <p className="text-sm text-stone-600">Received</p>
        </div>
      </div>

      {/* Response Requests */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Right-of-Reply Requests</h2>
        <p className="text-sm text-stone-600 mb-4">
          These are reporting questions, not accusations. Recipients are given clear 
          deadlines and told that responses may be quoted or summarized.
        </p>
        <div className="space-y-3">
          {responseRequests.map((request) => (
            <div
              key={request.id}
              className="rounded-lg border border-stone-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{request.recipient}</h3>
                    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${statusStyles[request.status]}`}>
                      {statusLabels[request.status]}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{request.category}</p>
                  <p className="text-sm text-stone-600">{request.summary}</p>
                </div>
              </div>
              {request.dateSent && (
                <p className="text-xs text-stone-400 mt-2">
                  Sent: {request.dateSent} | Deadline: {request.deadline}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Received Responses */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Published Responses</h2>
        {responses.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-stone-200 p-8 text-center">
            <p className="text-stone-500">
              No responses have been received yet. This section will be updated 
              as responses arrive.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {responses.map((response) => (
              <article
                key={response.id}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="font-semibold mb-2">{response.title}</h3>
                <p className="text-sm text-stone-500 mb-3">From: {response.from} | {response.date}</p>
                <p className="text-stone-600">{response.content}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Editorial Note */}
      <section className="rounded-lg bg-amber-50 border border-amber-200 p-6">
        <h2 className="font-semibold text-amber-900 mb-2">Editorial Standards</h2>
        <ul className="text-sm text-amber-800 space-y-1">
          <li>• Where a question asks whether a record exists, a nonresponse is not proof that the record does not exist.</li>
          <li>• Where a recipient corrects a factual premise, we verify the correction independently before revising the story.</li>
          <li>• Publication language for nonresponse is factual and narrow: "[Recipient] did not respond to questions sent on [date]."</li>
          <li>• We do not characterize silence as confirmation.</li>
        </ul>
      </section>
    </div>
  );
}
