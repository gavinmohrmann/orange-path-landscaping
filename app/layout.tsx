import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Orange Path Landscaping | Orange County Landscape Design & Build',
  description: 'Orange County\'s premier landscape design, construction, and maintenance company. Veteran owned. LIC: 1146854.',
  keywords: 'landscape design, Orange County, hardscape, retaining walls, pergolas, native plants, landscape construction',
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
