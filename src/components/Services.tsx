"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/site";
import SectionHeading from "./SectionHeading";

function Corners() {
  return (
    <>
      <span aria-hidden className="absolute top-6 left-6 size-3 bg-brand" />
      <span aria-hidden className="absolute top-6 right-6 size-3 border border-brand" />
      <span aria-hidden className="absolute bottom-6 left-6 size-3 border border-brand" />
      <span aria-hidden className="absolute right-6 bottom-6 size-3 bg-brand" />
    </>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      // Fires when an item crosses the middle of the viewport.
      { rootMargin: "-50% 0px -50% 0px" },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="scroll-mt-20 pt-8 md:pt-12">
      <SectionHeading eyebrow="Service overview" title="Lets bring your ideas to life" />

      <div className="mt-12 md:mt-20 md:grid md:grid-cols-2">
        {/* Sticky image column (desktop): crossfades to the service in view. */}
        <div className="sticky top-0 hidden h-screen overflow-hidden md:block">
          {services.map((service, i) => (
            <Image
              key={service.image}
              src={service.image}
              alt={service.alt}
              fill
              sizes="50vw"
              className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        <div>
          {services.map((service, i) => (
            <article
              key={service.number}
              data-index={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative flex flex-col justify-center px-6 py-16 md:min-h-screen md:px-16 lg:px-24"
            >
              <Corners />
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
        </div>
      </div>
    </section>
  );
}
