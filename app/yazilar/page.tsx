import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Yazilar" };

export default function ArticlesPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-12">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">Makaleler</h1>
            <div className="divide-y divide-primary/10">
              {c.articles.map((a, i) => (
                <div key={i} className="py-8 space-y-3 group cursor-pointer hover:translate-x-[5px] transition-transform duration-200">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-primary/60 font-semibold">{a.category}</span>
                    <span className="text-[10px] text-fg-muted">{a.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-light text-fg group-hover:text-primary transition-colors">{a.title}</h2>
                  <p className="text-xs text-fg-muted">{a.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
