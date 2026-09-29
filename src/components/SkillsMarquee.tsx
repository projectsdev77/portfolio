import { skills } from "@/data/site";

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-3 px-6 text-sm font-medium whitespace-nowrap md:text-base">
          <span className="size-2 rounded-full bg-ink" />
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="relative z-20 overflow-hidden border-y border-ink bg-paper py-3">
      <p className="sr-only">Skills: {skills.join(", ")}</p>
      {/* Four copies: the track slides by half its width, so the loop never shows a gap. */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}
