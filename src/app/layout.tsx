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
  description: "A six-part investigative series examining public records and evidence.",
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
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="group">
                <h1 className="text-2xl font-bold tracking-tight">
                  TEXANS FIRST<span className="text-red-600">*</span>
                </h1>
                <p className="text-sm text-stone-500 group-hover:text-stone-700">
                  An Interactive Investigation
                </p>
              </Link>
              <nav className="flex flex-wrap gap-1">
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

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="border-t border-stone-200 bg-white mt-auto">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <p className="text-center text-sm text-stone-500">
              &copy; {new Date().getFullYear()} TEXANS FIRST* Investigation. 
              All publication-cleared evidence only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
