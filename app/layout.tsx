import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SabariyaTech - We Flow with Best Tech to Give Best',
  description: 'Professional IT startup offering Web Technologies, SaaS Products, AI Agents, and Digital Marketing services. We flow with innovation to deliver excellence.',
  keywords: 'SabariyaTech, IT services, web development, SaaS, AI agents, digital marketing, Vijayawada, startup',
  authors: [{ name: 'SabariyaTech' }],
  creator: 'SabariyaTech',
  publisher: 'SabariyaTech',
  openGraph: {
    title: 'SabariyaTech - We Flow with Best Tech to Give Best',
    description: 'Professional IT startup offering Web Technologies, SaaS Products, AI Agents, and Digital Marketing services.',
    url: 'https://sabariyatech.in',
    siteName: 'SabariyaTech',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SabariyaTech - IT Services & Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SabariyaTech - We Flow with Best Tech to Give Best',
    description: 'Professional IT startup offering Web Technologies, SaaS Products, AI Agents, and Digital Marketing services.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}