import { hero } from "@/data/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col items-center overflow-hidden px-4 [--t:min(15vw,17rem)] md:[--t:min(13.5vw,30svh)]"
    >
      <p className="mt-[8svh] text-center text-xs md:mt-[14svh] md:text-lg">
        Hi, my name is{" "}
        <span className="text-lg text-brand md:text-[1.625rem]">{hero.name}</span> and I am a
      </p>

      <div className="relative mt-12 md:mt-[calc(var(--t)*0.42)]">
        <span
          aria-hidden
          className="absolute bottom-[86%] left-1/2 z-30 -translate-x-1/2 font-hand font-light text-[max(1.5rem,calc(var(--t)*0.3))] leading-none whitespace-nowrap [-webkit-text-stroke:0.03em_currentColor]"
        >
          {hero.kicker}
        </span>
        <h1 className="text-[length:var(--t)] leading-[0.8] font-bold tracking-tight text-brand">
          <span className="sr-only">{hero.kicker} </span>
          {hero.title}
        </h1>

        {/* Portrait sits between the filled title and its outline copy, so the letters behind her read as outlines. */}
        <div className="absolute top-[calc(100%+5.5rem)] left-1/2 z-10 w-[92vw] max-w-md -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_90%,transparent)] md:top-[42%] md:w-[calc(var(--t)*1.9)] md:max-w-none">
          <Image
            src="/images/hero-portrait.png"
            alt="Portrait of Meaza Tadele"
            width={535}
            height={759}
            preload
            sizes="(min-width: 768px) 30vw, 92vw"
            className="h-auto w-full"
          />
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 text-[length:var(--t)] leading-[0.8] font-bold tracking-tight text-transparent [-webkit-text-stroke:2px_var(--color-brand)]"
        >
          {hero.title}
        </span>

        <p className="absolute top-full left-0 mt-[calc(var(--t)*0.13)] hidden text-[calc(var(--t)*0.1)] font-semibold whitespace-nowrap md:block">
          {hero.left}
        </p>
        <p className="absolute top-full right-0 mt-[calc(var(--t)*0.13)] hidden text-[calc(var(--t)*0.1)] font-semibold whitespace-nowrap md:block">
          {hero.right}
        </p>
      </div>

      <p className="relative z-20 mt-5 flex flex-wrap justify-center gap-x-3 text-sm font-semibold md:hidden">
        <span>{hero.left}</span>
        <span aria-hidden className="text-brand">
          ·
        </span>
        <span>{hero.right}</span>
      </p>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 z-30 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:scale-110 md:bottom-[5svh] md:size-16"
      >
        <svg viewBox="0 0 24 24" className="size-6 md:size-8" fill="currentColor" aria-hidden>
          <path d="M9.5 3h5v9.5h4.5L12 21l-7-8.5h4.5z" />
        </svg>
      </a>
    </section>
  );
}
