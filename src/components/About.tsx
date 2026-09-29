import Image from "next/image";
import { links } from "@/data/site";
import { ArrowIcon, LinkedInIcon, MailIcon } from "./icons";

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-brand px-1 text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
      {children}
    </mark>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="grid grid-cols-[1fr_auto] items-end gap-x-4">
          <h2 className="col-span-2 leading-[0.85] font-extrabold text-brand">
            <span className="block pl-3 font-hand text-4xl font-normal text-ink md:text-5xl">More</span>
            <span className="block text-[clamp(4.5rem,15vw,9.5rem)] tracking-tight">about</span>
            <span className="-mt-2 inline-block text-[clamp(4.5rem,15vw,9.5rem)] tracking-tight">me.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-6 self-center text-lg font-medium">
            <a href="#contact" className="group flex items-center gap-4">
              <span className="underline underline-offset-4 group-hover:text-brand">Let&apos;s Talk</span>
              <ArrowIcon className="size-10 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <ArrowIcon className="size-10 rotate-180 transition group-hover:-translate-x-1 group-hover:translate-y-1" />
              <span className="leading-tight underline underline-offset-4 group-hover:text-brand">
                My
                <br />
                GitHub
              </span>
            </a>
          </div>

          <div className="relative -mt-16 w-36 sm:-mt-28 sm:w-48 md:w-56">
            <div className="relative aspect-[250/408] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-portrait.jpg"
                alt="Meaza Tadele smiling"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            {/* Notch in the photo's corner that holds the contact buttons. */}
            <div className="absolute bottom-0 left-0 flex flex-col gap-3 rounded-tr-2xl bg-paper pt-3 pr-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full bg-brand text-white transition hover:bg-ink"
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href={`mailto:${links.email}`}
                aria-label="Email"
                className="grid size-10 place-items-center rounded-full bg-brand text-white transition hover:bg-ink"
              >
                <MailIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-base leading-relaxed md:text-lg">
          <p>
            Hey, I&apos;m Meaza, a Software Engineering graduate and <Mark>Frontend Developer</Mark>{" "}
            based in Addis Ababa.
          </p>
          <p>
            I <Mark>started out writing code</Mark>, moved into design, and came back to building. Now I
            ship interfaces that match the design pixel for pixel and hold up in production.
          </p>
          <p>
            What I really like is working at the <Mark>intersection of both worlds</Mark>. I build with
            the user in mind and talk the designer&apos;s language, so less gets lost in handoff. For
            me, <Mark>good code is invisible</Mark>: it just works, fast and accessible.
          </p>
          <p>If you&apos;re hiring or want to build something together, feel free to reach out!</p>
        </div>
      </div>
    </section>
  );
}
