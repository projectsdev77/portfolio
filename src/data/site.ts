// Single source of truth for the text and links on the page.
// Edit this file to update content without touching the components.

export const links = {
  email: "meazialemayehu16@gmail.com",
  // TODO: replace with your real profile URLs.
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/projectsdev77",
  // Drop your CV into /public as resume.pdf.
  resume: "/resume.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimony", href: "#testimony" },
  { label: "About", href: "#about" },
];

export const hero = {
  name: "Meaza Tadele",
  kicker: "Frontend",
  title: "DEVELOPER",
  left: "Interface Engineer",
  right: "Design-minded Coder",
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
  | { kind: "browser"; screens: { src: string; alt: string }[] }
  | { kind: "phones"; screens: { src: string; alt: string }[] };

export type Project = {
  category: string;
  title: string;
  tags: string[];
  summary: string;
  features: string[];
  meta?: { label: string; value: string }[];
  // Leave empty to hide the "view live" button.
  href?: string;
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    category: "Website Development",
    title: "Million Technologies",
    tags: ["Figma to code", "Responsive", "Multi-page site"],
    summary:
      "I built the company website for Million Technologies, taking it from Figma to a live site. The goal was a strong online presence that works on every screen.",
    features: [
      "Built the Home, About, Services, Projects, Blog and Contact pages from the Figma files",
      "Responsive layouts that hold up from phones to widescreen monitors",
      "Handled both the design and the development, so nothing got lost in handoff",
    ],
    meta: [
      { label: "Role", value: "Design & development" },
      { label: "Timeline", value: "Oct – Dec 2024" },
    ],
    media: {
      kind: "single",
      src: "/images/projects/mtechs-laptop.jpg",
      alt: "Million Technologies website shown on a laptop",
      width: 575,
      height: 504,
    },
  },
  {
    category: "Mobile App Development",
    title: "Noren Real Estate & Rentals",
    tags: ["Mobile app", "Maps", "AI", "Dark mode"],
    summary:
      "A mobile app for buying, selling and renting property in Ethiopia. People search on a map, compare listings and reach the owner or broker in one tap.",
    features: [
      "Map search with Buy and Rent filters, and sorting by newest or price",
      "Listing pages with a photo gallery, key facts and one-tap Call or WhatsApp",
      "Step-by-step listing form with city and sub-city pickers, a map pin or current location, and prices in ETB or USD",
      "“Generate with AI” writes the listing description, with an option to include Amharic",
      "Saved listings, account management and light, dark or system theme",
    ],
    media: {
      kind: "phones",
      screens: [
        { src: "/images/projects/noren-explore.jpg", alt: "Noren map search with listing results" },
        { src: "/images/projects/noren-listing.jpg", alt: "Noren listing detail with Call and WhatsApp buttons" },
        { src: "/images/projects/noren-post.jpg", alt: "Noren post listing form with Generate with AI" },
      ],
    },
  },
  {
    category: "Web Platform Development",
    title: "Become an AI Engineer",
    tags: ["Web app", "Auth", "AI feedback", "Progress tracking"],
    summary:
      "A self-paced, 12-week learning platform for developers moving into AI engineering. Weeks unlock in order, and every assignment gets feedback.",
    features: [
      "Landing page, sign-up and login with email or Google",
      "Dashboard with a “continue where you left off” card, per-week progress and overall stats",
      "Sequenced curriculum: finishing one week unlocks the next",
      "Instant AI feedback on each submission, with the option to ask a human mentor",
    ],
    href: "https://ai-engineer-bootcamp-beta.vercel.app",
    media: {
      kind: "browser",
      screens: [
        { src: "/images/projects/bootcamp-home.jpg", alt: "Become an AI Engineer landing page" },
        { src: "/images/projects/bootcamp-dashboard.jpg", alt: "Become an AI Engineer learner dashboard" },
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

export const testimonials = [
  {
    quote:
      "She designed and built our website from Figma and handled both design and development. The final site looks good and works well on different devices. She was easy to communicate with and delivered what we asked for.",
    name: "Yosef Abate",
    role: "Founder, Million Technologies",
    period: "Oct 24, 2024 - Dec 7, 2024",
    rating: 5,
    avatar: "/images/testimonial-yosef.jpg",
  },
];
