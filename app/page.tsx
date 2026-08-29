import { content } from "@/lib/merge";
import { RandevuButonu } from "./_parts";

export default function AnaSayfa() {
  const { home, practitioner } = content;
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {practitioner.title}
      </p>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
        {home.headline}
        {home.highlight && (
          <>
            <br />
            <span className="italic text-[var(--color-primary)]">{home.highlight}</span>
          </>
        )}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
        {home.intro}
      </p>
      <div className="mt-10">
        <RandevuButonu />
      </div>
    </section>
  );
}
