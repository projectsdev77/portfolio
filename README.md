# Meaza Tadele: Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All text and links live in [`src/data/site.ts`](src/data/site.ts): hero copy, skills strip, projects, services, testimonials and contact links. The About copy is in [`src/components/About.tsx`](src/components/About.tsx).

Images are in `public/images/`. Project screenshots go in `public/images/projects/`. Each project picks a `media` layout: `single` (one image), `browser` (a main screen in a browser frame plus an overlapping second screen) or `phones` (three phone screens). Set `href` to show a "view live site" button.

## Sections

| Component | Section |
| --- | --- |
| `Navbar` | Sticky nav with a mobile menu |
| `Hero` | Big title with the portrait layered between the filled and outlined copies |
| `SkillsMarquee` | Scrolling skills strip (stops when reduced motion is on) |
| `Projects` | Project cards with summary, role/timeline, feature list and screenshots |
| `Services` | Sticky image column that crossfades as each service scrolls into view |
| `Testimonials` | Client quotes (dots appear when there's more than one) |
| `About` | About me, with contact shortcuts |
| `Contact` | Email, LinkedIn, GitHub, Résumé |
