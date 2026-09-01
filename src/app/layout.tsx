import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEXANS FIRST* | An Interactive Investigation",
  description: "A six-part investigative series examining public records, contracts, and the gap between promises and measurement.",
};

const navLinks = [
  { href: "/", label: "Investigation" },
  { href: "/evidence", label: "Evidence" },
  { href: "/methodology", label: "Methodology" },
  { href: "/responses", label: "Responses" },
  { href: "/faq", label: "FAQ" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-stone-900 antialiased flex flex-col">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="group flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T1</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold tracking-tight leading-none">
                    TEXANS FIRST<span className="text-red-600">*</span>
                  </h1>
                  <p className="text-xs text-stone-500">Investigation</p>
                </div>
              </Link>
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 mx-auto max-w-6xl w-full px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">
                  TEXANS FIRST<span className="text-red-600">*</span>
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  An investigation into Texas public technology contracting and 
                  the gap between promises and measurement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-500 mb-4">
                  The Series
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/stories/executive-findings" className="text-stone-600 hover:text-red-600">Part 1: The Promise</Link></li>
                  <li><Link href="/stories/the-connector" className="text-stone-600 hover:text-red-600">Part 2: The Connector</Link></li>
                  <li><Link href="/stories/andhra-apparatus" className="text-stone-600 hover:text-red-600">Part 3: The Other End</Link></li>
                  <li><Link href="/stories/revolving-door" className="text-stone-600 hover:text-red-600">Part 4: The Governors</Link></li>
                  <li><Link href="/stories/itserve-alliance" className="text-stone-600 hover:text-red-600">Part 5: The Network</Link></li>
                  <li><Link href="/stories/the-ledger" className="text-stone-600 hover:text-red-600">Part 6: The Ledger</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-500 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/evidence" className="text-stone-600 hover:text-red-600">Evidence</Link></li>
                  <li><Link href="/methodology" className="text-stone-600 hover:text-red-600">Methodology</Link></li>
                  <li><Link href="/responses" className="text-stone-600 hover:text-red-600">Responses</Link></li>
                  <li><Link href="/faq" className="text-stone-600 hover:text-red-600">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-stone-200">
              <p className="text-center text-sm text-stone-500">
                &copy; {new Date().getFullYear()} TEXANS FIRST* Investigation. 
                Publication-cleared evidence only. Not for public distribution without authorization.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
