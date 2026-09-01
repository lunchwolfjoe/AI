import Link from "next/link";

export const metadata = {
  title: "Evidence | TEXANS FIRST*",
  description: "Publication-cleared evidence supporting the investigation.",
};

interface EvidenceCategory {
  name: string;
  description: string;
  items: EvidenceItem[];
}

interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceUrl?: string;
  evidenceIds?: string[];
}

const evidenceCategories: EvidenceCategory[] = [
  {
    name: "Bilateral Investment",
    description: "Texas-India economic relationship data from official sources",
    items: [
      {
        id: "fdi-profile",
        title: "Governor's Texas & India Profile (July 2025)",
        description: "Reports 74 Indian-company projects in Texas (2015-2024), $2.7B capital, 8,650+ jobs. Texas companies: 175 projects in India, $7.6B capital, 59,300+ jobs.",
        source: "Governor's Economic Development & Tourism Office",
        sourceUrl: "https://gov.texas.gov/uploads/files/business/India-Profile.pdf",
        evidenceIds: ["EV-2026-0901-129", "EV-2026-0901-130"],
      },
      {
        id: "mission-discrepancy",
        title: "2024 India Mission Figures",
        description: "Earlier materials cited 59 projects, $1.4B, 10,300+ Texas jobs from Indian companies — different from the July 2025 profile.",
        source: "Governor's Office 2024 Mission Materials",
        evidenceIds: ["EV-2026-0901-131"],
      },
    ],
  },
  {
    name: "Contracting Architecture",
    description: "DIR ITSAC templates, SOW processes, and worker visibility gaps",
    items: [
      {
        id: "itsac-templates",
        title: "Current ITSAC SOW/Staffing Templates",
        description: "Templates ask about remote work and include cybersecurity obligations but contain no dedicated field for citizenship, work-authorization, or offshore delivery.",
        source: "DIR Contract Documents",
        sourceUrl: "https://dir.texas.gov/it-solutions-and-services/buying-through-dir/statement-work-sow",
        evidenceIds: ["EV-2026-0901-151", "EV-2026-0901-154", "EV-2026-0901-155"],
      },
      {
        id: "sow-process",
        title: "DIR SOW Review Process",
        description: "State-agency technology SOWs over $50,000 require DIR review before solicitation and DIR signature before payment.",
        source: "DIR Public Documentation",
        evidenceIds: ["EV-2026-0901-160"],
      },
      {
        id: "hhsc-locality",
        title: "HHSC Texas-Locality Requirements",
        description: "Some 2026 HHSC solicitations require Texas residence or Austin-area proximity, proving agencies can specify worker geography when desired.",
        source: "Vendor-reproduced solicitations",
        evidenceIds: ["EV-2026-0901-161", "EV-2026-0901-162"],
      },
    ],
  },
  {
    name: "Revolving Door",
    description: "Former officials' later representation of technology vendors",
    items: [
      {
        id: "whitley-clients",
        title: "Whitley 2020 Client Roster",
        description: "Texas Ethics Commission records show Wipro (Feb 8, 2020), Accenture and Nextt (June 26, 2020) as prospective clients.",
        source: "Texas Ethics Commission",
        sourceUrl: "https://www.ethics.state.tx.us/search/lobby/",
        evidenceIds: ["EV-2026-0901-114", "EV-2026-0901-124"],
      },
      {
        id: "scott-deloitte",
        title: "Scott / Deloitte Representation",
        description: "Former DIR presiding officer began representing Deloitte in January 2024. Deloitte holds ITSAC DIR-CPO-5691 (Feb 2025).",
        source: "Texas Ethics Commission, DIR Contract Records",
        sourceUrl: "https://dir.texas.gov/contracts/dir-cpo-5691",
        evidenceIds: ["EV-2026-0901-121", "EV-2026-0901-126"],
      },
      {
        id: "strickland-cognizant",
        title: "Strickland / Cognizant Registration",
        description: "Long-time Abbott adviser registered as Cognizant representative in 2024 and 2025.",
        source: "Texas Ethics Commission",
        evidenceIds: ["EV-2026-0901-108", "EV-2026-0901-110"],
      },
    ],
  },
  {
    name: "Andhra Apparatus",
    description: "APNRTS investment machinery and ITServe recruitment",
    items: [
      {
        id: "apnrts-investment",
        title: "APNRTS Investment Portal",
        description: "Official materials describe government introductions, policy/incentive matching, site selection, land support, and 'offshore operations in any segment.'",
        source: "APNRTS Official Site",
        sourceUrl: "https://invest.apnrts.com/",
        evidenceIds: ["EV-2026-0901-132", "EV-2026-0901-133"],
      },
      {
        id: "itserve-recruitment",
        title: "2016-18 ITServe Recruitment Program",
        description: "Contemporaneous reports document 32 IT companies established (~3,090 jobs) by Sept 2017, with office, rent, hiring, and training support.",
        source: "Contemporaneous reporting",
        evidenceIds: ["EV-2026-0901-134"],
      },
      {
        id: "dallas-tech-centre",
        title: "Dallas Technology Centre / APIIC",
        description: "September 2015 APIIC minutes approved DTC for IT-NONSEZ Hill 2. Later sublease to TCS approved with special package.",
        source: "APIIC Official Minutes",
        sourceUrl: "https://apiic.in/wp-content/themes/custom-theme/assets/uploads/plot_of_mettings/head_office/HO-SEP-15.pdf",
        evidenceIds: ["EV-2026-0901-135", "EV-2026-0901-136"],
      },
    ],
  },
  {
    name: "Audit Chronology",
    description: "State Auditor and Sunset findings on contracting governance",
    items: [
      {
        id: "sao-16-020",
        title: "SAO 16-020 (2016)",
        description: "Found DSHS/TWC contractor-management and E-Verify verification weaknesses; incomplete implementation of prior DIR recommendations.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/reports/main/16-020.pdf",
        evidenceIds: ["EV-2026-0901-137"],
      },
      {
        id: "sao-21-018",
        title: "SAO 21-018 (2021)",
        description: "Found High-rated DIR vendor-scoring/documentation/transparency weakness in a procurement.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/Reports/Main/21-018.pdf",
        evidenceIds: ["EV-2026-0901-140"],
      },
      {
        id: "sunset-review",
        title: "DIR Sunset Review (2024-25)",
        description: "Credits contracting improvement but identifies specialized procurement, COOP pricing, and ITSAC/TSS concerns.",
        source: "Sunset Advisory Commission",
        sourceUrl: "https://www.sunset.texas.gov/public/uploads/2025-07/DIR%20Staff%20Report%20with%20Final%20Results_7-8-25.pdf",
        evidenceIds: ["EV-2026-0901-145"],
      },
      {
        id: "sao-26-027",
        title: "SAO 26-027 (June 2026)",
        description: "13 of 25 largest agencies warranted additional contract monitoring, up from 9 of 25 in April 2025.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/SAOReports/ReportNumber?id=26-027",
        evidenceIds: ["EV-2026-0901-150"],
      },
    ],
  },
  {
    name: "Policy Documents",
    description: "Abbott directives and implementing actions",
    items: [
      {
        id: "h1b-directive",
        title: "Abbott H-1B Directive (January 27, 2026)",
        description: "Directs covered state agencies to freeze new H-1B petitions absent TWC permission; requires sponsorship reporting.",
        source: "Governor's Office",
        sourceUrl: "https://gov.texas.gov/uploads/files/press/H-1B_Visa_Program_Letter_1.27.2026_State_Agency_Heads_FINAL_.pdf",
      },
      {
        id: "ga-48-amendments",
        title: "GA-48 Foreign-Adversary ITSAC Amendments",
        description: "Current ITSAC contracts show amendments implementing foreign-adversary country restrictions. India is not targeted.",
        source: "DIR Contract Documents",
        evidenceIds: ["EV-2026-0901-158"],
      },
    ],
  },
];

export default function EvidencePage() {
  const totalItems = evidenceCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Evidence</h1>
        <p className="text-lg text-stone-600 max-w-3xl">
          Every substantive claim in this investigation is supported by verifiable evidence. 
          Below are publication-cleared records organized by category. Evidence IDs reference 
          the master investigative ledger.
        </p>
      </header>

      {/* Quick Stats */}
      <div className="flex gap-4 text-sm">
        <span className="rounded-full bg-stone-100 px-4 py-2">
          {evidenceCategories.length} categories
        </span>
        <span className="rounded-full bg-stone-100 px-4 py-2">
          {totalItems} evidence items
        </span>
      </div>

      {/* Evidence by Category */}
      <div className="space-y-8">
        {evidenceCategories.map((category) => (
          <section key={category.name}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-sm text-stone-600">{category.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg border border-stone-200 bg-white p-5"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 mb-3">{item.description}</p>
                  <div className="pt-3 border-t border-stone-100 space-y-1">
                    <p className="text-xs text-stone-500">
                      <strong>Source:</strong> {item.source}
                    </p>
                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-600 hover:underline"
                      >
                        View source →
                      </a>
                    )}
                    {item.evidenceIds && (
                      <p className="text-xs text-stone-400">
                        IDs: {item.evidenceIds.join(", ")}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Publication Boundary Notice */}
      <section className="rounded-lg bg-amber-50 border border-amber-200 p-6">
        <h2 className="font-semibold text-amber-900 mb-2">
          Publication Boundary Notice
        </h2>
        <p className="text-sm text-amber-800">
          Only publication-cleared evidence appears here. The master investigative 
          ledger, speculative leads, private reporting notes, and unreleased records 
          are maintained separately and are not part of this public repository. 
          Evidence IDs (e.g., EV-2026-0901-129) reference the internal preservation system.
        </p>
      </section>

      {/* Key Source Register */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Key Source Register</h2>
        <div className="grid gap-2 text-sm">
          <a href="https://gov.texas.gov/uploads/files/business/India-Profile.pdf" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            Governor EDT — Texas & India Profile
          </a>
          <a href="https://www.ethics.state.tx.us/search/lobby/" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            Texas Ethics Commission — Lobby Search
          </a>
          <a href="https://dir.texas.gov/contracts" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            DIR Contracts Database
          </a>
          <a href="https://sao.texas.gov/" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            State Auditor's Office Reports
          </a>
          <a href="https://invest.apnrts.com/" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            APNRTS Investment Portal
          </a>
          <a href="https://www.dol.gov/agencies/eta/foreign-labor/performance" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-red-600">
            U.S. DOL Foreign Labor Disclosure Data
          </a>
        </div>
      </section>
    </div>
  );
}
