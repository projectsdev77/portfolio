import Image from "next/image";
import { projects, type ProjectMedia } from "@/data/site";
import { ArrowIcon } from "./icons";
import SectionHeading from "./SectionHeading";

function Media({ media }: { media: ProjectMedia }) {
  if (media.kind === "single") {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes="(min-width: 768px) 440px, 90vw"
        className="h-auto w-full rounded-2xl"
      />
    );
  }

  // Cascade of browser windows, each stepped down and to the right of the one behind it.
  const steps = media.screens.length - 1;
  return (
    <div className="relative aspect-[10/7]">
      {media.screens.map((screen, i) => (
        <div
          key={screen.src}
          className="absolute w-[76%] overflow-hidden rounded-lg border border-ink/15 bg-white shadow-xl"
          style={{ left: `${steps ? (i / steps) * 24 : 0}%`, top: `${steps ? (i / steps) * 34 : 0}%` }}
        >
          <div className="flex gap-1 border-b border-ink/10 px-2 py-1.5" aria-hidden>
            <span className="size-1.5 rounded-full bg-ink/20" />
            <span className="size-1.5 rounded-full bg-ink/20" />
            <span className="size-1.5 rounded-full bg-ink/20" />
          </div>
          <div className="relative aspect-[16/9]">
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(min-width: 768px) 340px, 70vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl bg-white px-4 py-12 md:px-10 md:py-16">
        <SectionHeading eyebrow="featured projects" title="Design that gets results" />

        <ul className="mt-12 flex flex-col gap-10 md:mt-16">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="grid items-center gap-8 rounded-3xl border border-ink/50 p-6 md:grid-cols-2 md:p-9"
            >
              <div className={i % 2 === 1 ? "order-2" : "order-2 md:order-1"}>
                <p className="text-base text-ink/80 md:text-lg">{project.category}</p>
                <h3 className="mt-1 text-2xl font-semibold text-brand md:text-3xl">
                  {project.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-ink/70 px-3 py-0.5 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed md:text-base">{project.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
                  >
                    view live site<span className="sr-only">: {project.title} (opens in a new tab)</span>
                    <ArrowIcon className="size-3.5" />
                  </a>
                )}
              </div>

              <div className={i % 2 === 1 ? "order-1" : "order-1 md:order-2"}>
                <Media media={project.media} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
