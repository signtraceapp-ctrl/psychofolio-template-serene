"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Mail, MapPin } from "lucide-react";
import type { SiteContent } from "@/lib/content";

export function ContactClient({ content: c }: { content: SiteContent }) {
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
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef}>
      <section className="py-28 bg-bg text-fg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-16">
            <div data-reveal className="text-center space-y-4">
              <p className="text-[10px] tracking-[0.3em] text-primary uppercase font-bold">Iletisim</p>
              <h1 className="font-display text-4xl font-light text-fg tracking-tight">{c.contact.title}</h1>
              <div className="w-12 h-px bg-primary/30 mx-auto mt-6" />
            </div>

            <p data-reveal className="text-center text-sm text-fg-muted font-light">
              {c.contact.intro}
            </p>

            <div data-reveal className="space-y-10">
              <div className="flex flex-wrap justify-center gap-8 text-xs text-fg-muted font-semibold tracking-wider uppercase">
                <span className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary/40" /> {c.site.email}</span>
                <span className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-primary/40" /> {c.site.address}</span>
              </div>

              <div className="space-y-8 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder={c.contact.formName}
                  disabled
                  className="w-full bg-transparent border-b border-primary/20 py-3.5 text-sm focus:outline-none focus:border-primary font-light placeholder:text-fg-muted/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  placeholder={c.contact.formEmail}
                  disabled
                  className="w-full bg-transparent border-b border-primary/20 py-3.5 text-sm focus:outline-none focus:border-primary font-light placeholder:text-fg-muted/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <textarea
                  placeholder={c.contact.formMessage}
                  rows={3}
                  disabled
                  className="w-full bg-transparent border-b border-primary/20 py-3.5 text-sm focus:outline-none focus:border-primary font-light resize-none placeholder:text-fg-muted/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="text-center pt-6">
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center rounded-full px-14 py-3 text-xs font-semibold tracking-widest uppercase shadow-sm bg-primary text-primary-fg opacity-50 cursor-not-allowed"
                  >
                    {c.contact.formSubmit}
                  </button>
                </div>
                <p className="text-center text-xs text-fg-muted/60 italic">
                  Ornek sitede form calismaz. Satin aldiginizda kendi e-posta adresinize baglanir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
