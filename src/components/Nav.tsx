"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="#top"
          className="font-display text-xl tracking-tight text-text-primary"
          aria-label={`${nav.logo} — back to top`}
          onClick={() => setOpen(false)}
        >
          {nav.logo}
        </Link>

        <div className="flex items-center gap-6 sm:gap-10">
          <ul className="hidden items-center gap-8 sm:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 inline-flex h-9 w-9 items-center justify-center text-text-primary sm:hidden"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/50"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 border-t border-border bg-bg px-6 pb-6 pt-2">
            <ul className="flex flex-col">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                Accent
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
