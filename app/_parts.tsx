import Link from "next/link";
import { content } from "@/lib/merge";

export function Sayfa({
  baslik,
  giris,
  children,
}: {
  baslik: string;
  giris?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
        {baslik}
      </h1>
      {giris && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)]">{giris}</p>
      )}
      {children && <div className="mt-12">{children}</div>}
    </div>
  );
}

export function RandevuButonu({ etiket }: { etiket?: string }) {
  const { practitioner, home } = content;
  const hedef = practitioner.bookingUrl || (practitioner.email ? `mailto:${practitioner.email}` : "/iletisim");
  return (
    <Link
      href={hedef}
      className="inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 active:scale-[0.97] transition-[opacity,transform] duration-150"
    >
      {etiket ?? home.ctaLabel}
    </Link>
  );
}

export function Kartlar({ maddeler }: { maddeler: { title?: string; description?: string; meta?: string }[] }) {
  if (maddeler.length === 0) return null;
  return (
    <ul className="space-y-6">
      {maddeler.map((m, i) => (
        <li key={i} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200">
          {m.title && (
            <h2 className="font-[family-name:var(--font-display)] text-xl font-normal">{m.title}</h2>
          )}
          {m.description && (
            <p className="mt-2 leading-relaxed text-[var(--color-fg-muted)]">{m.description}</p>
          )}
          {m.meta && <p className="mt-3 text-sm text-[var(--color-primary)]">{m.meta}</p>}
        </li>
      ))}
    </ul>
  );
}
