import { getContent } from "@/lib/content";
import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Iletisim" };

export default function ContactPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">{c.contact.title}</h1>
            <p className="text-center text-fg-muted font-light leading-relaxed">
              {c.contact.intro}
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-fg-muted">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary/60" />
                <span>{c.site.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary/60" />
                <span>{c.site.address}</span>
              </div>
            </div>

            {/* Contact Form */}
            <form className="mx-auto max-w-md space-y-8">
              <div>
                <input
                  type="text"
                  placeholder={c.contact.formName}
                  className="w-full border-b border-primary/20 bg-transparent py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={c.contact.formEmail}
                  className="w-full border-b border-primary/20 bg-transparent py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder={c.contact.formMessage}
                  className="w-full border-b border-primary/20 bg-transparent py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-medium shadow-sm transition-[transform,background-color] duration-300 hover:scale-[1.02] bg-primary text-primary-fg hover:bg-primary-hover"
                >
                  {c.contact.formSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
