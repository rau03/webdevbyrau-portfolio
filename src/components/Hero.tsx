import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  const lastLineIndex = hero.headline.length - 1;

  return (
    <section
      className="relative flex min-h-[36rem] items-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(var(--color-border) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-20 text-center sm:px-10">
        <p className="text-2xl font-bold uppercase tracking-[0.05em] text-text-primary sm:text-3xl">
          {hero.name}
        </p>
        <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.2em] text-text-secondary">
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 font-display text-[40px] uppercase leading-[0.98] text-text-primary sm:text-6xl lg:text-7xl">
          {hero.headline.map((line, i) => {
            if (i !== lastLineIndex) {
              return (
                <span key={line} className="block">
                  {line}
                </span>
              );
            }

            const words = line.split(" ");
            const accentWord = words.pop();
            const lead = words.join(" ");

            return (
              <span key={line} className="block">
                {lead ? `${lead} ` : ""}
                <span
                  style={{
                    WebkitTextStroke: "1.5px var(--color-accent)",
                    color: "var(--color-bg)",
                  }}
                >
                  {accentWord}
                </span>
              </span>
            );
          })}
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {hero.subhead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={hero.ctas.primary.href}
            className="inline-flex items-center justify-center rounded-full bg-text-primary px-7 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-bg transition-opacity hover:opacity-90"
          >
            {hero.ctas.primary.label}
          </Link>
          <Link
            href={hero.ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-text-primary"
          >
            {hero.ctas.secondary.label}
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border pt-6">
          {hero.techTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
