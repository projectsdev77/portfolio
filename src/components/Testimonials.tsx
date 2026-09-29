"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/site";
import SectionHeading from "./SectionHeading";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`size-4 ${i < rating ? "fill-ink" : "fill-ink/20"}`} aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
      <span className="ml-2 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section id="testimony" className="scroll-mt-20 px-5 py-20 md:py-28">
      <SectionHeading eyebrow="What Clients Say" title="What it’s like to work together">
        Design is best measured by the experience it creates. Here’s what clients have shared about
        working with me and the results we achieved together.
      </SectionHeading>

      <div className="relative mx-auto mt-16 grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12">
        <div className="flex items-center justify-center gap-6">
          {testimonials.length > 1 && (
            <div className="flex flex-col gap-3" role="tablist" aria-label="Testimonials">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setIndex(i)}
                  className={`size-2 rounded-full border border-ink ${i === index ? "bg-ink" : ""}`}
                />
              ))}
            </div>
          )}
          <div className="relative size-40 overflow-hidden rounded-3xl border-4 border-paper shadow-md md:size-44">
            <Image src={t.avatar} alt={t.name} fill sizes="176px" className="object-cover" />
          </div>
        </div>

        <figure className="relative">
          <svg
            viewBox="0 0 200 140"
            aria-hidden
            className="absolute -top-10 right-0 w-32 fill-brand-soft md:-top-12 md:w-48"
          >
            <path d="M10 0h70c8 0 14 6 14 14v50c0 40-18 66-50 76l-8-14c18-10 26-24 26-40H10C4 86 0 82 0 76V10C0 4 4 0 10 0z" />
            <path d="M116 0h70c8 0 14 6 14 14v50c0 40-18 66-50 76l-8-14c18-10 26-24 26-40h-52c-6 0-10-4-10-10V10c0-6 4-10 10-10z" />
          </svg>
          <div className="relative border-y border-ink/60 py-8">
            <blockquote className="max-w-xl text-sm leading-relaxed md:text-base">{t.quote}</blockquote>
            <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-lg font-bold">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </div>
              <p className="text-sm">{t.period}</p>
              <Stars rating={t.rating} />
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
