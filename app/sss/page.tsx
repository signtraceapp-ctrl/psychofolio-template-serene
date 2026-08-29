import type { Metadata } from "next";
import { content } from "@/lib/merge";
import { Sayfa } from "../_parts";

export const metadata: Metadata = { title: "Sikca sorulan sorular" };

export default function Sss() {
  const { faq } = content;
  return (
    <Sayfa baslik={faq.heading}>
      <dl className="space-y-8">
        {faq.items.map((s, i) => (
          <div key={i}>
            <dt className="font-[family-name:var(--font-display)] text-lg">{s.q}</dt>
            <dd className="mt-2 leading-relaxed text-[var(--color-fg-muted)]">{s.a}</dd>
          </div>
        ))}
      </dl>
    </Sayfa>
  );
}
