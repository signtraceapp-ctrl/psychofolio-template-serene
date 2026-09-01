"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ArticlesClient({ content: c }: { content: SiteContent }) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from("[data-article]", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-article-list]",
          start: "top 80%",
          once: true,
        },
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef}>
      <section className="py-28 bg-bg text-fg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-16">
            <div data-reveal className="text-center space-y-4">
              <p className="text-[10px] tracking-[0.3em] text-primary uppercase font-bold">Yazilar</p>
              <h1 className="font-display text-4xl font-light text-fg tracking-tight">Makaleler</h1>
              <div className="w-12 h-px bg-primary/30 mx-auto mt-6" />
            </div>

            <div data-article-list className="divide-y divide-primary/10">
              {c.articles.map((a, i) => (
                <div
                  key={i}
                  data-article
                  className="py-10 first:pt-0 space-y-3 group cursor-pointer hover:translate-x-[5px] transition-transform duration-200"
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary/60 font-semibold">{a.category} · {a.readTime} okuma</p>
                  <h2 className="font-display text-2xl font-light text-fg group-hover:text-primary transition-colors leading-snug">{a.title}</h2>
                  {a.date && <p className="text-xs text-fg-muted/40 font-light">{a.date}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
