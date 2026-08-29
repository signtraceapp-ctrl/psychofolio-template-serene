import type { Metadata } from "next";
import { content } from "@/lib/merge";
import { Sayfa, Kartlar } from "../_parts";

export const metadata: Metadata = { title: "Yaklasim" };

export default function Yaklasim() {
  const { approach } = content;
  return (
    <Sayfa baslik={approach.heading} giris={approach.intro}>
      <Kartlar maddeler={approach.items} />
    </Sayfa>
  );
}
