import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { content } from "@/lib/merge";

const { practitioner } = content;

export const metadata: Metadata = {
  title: {
    default: `${practitioner.name} - ${practitioner.title}`,
    template: `%s | ${practitioner.name}`,
  },
  description: content.home.intro,
};

const SAYFALAR = [
  { href: "/hakkimda", etiket: "Hakkimda" },
  { href: "/hizmetler", etiket: "Hizmetler" },
  { href: "/yaklasim", etiket: "Yaklasim" },
  { href: "/yazilar", etiket: "Yazilar" },
  { href: "/sss", etiket: "SSS" },
  { href: "/iletisim", etiket: "Iletisim" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col">
        <header className="border-b border-[var(--color-border)]">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <Link href="/" className="font-[family-name:var(--font-display)] text-lg text-[var(--color-fg)]">
              {practitioner.name}
            </Link>
            <nav>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-fg-muted)]">
                {SAYFALAR.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="transition-colors hover:text-[var(--color-primary)]">
                      {s.etiket}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[var(--color-border)]">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-[var(--color-fg-muted)]">
            <p>
              {practitioner.name}
              {practitioner.title ? ` - ${practitioner.title}` : ""}
              {practitioner.city ? ` - ${practitioner.city}` : ""}
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} - Tum haklari saklidir.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
