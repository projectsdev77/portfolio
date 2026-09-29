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

export type Project = {
  category: string;
  title: string;
  tags: string[];
  description: string;
  href: string;
  // Path under /public, e.g. "/images/projects/million.jpg". Leave empty to show a placeholder.
  image?: string;
};

// TODO: placeholder cards. Replace with the final copy, screenshots and live links.
export const projects: Project[] = [
  {
    category: "Web App Design & Development",
    title: "Million Technologies",
    tags: ["Next.js", "Tailwind CSS"],
    description:
      "Creating a strong online presence for Millennium Technologies to showcase its services.",
    href: "#",
  },
  {
    category: "Mobile Application",
    title: "Aircraft Parts Marketplace App",
    tags: ["React", "TypeScript"],
    description:
      "Mobile-first B2B app that helps aviation mechanics and fleet operators find, order, and track parts.",
    href: "#",
  },
  {
    category: "Template System",
    title: "Premium Resume Templates",
    tags: ["React", "Responsive UI"],
    description:
      "A collection of 10 modern, ATS-friendly resume templates for a resume editing application.",
    href: "#",
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
