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
        sizes="(min-width: 1024px) 460px, 90vw"
        className="h-auto w-full rounded-2xl"
      />
    );
  }

  if (media.kind === "phones") {
    return (
      <div className="flex items-center justify-center gap-3 rounded-2xl bg-ink px-4 py-8 sm:gap-4">
        {media.screens.map((screen, i) => (
          <div
            key={screen.src}
            className={`relative aspect-[591/1280] w-1/3 max-w-40 overflow-hidden rounded-[1.25rem] border-4 border-neutral-800 shadow-xl ${i === 1 ? "sm:-translate-y-4" : "sm:translate-y-4"}`}
          >
            <Image src={screen.src} alt={screen.alt} fill sizes="160px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  // Browser: main screen in a window frame, with the second screen overlapping its corner.
  const [main, second] = media.screens;
  return (
    <div className="relative pb-10 sm:pr-10">
      <div className="overflow-hidden rounded-xl border border-ink/15 bg-white shadow-lg">
        <div className="flex gap-1.5 border-b border-ink/10 px-3 py-2" aria-hidden>
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </div>
        <Image
          src={main.src}
          alt={main.alt}
          width={1400}
          height={825}
          sizes="(min-width: 1024px) 460px, 90vw"
          className="h-auto w-full"
        />
      </div>
      {second && (
        <div className="absolute right-0 bottom-0 w-3/5 overflow-hidden rounded-lg border border-ink/15 bg-white shadow-xl">
          <Image
            src={second.src}
            alt={second.alt}
            width={1400}
            height={709}
            sizes="(min-width: 1024px) 280px, 55vw"
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl bg-white px-4 py-12 md:px-10 md:py-16">
        <SectionHeading eyebrow="featured projects" title="Design that gets results" />

        <ul className="mt-12 flex flex-col gap-10 md:mt-16">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="grid items-center gap-10 rounded-3xl border border-ink/50 p-6 md:p-9 lg:grid-cols-2 lg:gap-12"
            >
              <div className={i % 2 === 1 ? "order-2" : "order-2 lg:order-1"}>
                <p className="text-base text-ink/80 md:text-lg">{project.category}</p>
                <h3 className="mt-1 text-2xl font-semibold text-brand md:text-3xl">
                  {project.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-ink/70 px-3 py-0.5 text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-relaxed md:text-base">{project.summary}</p>

                {project.meta && (
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    {project.meta.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xs tracking-wide text-ink/60 uppercase">{m.label}</dt>
                        <dd className="font-medium">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <h4 className="mt-6 text-xs font-semibold tracking-wide text-ink/60 uppercase">
                  What I built
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
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
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
                  >
                    view live site<span className="sr-only">: {project.title} (opens in a new tab)</span>
                    <ArrowIcon className="size-3.5" />
                  </a>
                )}
              </div>

              <div className={i % 2 === 1 ? "order-1" : "order-1 lg:order-2"}>
                <Media media={project.media} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
