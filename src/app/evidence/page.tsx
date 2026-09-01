import Link from "next/link";

export const metadata = {
  title: "Evidence | TEXANS FIRST*",
  description: "Primary sources supporting the investigation.",
};

interface EvidenceCategory {
  name: string;
  icon: string;
  description: string;
  items: EvidenceItem[];
}

interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceUrl?: string;
  type: "primary" | "official" | "filing";
}

const evidenceCategories: EvidenceCategory[] = [
  {
    name: "Bilateral Investment Data",
    icon: "📊",
    description: "Official Texas-India economic relationship figures",
    items: [
      {
        id: "fdi-profile",
        title: "Governor's Texas & India Profile",
        description: "74 Indian-company projects in Texas ($2.7B, 8,650+ jobs) vs 175 Texas-company projects in India ($7.6B, 59,300+ jobs). 2015–2024.",
        source: "Governor's Economic Development & Tourism Office, July 2025",
        sourceUrl: "https://gov.texas.gov/uploads/files/business/India-Profile.pdf",
        type: "official",
      },
      {
        id: "mission-2024",
        title: "2024 India Mission Materials",
        description: "Earlier figures cited 59 projects, $1.4B, 10,300+ Texas jobs — different methodology than the July 2025 profile.",
        source: "Governor's Office",
        type: "official",
      },
    ],
  },
  {
    name: "Contracting Templates",
    icon: "📋",
    description: "What Texas requires — and doesn't — in technology staffing",
    items: [
      {
        id: "itsac-templates",
        title: "Current ITSAC SOW Templates",
        description: "Templates ask about remote work but contain no dedicated field for worker citizenship, visa status, or offshore delivery.",
        source: "DIR Contract Documents",
        sourceUrl: "https://dir.texas.gov/it-solutions-and-services/buying-through-dir/statement-work-sow",
        type: "primary",
      },
      {
        id: "hhsc-locality",
        title: "HHSC Texas-Locality Requirements",
        description: "Some 2026 solicitations require Austin-area or Texas residence — proving agencies CAN specify geography when they want to.",
        source: "Vendor-reproduced HHSC solicitations",
        type: "primary",
      },
      {
        id: "ga-48",
        title: "GA-48 Foreign-Adversary Amendments",
        description: "Texas added contract amendments for foreign-adversary restrictions. No equivalent amendment for worker-location reporting after the Texans-first directive.",
        source: "DIR Contract Pages",
        type: "official",
      },
    ],
  },
  {
    name: "Revolving Door Filings",
    icon: "🚪",
    description: "Ethics disclosures showing post-government client relationships",
    items: [
      {
        id: "whitley-2020",
        title: "David Whitley Lobby Registrations",
        description: "Former Abbott deputy chief of staff registered Wipro (Feb 2020), Accenture and Nextt (June 2020) as prospective clients.",
        source: "Texas Ethics Commission",
        sourceUrl: "https://www.ethics.state.tx.us/search/lobby/",
        type: "filing",
      },
      {
        id: "scott-deloitte",
        title: "John B. Scott / Deloitte",
        description: "Former DIR presiding officer began representing Deloitte in January 2024. Deloitte holds ITSAC DIR-CPO-5691.",
        source: "Texas Ethics Commission, DIR Contract Records",
        sourceUrl: "https://dir.texas.gov/contracts/dir-cpo-5691",
        type: "filing",
      },
      {
        id: "strickland-cognizant",
        title: "Jerry Strickland / Cognizant",
        description: "Long-time Abbott adviser registered as Cognizant representative in 2024 and 2025.",
        source: "Texas Ethics Commission",
        type: "filing",
      },
    ],
  },
  {
    name: "Andhra Infrastructure",
    icon: "🏗️",
    description: "Official records of offshore investment machinery",
    items: [
      {
        id: "apnrts-portal",
        title: "APNRTS Investment Portal",
        description: "Official materials describe facilitating NRT investors for 'offshore operations in any segment.'",
        source: "APNRTS Official Site",
        sourceUrl: "https://invest.apnrts.com/",
        type: "official",
      },
      {
        id: "apiic-dtc",
        title: "Dallas Technology Centre Land Approval",
        description: "APIIC September 2015 minutes approved DTC for plot at IT-NONSEZ Hill 2 in Visakhapatnam.",
        source: "APIIC Official Minutes",
        sourceUrl: "https://apiic.in/wp-content/themes/custom-theme/assets/uploads/plot_of_mettings/head_office/HO-SEP-15.pdf",
        type: "primary",
      },
      {
        id: "itserve-recruitment",
        title: "2016-18 ITServe Recruitment Reports",
        description: "Contemporaneous reporting: 32 IT companies (~3,090 jobs) by Sept 2017, 54 firms facilitated by Jan 2018.",
        source: "Contemporaneous news reporting",
        type: "official",
      },
    ],
  },
  {
    name: "Audit History",
    icon: "📑",
    description: "State oversight findings on contracting",
    items: [
      {
        id: "sao-16-020",
        title: "SAO 16-020 (2016)",
        description: "Found contractor-management and E-Verify verification weaknesses; incomplete implementation of prior DIR recommendations.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/reports/main/16-020.pdf",
        type: "primary",
      },
      {
        id: "sao-21-018",
        title: "SAO 21-018 (2021)",
        description: "High-rated DIR vendor-scoring and documentation/transparency weakness.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/Reports/Main/21-018.pdf",
        type: "primary",
      },
      {
        id: "sunset-2025",
        title: "DIR Sunset Review (2024-25)",
        description: "Credits improvement but identifies procurement, COOP pricing, and ITSAC concerns.",
        source: "Sunset Advisory Commission",
        sourceUrl: "https://www.sunset.texas.gov/public/uploads/2025-07/DIR%20Staff%20Report%20with%20Final%20Results_7-8-25.pdf",
        type: "primary",
      },
      {
        id: "sao-26-027",
        title: "SAO 26-027 (June 2026)",
        description: "13 of 25 largest agencies warranted additional contract monitoring, up from 9 of 25 in April 2025.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/SAOReports/ReportNumber?id=26-027",
        type: "primary",
      },
    ],
  },
  {
    name: "Policy Documents",
    icon: "📜",
    description: "The directives and their limitations",
    items: [
      {
        id: "h1b-directive",
        title: "Abbott H-1B Directive (January 27, 2026)",
        description: "Directs covered state agencies to freeze new H-1B petitions absent TWC permission. Does not address private contractor workers.",
        source: "Governor's Office",
        sourceUrl: "https://gov.texas.gov/uploads/files/press/H-1B_Visa_Program_Letter_1.27.2026_State_Agency_Heads_FINAL_.pdf",
        type: "official",
      },
    ],
  },
];

const typeColors = {
  primary: "bg-green-100 text-green-800",
  official: "bg-blue-100 text-blue-800",
  filing: "bg-purple-100 text-purple-800",
};

const typeLabels = {
  primary: "Primary Record",
  official: "Official Document",
  filing: "Ethics Filing",
};

export default function EvidencePage() {
  const totalItems = evidenceCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">Primary Sources</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-display">
          The Evidence
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl">
          Every claim in this investigation links to a verifiable source. Government records. 
          Official filings. The state's own data. Click any source link to verify it yourself.
        </p>
        
        <div className="flex gap-4 mt-8">
          <div className="bg-stone-100 rounded-xl px-5 py-3">
            <span className="text-3xl font-black text-stone-900">{evidenceCategories.length}</span>
            <span className="text-stone-500 ml-2">categories</span>
          </div>
          <div className="bg-stone-100 rounded-xl px-5 py-3">
            <span className="text-3xl font-black text-stone-900">{totalItems}</span>
            <span className="text-stone-500 ml-2">sources</span>
          </div>
        </div>
      </header>

      {/* Evidence Categories */}
      <div className="space-y-12">
        {evidenceCategories.map((category) => (
          <section key={category.name}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-stone-500">{category.description}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {category.items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-stone-500">
                      <span className="font-medium">Source:</span> {item.source}
                    </p>
                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        View source
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Key Sources */}
      <section className="mt-16 bg-stone-900 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-6">Quick Links to Key Sources</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Governor's Texas & India Profile", url: "https://gov.texas.gov/uploads/files/business/India-Profile.pdf" },
            { label: "Texas Ethics Commission Lobby Search", url: "https://www.ethics.state.tx.us/search/lobby/" },
            { label: "DIR Contracts Database", url: "https://dir.texas.gov/contracts" },
            { label: "State Auditor's Office Reports", url: "https://sao.texas.gov/" },
            { label: "APNRTS Investment Portal", url: "https://invest.apnrts.com/" },
            { label: "U.S. DOL Foreign Labor Data", url: "https://www.dol.gov/agencies/eta/foreign-labor/performance" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
