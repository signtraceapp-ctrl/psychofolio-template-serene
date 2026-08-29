import type { Metadata } from "next";
import { content } from "@/lib/merge";
import { Sayfa } from "../_parts";

export const metadata: Metadata = { title: "Hakkimda" };

export default function Hakkimda() {
  const { about } = content;
  return (
    <Sayfa baslik={about.heading}>
      <div className="space-y-5 text-lg leading-relaxed text-[var(--color-fg-muted)]">
        {about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Sayfa>
  );
}
