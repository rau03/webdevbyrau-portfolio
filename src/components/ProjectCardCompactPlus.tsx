"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CompactPlusProject } from "@/lib/content";

export default function ProjectCardCompactPlus({
  project,
}: {
  project: CompactPlusProject;
}) {
  const [pairIndex, setPairIndex] = useState(0);
  const [view, setView] = useState<"before" | "after">("before");

  const pair = project.beforeAfterPairs[pairIndex];
  const src = view === "before" ? pair.before : pair.after;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-card">
      <div className="p-6 sm:p-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-tertiary">
          {project.label}
        </span>
        <h3 className="mt-2 font-display text-2xl uppercase leading-[1.02] text-text-primary sm:text-3xl">
          {project.headline}
        </h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {project.summary}
        </p>
      </div>

      <div className="border-t border-border p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 sm:gap-x-3">
          {project.beforeAfterPairs.map((p, i) => {
            const active = i === pairIndex;
            return (
              <button
                key={p.label}
                type="button"
                onClick={() => setPairIndex(i)}
                aria-pressed={active}
                className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.04em] transition-colors sm:px-3 sm:text-[11px] sm:tracking-[0.08em] ${
                  active
                    ? "border-text-primary text-text-primary"
                    : "border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {p.label}
              </button>
            );
          })}

          <div
            className="inline-flex shrink-0 rounded-full border border-border p-0.5 sm:ml-auto"
            role="group"
            aria-label="Toggle before or after redesign"
          >
            {(["before", "after"] as const).map((option) => {
              const active = view === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setView(option)}
                  aria-pressed={active}
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors sm:px-3.5 sm:text-[11px] sm:tracking-[0.1em] ${
                    active
                      ? "bg-text-primary text-bg"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-4 h-56 w-full overflow-hidden rounded-lg border border-border bg-bg">
          <Image
            key={src}
            src={src}
            alt={`PMJ Printing — ${pair.label} page, ${view} redesign`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>

      <figure className="border-t border-border p-6 sm:p-8">
        <blockquote className="text-sm italic leading-relaxed text-text-secondary">
          “{project.testimonial.quote}”
        </blockquote>
        <figcaption className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-text-tertiary">
          — {project.testimonial.attribution}
        </figcaption>
      </figure>

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

        {project.links.live && (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:text-text-secondary"
          >
            Live
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
