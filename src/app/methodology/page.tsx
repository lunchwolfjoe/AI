export const metadata = {
  title: "Methodology | TEXANS FIRST*",
  description: "Our matching rules, caveats, and reporting standards.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Methodology</h1>
        <p className="text-lg text-stone-600">
          Transparency in how we gathered, verified, and presented the evidence 
          in this investigation.
        </p>
      </header>

      <section className="prose prose-stone max-w-none">
        <h2>Data Sources</h2>
        <p>
          This investigation relies on publicly available records obtained through:
        </p>
        <ul>
          <li>Texas Public Information Act requests</li>
          <li>Federal FOIA requests</li>
          <li>Publicly filed contracts and procurement documents</li>
          <li>Court records and legal filings</li>
          <li>Corporate filings and SEC disclosures</li>
          <li>Interviews with current and former officials (where noted)</li>
        </ul>

        <h2>Matching Rules</h2>
        <p>
          When connecting individuals, organizations, and contracts, we applied 
          the following standards:
        </p>
        <ul>
          <li>
            <strong>Name matching:</strong> Exact matches verified against multiple 
            official sources. Partial matches noted as potential connections only.
          </li>
          <li>
            <strong>Corporate connections:</strong> Verified through Secretary of 
            State filings, not assumed from name similarity.
          </li>
          <li>
            <strong>Timeline correlation:</strong> Events within overlapping 
            timeframes noted but not assumed to be causally connected without 
            documentary evidence.
          </li>
        </ul>

        <h2>Verification Standards</h2>
        <p>
          Each claim in this investigation meets at least one of these standards:
        </p>
        <ol>
          <li>
            <strong>Document-backed:</strong> Supported by official documents 
            that readers can review in our evidence section.
          </li>
          <li>
            <strong>Multi-source confirmed:</strong> Verified by at least two 
            independent sources.
          </li>
          <li>
            <strong>On-record statement:</strong> Attributed to a named source 
            willing to be identified.
          </li>
        </ol>

        <h2>Caveats and Limitations</h2>
        <ul>
          <li>
            Public records requests may not capture all relevant documents. 
            Agencies may withhold records under various exemptions.
          </li>
          <li>
            Correlation in timing or relationships does not prove wrongdoing. 
            We distinguish between documented facts and reasonable inferences.
          </li>
          <li>
            Some individuals declined to comment or did not respond to requests. 
            Their positions are represented through official statements and 
            public records where available.
          </li>
        </ul>

        <h2>Corrections Policy</h2>
        <p>
          We are committed to accuracy. If you believe we have made an error:
        </p>
        <ol>
          <li>
            Contact us with specific information about the claimed error and 
            supporting documentation.
          </li>
          <li>
            We will investigate and respond within a reasonable timeframe.
          </li>
          <li>
            Corrections will be noted in our{" "}
            <a href="/responses">Responses</a> section with the date and nature 
            of the correction.
          </li>
        </ol>
      </section>

      <section className="rounded-lg bg-stone-100 p-6">
        <h2 className="font-semibold mb-2">Questions About Our Methods?</h2>
        <p className="text-sm text-stone-600">
          We welcome good-faith questions about our reporting standards and 
          methodology. Responses to specific inquiries are published in our{" "}
          <a href="/responses" className="text-red-600 hover:underline">
            Responses
          </a>{" "}
          section.
        </p>
      </section>
    </div>
  );
}
