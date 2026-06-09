import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GA_MEASUREMENT_ID = 'G-M61LD10MWR'

export const metadata: Metadata = {
  title: 'My Career Therapist | Workplace Strategy & Professional Development',
  description: 'My Career Therapist helps professionals decode hidden workplace dynamics, build influence, and take control of their careers through strategic career therapy.',
  keywords: 'career therapist, workplace strategy, professional development, executive communication, workplace politics, career coaching',
  openGraph: {
    title: 'My Career Therapist | Workplace Strategy & Professional Development',
    description: 'Decode the hidden rules. Build your influence. Take control of your career trajectory.',
    url: 'https://mycareertherapist.com',
    siteName: 'My Career Therapist',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
