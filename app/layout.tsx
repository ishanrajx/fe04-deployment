import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "AI Study Assistant";

export const metadata: Metadata = {
  title: appName,
  description: "Study smarter with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <nav className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-4">
            <Link href="/" className="font-bold text-blue-400">
              {appName}
            </Link>

            <div className="flex gap-5 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <Link href="/study" className="hover:text-white">
                Study
              </Link>

              <Link href="/history" className="hover:text-white">
                History
              </Link>

              <Link href="/settings" className="hover:text-white">
                Settings
              </Link>

              <Link href="/health" className="hover:text-white">
                Health
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}