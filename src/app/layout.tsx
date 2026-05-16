import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Career Coach | Find a Job, Get Promoted & Love Your Work | Aisha',
  description: 'Work 1-on-1 with Aisha — a career coach with an HR background — to land your next job, earn a promotion, or navigate a career change. Real insight. Real results.',
  keywords: 'career coach, 1-on-1 career coaching, job search help, get promoted, career change',
  openGraph: {
    title: 'Career Coach | Find a Job, Get Promoted & Love Your Work | Aisha',
    description: 'Work 1-on-1 with Aisha — a career coach with an HR background.',
    url: 'https://mycareertherapist.com',
    siteName: 'The Career Therapist',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
