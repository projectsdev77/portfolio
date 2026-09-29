import { links } from "@/data/site";
import { FileIcon, GitHubIcon, LinkIcon } from "./icons";

export default function Contact() {
  const linkClass = "inline-flex items-center gap-2 text-brand hover:underline";

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 text-center md:py-32">
      <h2 className="text-2xl font-medium md:text-3xl">Want to work together?</h2>
      <p className="mt-1 md:text-lg">If you like what you see and you&apos;re hiring, get in touch!</p>

      <ul className="mt-8 flex flex-col items-center gap-2 md:text-lg">
        <li>
          <a href={`mailto:${links.email}`} className={linkClass}>
            {links.email}
          </a>
        </li>
        <li>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <LinkIcon className="size-4 opacity-60" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <GitHubIcon className="size-4 opacity-60" />
            GitHub
          </a>
        </li>
        <li>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <FileIcon className="size-4 opacity-60" />
            Résumé
          </a>
        </li>
      </ul>

      <a
        href={`mailto:${links.email}`}
        className="mt-12 inline-block rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-brand"
      >
        Let&apos;s Build Together
      </a>
    </section>
  );
}
