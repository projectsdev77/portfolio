"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/site";
import SectionHeading from "./SectionHeading";

// A service's image slides in once its heading reaches this far down the viewport.
const SWITCH_AT = 0.7;

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [reveal, setReveal] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const grid = gridRef.current;
      if (!grid) return;
      const vh = window.innerHeight;
      // 0 when the section's top touches the bottom of the viewport, 1 once it reaches the top.
      setReveal(Math.min(1, Math.max(0, (vh - grid.getBoundingClientRect().top) / vh)));
      let next = 0;
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < vh * SWITCH_AT) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="services" className="scroll-mt-4 pt-8 md:pt-12">
      <SectionHeading eyebrow="Service overview" title="Lets bring your ideas to life" />

      <div ref={gridRef} className="mt-12 md:mt-20 md:grid md:grid-cols-2">
        {/* Desktop image panel: slides in from the left as the section scrolls in,
            then stays pinned while each service's image slides up into view. */}
        <div className="sticky top-0 hidden h-svh md:block">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ transform: `translateX(-${(1 - reveal) * 100}%)` }}
          >
            <div
              className="h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateY(-${active * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.image} className="relative h-full">
                  <Image src={service.image} alt={service.alt} fill sizes="50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Corner squares pin to the top and bottom of the screen while the services scroll past. */}
          <div className="sticky top-0 hidden h-0 md:block" aria-hidden>
            <span className="absolute top-6 left-6 size-3 bg-brand" />
            <span className="absolute top-6 right-6 size-3 border border-brand" />
          </div>

          {services.map((service, i) => (
            <article
              key={service.number}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex flex-col justify-center px-6 py-12 md:min-h-svh md:px-16 md:py-16 lg:px-24"
            >
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl md:hidden">
                <Image src={service.image} alt={service.alt} fill sizes="90vw" className="object-cover" />
              </div>
              <p className="text-lg">{service.number}</p>
              <h3 className="mt-1 max-w-xs border-b border-ink pb-3 text-3xl leading-tight font-semibold text-brand uppercase md:text-4xl">
                {service.title[0]}
                <br />
                {service.title[1]}
              </h3>
              <p className="mt-8 max-w-md text-base leading-relaxed">{service.body}</p>
            </article>
          ))}

          <div className="sticky bottom-0 hidden h-0 md:block" aria-hidden>
            <span className="absolute bottom-6 left-6 size-3 border border-brand" />
            <span className="absolute right-6 bottom-6 size-3 bg-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}
