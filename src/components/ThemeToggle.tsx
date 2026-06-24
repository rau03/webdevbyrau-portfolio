"use client";

import { useState, useSyncExternalStore } from "react";

type Theme = "mono" | "rust";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "rust") {
    root.setAttribute("data-theme", "rust");
  } else {
    root.removeAttribute("data-theme");
  }
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "mono";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  return stored === "rust" ? "rust" : "mono";
}

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  function toggle() {
    const next: Theme = theme === "rust" ? "mono" : "rust";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (e.g. private mode); toggle still works in-session.
    }
  }

  const isRust = theme === "rust";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={mounted ? isRust : undefined}
      aria-label="Toggle rust accent theme"
      onClick={toggle}
      className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-text-primary"
    >
      <span className="hidden w-10 text-left sm:inline-block">
        {isRust ? "Rust" : "Mono"}
      </span>
      <span
        className="relative inline-flex h-5 w-9 items-center rounded-full border border-border bg-bg-card transition-colors"
        aria-hidden="true"
      >
        <span
          className={`inline-block h-3.5 w-3.5 rounded-full bg-accent transition-transform duration-200 ${
            isRust ? "translate-x-[18px]" : "translate-x-[3px]"
          }`}
        />
      </span>
    </button>
  );
}
