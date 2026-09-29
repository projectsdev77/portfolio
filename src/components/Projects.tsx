import Image from "next/image";
import { projects } from "@/data/site";
import SectionHeading from "./SectionHeading";

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
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
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
                <p className="mt-5 text-sm leading-relaxed md:text-base">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
                >
                  view project<span className="sr-only">: {project.title}</span>
                </a>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 460px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-sm text-ink/40">
                    Screenshot coming soon
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
