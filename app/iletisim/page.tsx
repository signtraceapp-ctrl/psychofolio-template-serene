import type { Metadata } from "next";
import { content } from "@/lib/merge";
import { Sayfa, RandevuButonu } from "../_parts";

export const metadata: Metadata = { title: "Iletisim" };

export default function Iletisim() {
  const { contact, practitioner } = content;
  const kanallar = [
    practitioner.email && { etiket: "E-posta", deger: practitioner.email, href: `mailto:${practitioner.email}` },
    practitioner.phone && { etiket: "Telefon", deger: practitioner.phone, href: `tel:${practitioner.phone.replace(/\s/g, "")}` },
    contact.address && { etiket: "Adres", deger: contact.address },
    practitioner.city && !contact.address && { etiket: "Konum", deger: practitioner.city },
  ].filter(Boolean) as { etiket: string; deger: string; href?: string }[];

  return (
    <Sayfa baslik={contact.heading} giris={contact.intro}>
      {kanallar.length > 0 && (
        <dl className="space-y-4">
          {kanallar.map((k) => (
            <div key={k.etiket} className="flex flex-wrap gap-x-4">
              <dt className="w-24 shrink-0 text-sm text-[var(--color-fg-muted)]">{k.etiket}</dt>
              <dd>
                {k.href ? (
                  <a href={k.href} className="text-[var(--color-primary)] hover:underline">
                    {k.deger}
                  </a>
                ) : (
                  k.deger
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div className="mt-10">
        <RandevuButonu etiket="Randevu talebi" />
      </div>
    </Sayfa>
  );
}
