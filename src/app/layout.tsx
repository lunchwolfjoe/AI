import type { Metadata } from "next";
import { cookies } from "next/headers";
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
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "X-Robots-Tag": "noindex, nofollow",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("preview_auth")?.value === "authenticated";

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] font-sans-ui flex flex-col">
        {isAuthenticated ? (
          <>
            {/* Header - only shown when authenticated */}
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
                    <Link href="/responses" className="text-[#6b7280] hover:text-[#1a1a1a] transition-colors">
                      Responses
                    </Link>
                  </nav>
                </div>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            {/* Footer - only shown when authenticated */}
            <footer className="border-t border-[#d1d5db] bg-white mt-20">
              <div className="mx-auto max-w-4xl px-6 py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm font-bold tracking-tight">
                    TEXANS FIRST<span className="text-[#8b0000]">*</span>
                  </p>
                  <p className="text-xs text-[#9ca3af]">
                    Pre-publication draft. Not for public distribution.
                  </p>
                </div>
              </div>
            </footer>
          </>
        ) : (
          <main className="flex-1">
            {children}
          </main>
        )}
      </body>
    </html>
  );
}
