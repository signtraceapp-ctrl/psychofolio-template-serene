import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "SSS" };

export default function FaqPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-12">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">Sik Sorulan Sorular</h1>
            <div className="divide-y divide-primary/10">
              {c.faq.map((item, i) => (
                <div key={i} className="py-8 space-y-4">
                  <h2 className="font-display text-lg text-fg hover:text-primary transition-colors cursor-pointer">{item.q}</h2>
                  <p className="text-sm italic text-fg-muted font-light leading-relaxed border-l-2 border-primary/20 pl-4">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
