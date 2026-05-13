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
  title: "Career Coach | Find a Job, Get Promoted & Love Your Work | Aisha",
  description:
    "Work 1-on-1 with Aisha — a career coach with an HR background — to land your next job, earn a promotion, or navigate a career change. Real insight. Real results.",
  keywords: [
    "career coach",
    "1-on-1 career coaching",
    "job search help",
    "get promoted",
    "career change",
    "career advice",
    "career coach with HR background",
  ],
  authors: [{ name: "Aisha — The Career Therapist" }],
  openGraph: {
    title: "Career Coach | Find a Job, Get Promoted & Love Your Work | Aisha",
    description:
      "Work 1-on-1 with Aisha — a career coach with an HR background — to land your next job, earn a promotion, or navigate a career change.",
    url: "https://thecareertherapist.com",
    siteName: "The Career Therapist",
    locale: "en_GB",
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
