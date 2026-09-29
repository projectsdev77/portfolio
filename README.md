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

All text and links live in [`src/data/site.ts`](src/data/site.ts): hero copy, skills strip, projects, services and contact links. The About copy is in [`src/components/About.tsx`](src/components/About.tsx).

Images are in `public/images/`. Project screenshots go in `public/images/projects/`. Each project picks a `media` layout: `single` (one image or mockup) or `browser` (a cascade of browser windows, last one on top). Set `href` to show a "view live site" button.

## Sections

| Component | Section |
| --- | --- |
| `Navbar` | Top nav with a mobile menu |
| `Hero` | Full-screen intro: big title with the portrait layered between the filled and outlined copies |
| `SkillsMarquee` | Scrolling skills strip (stops when reduced motion is on) |
| `Projects` | Project cards with tech stack, summary, key features and screenshots |
| `Services` | Image panel that grows in as the section enters, then slides to each service's image; corner squares pin to the screen edges |
| `About` | About me, with contact shortcuts |
| `Contact` | Email, LinkedIn, GitHub, Résumé |
