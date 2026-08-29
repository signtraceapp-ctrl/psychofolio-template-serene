import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/merge";
import { Sayfa } from "../_parts";

export const metadata: Metadata = { title: "Yazilar" };

export default function Yazilar() {
  const { articles } = content;
  return (
    <Sayfa baslik={articles.heading} giris={articles.intro}>
      {articles.items.length === 0 ? (
        <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 text-[var(--color-fg-muted)]">
          Henuz yayinlanmis bir yazi yok.
        </p>
      ) : (
        <ul className="space-y-8">
          {articles.items.map((y, i) => (
            <li key={i}>
              <h2 className="font-[family-name:var(--font-display)] text-xl">
                {y.url ? (
                  <Link href={y.url} className="transition-colors hover:text-[var(--color-primary)]">
                    {y.title}
                  </Link>
                ) : (
                  y.title
                )}
              </h2>
              {y.description && (
                <p className="mt-2 leading-relaxed text-[var(--color-fg-muted)]">{y.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Sayfa>
  );
}
