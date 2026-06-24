import Image from "next/image";
import Link from "next/link";
import { mountainPathwayStats, type FeaturedProject } from "@/lib/content";

export default function ProjectCardFeatured({
  project,
}: {
  project: FeaturedProject;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-bg-card">
      <div className="relative aspect-[19/10] w-full border-b border-border">
        <Image
          src={project.image}
          alt={`${project.headline} — app screenshot`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-foreground">
          {mountainPathwayStats.downloads}+ Downloads
        </span>
      </div>

      <div className="flex flex-col p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <Image
              src={project.appIcon}
              alt={`${project.headline} app icon`}
              width={56}
              height={56}
              className="rounded-[14px] border border-border"
            />
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-tertiary">
                {project.label}
              </span>
              <h3 className="font-display text-2xl uppercase leading-[1.02] text-text-primary sm:text-3xl">
                {project.headline}
              </h3>
            </div>
          </div>

          <p className="mt-5 flex items-center gap-2 text-[13px] text-text-secondary">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-text-secondary"
            />
            {project.status}
          </p>

          <ul className="mt-6 space-y-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <details className="group mt-6 border-t border-border pt-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:text-text-secondary">
              <span
                aria-hidden="true"
                className="transition-transform group-open:rotate-90"
              >
                ›
              </span>
              Read the full build log
            </summary>
            <ul className="mt-4 space-y-3">
              {project.buildLog.map((entry, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary"
                  />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
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
              {project.links.appStore && (
                <CardLink href={project.links.appStore} label="App Store" />
              )}
            </div>
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
