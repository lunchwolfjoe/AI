import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEXANS FIRST* | An Investigation",
  description: "A six-part investigative series examining Texas public technology contracting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] font-sans-ui flex flex-col">
        {/* Minimal header */}
        <header className="border-b border-[#d1d5db] bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="group">
                <span className="text-sm font-bold tracking-tight">
                  TEXANS FIRST<span className="text-[#8b0000]">*</span>
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/" className="text-[#6b7280] hover:text-[#1a1a1a] transition-colors">
                  Series
                </Link>
                <Link href="/evidence" className="text-[#6b7280] hover:text-[#1a1a1a] transition-colors">
                  Evidence
                </Link>
                <Link href="/methodology" className="text-[#6b7280] hover:text-[#1a1a1a] transition-colors">
                  Methodology
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* Editorial footer */}
        <footer className="border-t border-[#d1d5db] bg-white mt-20">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-bold tracking-tight mb-3">
                  TEXANS FIRST<span className="text-[#8b0000]">*</span>
                </p>
                <p className="text-sm text-[#6b7280] leading-relaxed max-w-sm">
                  An investigation into Texas public technology contracting, 
                  the gap between political promises and public accounting, 
                  and the networks that connect them.
                </p>
                <p className="text-sm text-[#6b7280] mt-4">
                  By <a href="https://x.com/plumbnick" className="text-[#8b0000] hover:underline" target="_blank" rel="noopener noreferrer">Nick Plumb</a>
                </p>
              </div>
              <div className="md:text-right">
                <p className="label-caps text-[#6b7280] mb-3">The Series</p>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/stories/executive-findings" className="text-[#374151] hover:text-[#8b0000]">I. The Promise</Link></li>
                  <li><Link href="/stories/the-connector" className="text-[#374151] hover:text-[#8b0000]">II. The Connector</Link></li>
                  <li><Link href="/stories/andhra-apparatus" className="text-[#374151] hover:text-[#8b0000]">III. The Other End</Link></li>
                  <li><Link href="/stories/revolving-door" className="text-[#374151] hover:text-[#8b0000]">IV. The Governors</Link></li>
                  <li><Link href="/stories/itserve-alliance" className="text-[#374151] hover:text-[#8b0000]">V. The Network</Link></li>
                  <li><Link href="/stories/the-ledger" className="text-[#374151] hover:text-[#8b0000]">VI. The Ledger</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-[#e5e5e5]">
              <p className="text-xs text-[#9ca3af]">
                Pre-publication draft. Not for public distribution.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
