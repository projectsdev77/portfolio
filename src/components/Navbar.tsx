"use client";

import { useState } from "react";
import { links, nav } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 h-(--nav-h)">
      <nav
        aria-label="Main"
        className="flex h-full items-center justify-between px-5 md:px-[7.4vw]"
      >
        <a
          href="#home"
          aria-label="Meaza Tadele, home"
          className="grid size-9 place-items-center rounded-lg bg-ink text-sm font-bold text-white md:size-11 md:text-base"
        >
          M
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-9">
          <ul className="flex items-center gap-6 text-sm font-medium lg:gap-8 lg:text-[1.0625rem]">
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
              className="rounded-2xl bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-brand lg:px-7 lg:py-3.5 lg:text-[1.0625rem]"
            >
              Let&apos;s Talk
            </a>
            <a
              href={links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-ink px-5 py-3 text-sm font-medium transition hover:bg-ink hover:text-white lg:px-7 lg:py-3.5 lg:text-[1.0625rem]"
            >
              Upwork
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
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-t border-ink/10 bg-paper px-5 pb-6 shadow-lg md:hidden">
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
              href={links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ink px-4 py-2 text-sm font-medium"
            >
              Upwork
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
