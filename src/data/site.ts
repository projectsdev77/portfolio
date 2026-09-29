// Single source of truth for the text and links on the page.
// Edit this file to update content without touching the components.

export const links = {
  email: "meazialemayehu16@gmail.com",
  // TODO: replace with your real profile URLs.
  linkedin: "https://www.linkedin.com/in/meaza-alemayehu",
  github: "https://github.com/MeazaTadele",
  upwork: "https://www.upwork.com/freelancers/~012919e73a323fde13",
  // Drop your CV into /public as resume.pdf.
  resume: "/resume.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export const hero = {
  name: "Meaza Tadele",
  kicker: "Frontend",
  title: "DEVELOPER",
  left: "Interface Alchemist",
  right: "Experience Crafter",
};

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Responsive UI",
  "Accessibility",
];

export type ProjectMedia =
  | { kind: "single"; src: string; alt: string; width: number; height: number }
  // Browser windows cascading back to front; the last screen sits on top.
  | { kind: "browser"; screens: { src: string; alt: string }[] };

export type Project = {
  category: string;
  title: string;
  stack: string[];
  summary: string;
  features: string[];
  // Leave empty to hide the link button.
  href?: string;
  linkLabel?: string;
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    category: "Website Development",
    title: "Million Technologies",
    stack: ["Astro", "React", "Tailwind CSS"],
    summary:
      "Company website I took from Figma to production, built to give Million Technologies a strong online presence.",
    features: [
      "Six pages built from the Figma design",
      "Responsive from phones to widescreen",
      "Designed and developed end to end",
    ],
    href: "https://mtechsportfolio-cauddq7up-meaza-tadeles-projects.vercel.app/",
    media: {
      kind: "single",
      src: "/images/projects/mtechs-laptop.png",
      alt: "Million Technologies website shown on a laptop",
      width: 526,
      height: 373,
    },
  },
  {
    category: "Mobile App Development",
    title: "Noren Real Estate & Rentals",
    stack: ["Flutter", "Tailwind CSS"],
    summary:
      "An app for buying, selling and renting property in Ethiopia, with map search and one-tap contact.",
    features: [
      "Map search with Buy/Rent filters and sorting",
      "One-tap Call or WhatsApp on every listing",
      "AI-written listing descriptions, in Amharic too",
    ],
    href: "https://play.google.com/store/apps/details?id=com.nor.realestate",
    linkLabel: "get it on Google Play",
    media: {
      kind: "single",
      src: "/images/projects/noren-mockup.jpg",
      alt: "Three phones showing Noren's listing, map search and saved screens",
      width: 1224,
      height: 1050,
    },
  },
  {
    category: "Web Platform Development",
    title: "Become an AI Engineer",
    stack: ["Next.js", "Tailwind CSS"],
    summary:
      "A self-paced, 12-week learning platform for developers moving into AI engineering.",
    features: [
      "Email and Google sign-in",
      "Progress dashboard with weeks that unlock in order",
      "Instant AI feedback, with a human mentor on request",
    ],
    href: "https://ai-engineer-bootcamp-beta.vercel.app",
    media: {
      kind: "browser",
      screens: [
        { src: "/images/projects/bootcamp-home.jpg", alt: "Become an AI Engineer landing page" },
        { src: "/images/projects/bootcamp-dashboard.jpg", alt: "Become an AI Engineer learner dashboard" },
        { src: "/images/projects/bootcamp-login.jpg", alt: "Become an AI Engineer login page" },
      ],
    },
  },
];

export const services = [
  {
    number: "01",
    title: ["Frontend", "Development"],
    body: "I turn designs into fast, maintainable interfaces with reusable components, clean state management and well-structured code.",
    image: "/images/service-frontend.jpg",
    alt: "Phone showing a marketplace app interface",
  },
  {
    number: "02",
    title: ["Responsive", "Web & Apps"],
    body: "Every screen works from mobile to widescreen, using semantic HTML, keyboard support and accessible contrast.",
    image: "/images/service-responsive.jpg",
    alt: "Laptop showing an online merch store",
  },
  {
    number: "03",
    title: ["Interaction", "& Motion"],
    body: "I build micro-interactions and transitions in code that feel smooth, load fast, and respect users' reduced-motion settings.",
    image: "/images/service-motion.jpg",
    alt: "Laptop showing a company website",
  },
];
