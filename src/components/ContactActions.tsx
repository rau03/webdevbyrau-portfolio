"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export default function ContactActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          {contact.ctas.email.label}
        </button>
        <Link
          href={contact.ctas.resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-text-primary"
        >
          {contact.ctas.resume.label}
        </Link>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Get in touch">
        <ContactForm />
      </Modal>
    </>
  );
}
