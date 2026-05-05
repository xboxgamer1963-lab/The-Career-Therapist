import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Career Therapist | Expert HR Consulting for Modern Enterprises",
  description: "Aligning talent strategy with organizational performance. Partner with The Career Therapist for bespoke HR transformations, leadership development, and culture design.",
  keywords: ["HR Consulting", "Strategic HR", "Talent Planning", "Leadership Development", "Culture Design", "Employee Engagement"],
  authors: [{ name: "The Career Therapist" }],
  openGraph: {
    title: "The Career Therapist | Expert HR Consulting",
    description: "High-end HR consulting focused on human-centric, data-driven strategies.",
    url: "https://thecareertherapist.com",
    siteName: "The Career Therapist",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
