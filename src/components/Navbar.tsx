"use client";

import { useState } from "react";
import { links, nav } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <a
          href="#home"
          aria-label="Meaza Tadele, home"
          className="grid size-9 place-items-center rounded-lg bg-ink text-sm font-bold text-white"
        >
          M
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-brand"
            >
              Let&apos;s Talk
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ink px-4 py-2 text-sm font-medium transition hover:bg-ink hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden>
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 py-3 text-base font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ink px-4 py-2 text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
