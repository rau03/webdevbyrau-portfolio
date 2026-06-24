import Image from "next/image";
import Link from "next/link";
import type { CompactProject } from "@/lib/content";

export default function ProjectCardCompact({
  project,
}: {
  project: CompactProject;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-card">
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-tertiary">
          {project.label}
        </span>
        <h3 className="mt-3 font-display text-2xl uppercase leading-[1.02] text-text-primary sm:text-3xl">
          {project.headline}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        {project.bullets && project.bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-[15px] leading-relaxed text-text-secondary"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg border border-border">
          <Image
            src={project.image}
            alt={`${project.headline} — product screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-6 sm:px-8">
        <ul className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-6">
          {project.links.live && (
            <CardLink href={project.links.live} label="Live" />
          )}
          {project.links.github && (
            <CardLink href={project.links.github} label="GitHub" />
          )}
        </div>
      </div>
    </article>
  );
}

function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:text-text-secondary"
    >
      {label}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        ↗
      </span>
    </Link>
  );
}
