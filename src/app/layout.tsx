import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignis Careers | Learning that gives young people the confidence to act",
  description:
    "Ignis integrates Life Skills with English, Science and Maths to help young learners build knowledge, confidence and agency to make decisions, solve problems, communicate and participate in the world around them.",
};

import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8F5EF] text-[#2D3748] selection:bg-[#A21246] selection:text-white relative">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

