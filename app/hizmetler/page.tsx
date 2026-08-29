import type { Metadata } from "next";
import { content } from "@/lib/merge";
import { Sayfa, Kartlar } from "../_parts";

export const metadata: Metadata = { title: "Hizmetler" };

export default function Hizmetler() {
  const { services } = content;
  return (
    <Sayfa baslik={services.heading} giris={services.intro}>
      <Kartlar maddeler={services.items} />
    </Sayfa>
  );
}
