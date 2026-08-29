import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hakkimda" };

export default function AboutPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">{c.about.title}</h1>
            <p className="text-center text-lg italic text-fg-muted font-light leading-relaxed">
              {c.about.intro}
            </p>

            {/* Timeline */}
            <div className="relative space-y-12 pl-8 border-l border-primary/20">
              {c.about.credentials.map((cred, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-bg" />
                  <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">{cred.year}</p>
                  <h3 className="mt-2 font-display text-lg text-fg">{cred.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted font-light">{cred.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
