import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hizmetler" };

export default function ServicesPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-12">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">Terapi Hizmetleri</h1>
            <div className="divide-y divide-primary/10">
              {c.services.map((s, i) => (
                <div key={i} className="py-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl text-fg">{s.title}</h2>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary/60 bg-primary/5 rounded-full px-3 py-1 font-medium">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-sm text-fg-muted font-light leading-relaxed">{s.desc}</p>
                  <p className="text-xs italic text-fg-muted/70">{s.method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
