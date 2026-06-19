import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Orange Path Landscaping | Landscape Design & Construction — Orange County, CA',
  description: 'Orange County landscape design, hardscapes, retaining walls, pergolas, and property care. Veteran-owned. Licensed #1146854. Serving Dana Point, Laguna Niguel, Newport Beach & South OC.',
  keywords: 'landscape design Orange County, hardscape contractor Orange County, retaining walls Orange County, pergola builder Dana Point, property care Laguna Niguel, drought tolerant landscaping, veteran owned landscaping',
  openGraph: {
    title: 'Orange Path Landscaping | Orange County, CA',
    description: 'Landscape design, hardscapes, retaining walls, pergolas, and property care. Veteran-owned. Licensed #1146854.',
    url: 'https://orangepathlandscaping.com',
    siteName: 'Orange Path Landscaping',
    images: [
      {
        url: 'https://orangepathlandscaping.com/images/hero-real.jpg',
        width: 1200,
        height: 630,
        alt: 'Orange Path Landscaping — Landscape Design & Construction in Orange County, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Path Landscaping | Orange County, CA',
    description: 'Landscape design, hardscapes, retaining walls, pergolas, and property care. Veteran-owned.',
    images: ['https://orangepathlandscaping.com/images/hero-real.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
