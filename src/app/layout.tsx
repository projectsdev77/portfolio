import type { Metadata } from "next";
import { Gochi_Hand, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const hand = Gochi_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Meaza Tadele | Full-Stack Developer",
  description:
    "Meaza Tadele is a full-stack web developer in Addis Ababa with a UI/UX design background, building fast, accessible web apps with React, Next.js, TypeScript, Node.js and PostgreSQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${hand.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
