import Link from "next/link";
import ContactActions from "@/components/ContactActions";
import { about, aboutSection, contact } from "@/lib/content";

export default function AboutContact() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-24 pt-4 sm:px-10"
    >
      <div className="grid gap-10 md:grid-cols-[1.7fr_1fr] md:gap-16">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-text-secondary">
            {aboutSection.eyebrow}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {about.body}
          </p>
        </div>

        <div className="flex flex-col items-start justify-end gap-4">
          <AboutLink href={about.links.linkedin} label="LinkedIn" />
          <AboutLink href={about.links.github} label="GitHub" />
        </div>
      </div>

      <div id="contact" className="mt-16 scroll-mt-24 border-t border-border pt-16">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-text-secondary">
          {contact.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[0.98] text-text-primary sm:text-5xl lg:text-6xl">
          {contact.headline.lead}{" "}
          <span className="text-accent">{contact.headline.accent}</span>
        </h2>

        <ContactActions />
      </div>
    </section>
  );
}

function AboutLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-base font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-text-primary"
    >
      {label}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
