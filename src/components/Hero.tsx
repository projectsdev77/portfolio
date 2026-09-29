import Image from "next/image";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex scroll-mt-20 flex-col items-center overflow-hidden px-4 pt-12 md:pt-16 [--t:min(15vw,17rem)]"
    >
      <p className="text-center text-sm md:text-base">
        Hi, my name is{" "}
        <span className="text-xl font-medium text-brand md:text-2xl">{hero.name}</span> and I
        am a
      </p>

      <div className="relative mt-10 md:mt-14">
        <span
          aria-hidden
          className="absolute bottom-[80%] left-1/2 z-30 -translate-x-1/2 -rotate-2 font-hand text-[max(1.5rem,calc(var(--t)*0.26))] leading-none whitespace-nowrap"
        >
          {hero.kicker}
        </span>
        <h1 className="text-[length:var(--t)] leading-[0.9] font-bold tracking-tight text-brand">
          <span className="sr-only">{hero.kicker} </span>
          {hero.title}
        </h1>
        {/* Outline copy that sits above the portrait, so the letters behind her stay visible. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 text-[length:var(--t)] leading-[0.9] font-bold tracking-tight text-transparent [-webkit-text-stroke:2px_var(--color-brand)]"
        >
          {hero.title}
        </span>

        <p className="absolute top-full left-0 mt-8 hidden text-lg font-semibold md:block lg:text-2xl">
          {hero.left}
        </p>
        <p className="absolute top-full right-0 mt-8 hidden text-lg font-semibold md:block lg:text-2xl">
          {hero.right}
        </p>
      </div>

      <p className="mt-5 flex flex-wrap justify-center gap-x-3 text-base font-semibold md:hidden">
        <span>{hero.left}</span>
        <span aria-hidden className="text-brand">
          ·
        </span>
        <span>{hero.right}</span>
      </p>

      <div className="relative z-10 mt-6 w-[min(88vw,22rem)] md:-mt-[calc(var(--t)*0.55)] md:w-[min(34vw,36rem)]">
        <Image
          src="/images/hero-portrait.png"
          alt="Portrait of Meaza Tadele"
          width={540}
          height={360}
          preload
          sizes="(min-width: 768px) 34vw, 88vw"
          className="h-auto w-full"
        />
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="absolute bottom-6 left-1/2 z-30 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:scale-110 md:size-14"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
            <path
              d="M12 4v14m0 0-6-6m6 6 6-6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
