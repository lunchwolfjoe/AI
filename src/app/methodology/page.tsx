export const metadata = {
  title: "Methodology | TEXANS FIRST*",
  description: "Our source hierarchy, evidentiary rules, and analytical method.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Methodology</h1>
        <p className="text-lg text-stone-600">
          This investigation uses a deliberately conservative evidence hierarchy 
          and distinguishes established facts from derived findings, contextual 
          evidence, open questions and unsupported inferences.
        </p>
      </header>

      <section className="prose prose-stone max-w-none">
        <h2>Source Hierarchy</h2>
        <p>
          The project uses a deliberately conservative evidence hierarchy:
        </p>
        <ol>
          <li>
            <strong>Primary government records</strong> — executed contracts, 
            official audits, campaign/lobbying filings
          </li>
          <li>
            <strong>IRS filings and corporate records</strong> — first-party 
            documents with legal accountability
          </li>
          <li>
            <strong>Contemporaneous reporting</strong> — used when it quotes 
            principals or describes events for which the primary document has 
            not yet been recovered
          </li>
          <li>
            <strong>Secondary aggregators</strong> — used as leads or 
            corroboration unless independently matched to primary records
          </li>
        </ol>

        <h2>Core Evidentiary Rules</h2>
        <p>
          Each type of record is assigned a specific evidentiary scope. We do not 
          over-interpret what records prove:
        </p>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-stone-200">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-semibold border-b">Term / Record</th>
              <th className="text-left p-3 font-semibold border-b">What This Report Permits</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-medium">LCA</td>
              <td className="p-3 text-stone-600">
                A Labor Condition Application is employer-side labor/visa process evidence. 
                It is not a visa approval and not proof that a named worker performed a particular Texas contract.
              </td>
            </tr>
            <tr className="border-b bg-stone-50">
              <td className="p-3 font-medium">DIR contract</td>
              <td className="p-3 text-stone-600">
                A statewide master contract establishes eligibility to sell under the vehicle. 
                It is not evidence that an agency bought anything.
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Purchase order</td>
              <td className="p-3 text-stone-600">
                A purchase order establishes authorization up to the stated scope/amount. 
                It is not always evidence of the amount ultimately paid.
              </td>
            </tr>
            <tr className="border-b bg-stone-50">
              <td className="p-3 font-medium">Payment</td>
              <td className="p-3 text-stone-600">
                A payment proves public money moved to the vendor, but not who performed 
                the labor or where.
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Remote work</td>
              <td className="p-3 text-stone-600">
                Remote does not mean offshore.
              </td>
            </tr>
            <tr className="border-b bg-stone-50">
              <td className="p-3 font-medium">Corporate India presence</td>
              <td className="p-3 text-stone-600">
                An India office or offshore-delivery capability does not prove a 
                Texas-funded task was delivered there.
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">ITServe membership</td>
              <td className="p-3 text-stone-600">
                Membership is evidence of association participation, not a visa category, 
                nationality, procurement outcome or improper coordination.
              </td>
            </tr>
            <tr className="border-b bg-stone-50">
              <td className="p-3 font-medium">Lobbying</td>
              <td className="p-3 text-stone-600">
                A registration establishes a disclosed representation relationship. 
                Prospective compensation is not proof of actual payment; representation 
                is not proof of influence.
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Donation</td>
              <td className="p-3 text-stone-600">
                A lawful contribution establishes political support/access context, 
                not a purchased official act.
              </td>
            </tr>
            <tr className="border-b bg-stone-50">
              <td className="p-3 font-medium">FDI</td>
              <td className="p-3 text-stone-600">
                Announced/reported capital and jobs are not audited realized payroll, 
                net welfare or a direct measure of Texas jobs lost.
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Audit distribution</td>
              <td className="p-3 text-stone-600">
                A report sent to an office does not prove a named official personally read it.
              </td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 font-medium">MOU/incentive announcement</td>
              <td className="p-3 text-stone-600">
                A memorandum, advertised subsidy or announced benefit is not proof of disbursement.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="prose prose-stone max-w-none">
        <h2>Analytical Method</h2>
        <p>
          The investigation joins records across entities and time rather than treating 
          any one database as self-explanatory. The preferred join keys are:
        </p>
        <ul>
          <li>Legal entity name</li>
          <li>Taxpayer/vendor identifier</li>
          <li>Contract number</li>
          <li>Solicitation number</li>
          <li>LCA case number</li>
          <li>Lobbying client/lobbyist identity</li>
          <li>Corporate registration</li>
          <li>Named public role</li>
        </ul>
        <p>
          When names are ambiguous, the record is held as a lead rather than treated as a match.
        </p>

        <h2>Corrections</h2>
        <p>
          The master ledger preserves corrections. Several early theories were weakened 
          or changed by later records. For example:
        </p>
        <ul>
          <li>Whitley's Accenture representation began earlier than initially believed</li>
          <li>Amzur's India presence predates the 2016 Andhra recruitment push</li>
          <li>The 2024 versus 2025 Governor's Office Texas-job estimates use different 
          source bases and should not be called a contradiction until methodologies are reconciled</li>
        </ul>

        <h2>Publication Posture</h2>
        <p>
          The most defensible public framing remains institutional rather than ethnic 
          or conspiratorial. The record supports a story about economic-development policy, 
          public contracting, labor visibility, organized industry advocacy and revolving-door governance.
        </p>
        <p>
          The investigation explicitly states that India, Indian companies, diaspora 
          organizations, ITServe members and H-1B workers are not treated as a single category. 
          Economic development abroad, lawful immigration sponsorship, lobbying, litigation, 
          donations and civic participation are not wrongdoing.
        </p>
        <p>
          <strong>The central accountability question is whether Texas made a promise it 
          built no consistent public accounting system to measure.</strong>
        </p>
      </section>

      <section className="rounded-lg bg-stone-100 p-6">
        <h2 className="font-semibold mb-2">The Proposed Reform</h2>
        <p className="text-sm text-stone-600">
          A machine-readable contractor labor ledger linking the prime vendor, material 
          subcontractor, labor category, Texas residency, actual work geography, aggregate 
          work-authorization category, hours and dollars — with privacy protections for individuals.
        </p>
      </section>
    </div>
  );
}
