import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Free Landscape Consultation — Orange Path Landscaping, Orange County CA',
  description: 'Schedule a free landscape consultation with Orange Path Landscaping in Orange County, CA. Call or text Gavin at (949) 371-6356, book online via Calendly, or send a message.',
  openGraph: {
    title: 'Contact Orange Path Landscaping — Free Consultation, Orange County CA',
    description: 'Call or text Gavin at (949) 371-6356 or book a free 30-minute consultation online.',
    url: 'https://orangepathlandscaping.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
