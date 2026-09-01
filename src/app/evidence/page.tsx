import Link from "next/link";

export const metadata = {
  title: "Evidence | TEXANS FIRST*",
  description: "Primary sources supporting the investigation.",
};

interface EvidenceItem {
  title: string;
  description: string;
  source: string;
  sourceUrl?: string;
}

interface EvidenceSection {
  name: string;
  items: EvidenceItem[];
}

const evidenceSections: EvidenceSection[] = [
  {
    name: "Bilateral Investment Data",
    items: [
      {
        title: "Governor's Texas & India Profile (July 2025)",
        description: "74 Indian-company projects in Texas ($2.7B, 8,650+ jobs) versus 175 Texas-company projects in India ($7.6B, 59,300+ jobs), 2015–2024.",
        source: "Governor's Economic Development & Tourism Office",
        sourceUrl: "https://gov.texas.gov/uploads/files/business/India-Profile.pdf",
      },
      {
        title: "2024 India Mission Materials",
        description: "Earlier figures cited 59 projects, $1.4 billion, 10,300+ Texas jobs — different methodology than the July 2025 profile.",
        source: "Governor's Office",
        sourceUrl: "https://gov.texas.gov/news/post/governor-abbott-bolsters-enduring-economic-cultural-bond-with-india",
      },
    ],
  },
  {
    name: "Contracting & Procurement",
    items: [
      {
        title: "ITSAC Statement-of-Work Templates",
        description: "Current templates ask about remote work but contain no dedicated field for worker citizenship, visa status, or offshore delivery.",
        source: "DIR Contract Documents",
        sourceUrl: "https://dir.texas.gov/it-solutions-and-services/buying-through-dir/statement-work-sow",
      },
      {
        title: "HHSC Texas-Locality Requirements",
        description: "Some 2026 solicitations require Austin-area or Texas residence — proving agencies can specify geography when they choose.",
        source: "HHSC Procurement",
        sourceUrl: "https://www.hhs.texas.gov/business/contracting-hhs",
      },
      {
        title: "GA-48 Foreign-Adversary Amendments",
        description: "Texas added contract amendments for foreign-adversary restrictions. No equivalent amendment for worker-location reporting after the Texans-first directive.",
        source: "DIR Contract Pages",
        sourceUrl: "https://dir.texas.gov/contracts",
      },
    ],
  },
  {
    name: "Revolving Door Filings",
    items: [
      {
        title: "David Whitley Lobby Registrations (2020)",
        description: "Former Abbott deputy chief of staff registered Wipro (February), Accenture and Nextt (June) as prospective clients.",
        source: "Texas Ethics Commission",
        sourceUrl: "https://www.ethics.state.tx.us/search/lobby/",
      },
      {
        title: "John B. Scott / Deloitte (2024–present)",
        description: "Former DIR presiding officer began representing Deloitte in January 2024. Deloitte holds ITSAC DIR-CPO-5691.",
        source: "Texas Ethics Commission; DIR",
        sourceUrl: "https://dir.texas.gov/contracts/dir-cpo-5691",
      },
      {
        title: "Jerry Strickland / Cognizant (2024–25)",
        description: "Long-time Abbott adviser registered as Cognizant representative.",
        source: "Texas Ethics Commission",
        sourceUrl: "https://www.ethics.state.tx.us/search/lobby/",
      },
    ],
  },
  {
    name: "Andhra Pradesh Records",
    items: [
      {
        title: "APNRTS Investment Portal",
        description: "Official materials describe facilitating NRT investors for 'offshore operations in any segment.'",
        source: "APNRTS",
        sourceUrl: "https://invest.apnrts.com/",
      },
      {
        title: "Dallas Technology Centre Land Approval",
        description: "APIIC September 2015 minutes approved DTC for plot at IT-NONSEZ Hill 2 in Visakhapatnam.",
        source: "APIIC Official Minutes",
        sourceUrl: "https://apiic.in/wp-content/themes/custom-theme/assets/uploads/plot_of_mettings/head_office/HO-SEP-15.pdf",
      },
      {
        title: "ITServe Recruitment Reports (2016–18)",
        description: "Contemporaneous reporting: 32 IT companies (~3,090 jobs) by September 2017; 54 firms facilitated by January 2018.",
        source: "Contemporaneous news reporting",
        sourceUrl: "https://www.greatandhra.com/articles/special-articles/dr-ravi-vemuru-address-itserve-conference-78240",
      },
    ],
  },
  {
    name: "Audit History",
    items: [
      {
        title: "SAO 16-020 (March 2016)",
        description: "Found contractor-management and E-Verify verification weaknesses; incomplete implementation of prior DIR recommendations.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/reports/main/16-020.pdf",
      },
      {
        title: "SAO 21-018 (2021)",
        description: "High-rated DIR vendor-scoring and documentation/transparency weakness.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/Reports/Main/21-018.pdf",
      },
      {
        title: "DIR Sunset Review (2024–25)",
        description: "Credits improvement but identifies procurement, COOP pricing, and ITSAC concerns.",
        source: "Sunset Advisory Commission",
        sourceUrl: "https://www.sunset.texas.gov/public/uploads/2025-07/DIR%20Staff%20Report%20with%20Final%20Results_7-8-25.pdf",
      },
      {
        title: "SAO 26-027 (June 2026)",
        description: "13 of 25 largest agencies warranted additional contract monitoring, up from 9 of 25 in April 2025.",
        source: "State Auditor's Office",
        sourceUrl: "https://sao.texas.gov/SAOReports/ReportNumber?id=26-027",
      },
    ],
  },
  {
    name: "Policy Documents",
    items: [
      {
        title: "Abbott H-1B Directive (January 27, 2026)",
        description: "Directs covered state agencies to freeze new H-1B petitions absent TWC permission. Does not address private contractor workers.",
        source: "Governor's Office",
        sourceUrl: "https://gov.texas.gov/uploads/files/press/H-1B_Visa_Program_Letter_1.27.2026_State_Agency_Heads_FINAL_.pdf",
      },
    ],
  },
];

export default function EvidencePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <p className="label-caps text-[#8b0000] mb-4">Primary Sources</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-6">Evidence</h1>
          <p className="font-serif-body text-xl text-[#374151] leading-relaxed">
            Every claim in this investigation links to a verifiable source. 
            Government records. Official filings. The state's own data.
          </p>
        </header>

        {/* Evidence Sections */}
        <div className="space-y-16">
          {evidenceSections.map((section) => (
            <section key={section.name}>
              <h2 className="font-display text-xl mb-6 pb-3 border-b-2 border-[#1a1a1a]">
                {section.name}
              </h2>
              
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <article key={i}>
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-serif-body text-[#374151] leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-sm text-[#6b7280]">
                      {item.source}
                      {item.sourceUrl && (
                        <>
                          {" · "}
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b0000] hover:underline"
                          >
                            View source ↗
                          </a>
                        </>
                      )}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Key Links */}
        <section className="mt-20 pt-10 border-t border-[#e5e5e5]">
          <h2 className="font-display text-xl mb-6">Primary Source Databases</h2>
          <ul className="space-y-3 font-serif-body">
            {[
              { label: "Governor's Texas & India Profile", url: "https://gov.texas.gov/uploads/files/business/India-Profile.pdf" },
              { label: "Texas Ethics Commission Lobby Search", url: "https://www.ethics.state.tx.us/search/lobby/" },
              { label: "DIR Contracts Database", url: "https://dir.texas.gov/contracts" },
              { label: "State Auditor's Office Reports", url: "https://sao.texas.gov/" },
              { label: "APNRTS Investment Portal", url: "https://invest.apnrts.com/" },
              { label: "U.S. DOL Foreign Labor Certification Data", url: "https://www.dol.gov/agencies/eta/foreign-labor/performance" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#374151] hover:text-[#8b0000] transition-colors"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <nav className="mt-16 pt-10 border-t border-[#e5e5e5] flex justify-between">
          <Link href="/methodology" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            ← Methodology
          </Link>
          <Link href="/responses" className="text-[#6b7280] hover:text-[#8b0000] transition-colors">
            Responses →
          </Link>
        </nav>
      </div>
    </div>
  );
}
