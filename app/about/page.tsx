import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Veteran-Owned Landscaping — Orange Path Landscaping, Orange County CA',
  description: 'Orange Path Landscaping is a veteran-owned landscape design and construction company based in Orange County, CA. Founded by Gavin Mohrmann. Licensed contractor #1146854.',
  openGraph: {
    title: 'About Orange Path Landscaping — Veteran-Owned, Orange County CA',
    description: 'Veteran-owned landscape design and construction company in Orange County. Founded by Gavin Mohrmann. LIC #1146854.',
    url: 'https://orangepathlandscaping.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">The Story</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-normal">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="font-serif text-green-900 text-4xl mb-6">Built on Service. Driven by Craft.</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Orange Path Landscaping was founded by Gavin Mohrmann, a U.S. military veteran who brought the values of discipline, attention to detail, and commitment to service from the military into the landscape trade.
              </p>
              <p>
                Based in Orange County, we serve homeowners who care deeply about their outdoor spaces — people who see their yard as an extension of their home, not an afterthought.
              </p>
              <p>
                We specialize in the full arc: from initial design conversations to photorealistic 3D renders, through construction, and into ongoing care. We believe a landscape should be something you want to live in, not just look at.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/gavin-headshot.jpg" alt="Gavin Mohrmann" fill className="object-cover object-top" />
            </div>
            <div className="bg-cream p-8">
              <h3 className="font-serif text-green-900 text-2xl mb-2">Gavin Mohrmann</h3>
              <p className="text-orange-brand text-sm tracking-widest uppercase mb-4">Founder</p>
              <p className="text-stone-600 leading-relaxed text-sm">
                Veteran. Orange County local. Gavin brings military precision and genuine care to every project — from the first site walk to the final walkthrough.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200 space-y-2">
                <a href="tel:9493716356" className="flex items-center gap-3 text-stone-600 text-sm hover:text-green-900 transition-colors">
                  <span className="text-orange-brand">📞</span> (949) 371-6356
                </a>
                <a href="mailto:gavin@orangepathlandscaping.com" className="flex items-center gap-3 text-stone-600 text-sm hover:text-green-900 transition-colors">
                  <span className="text-orange-brand">✉</span> gavin@orangepathlandscaping.com
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-900 text-white p-6 text-center">
                <p className="font-serif text-3xl mb-1">🎖</p>
                <p className="text-xs tracking-widest uppercase text-white/70 mt-2">Veteran Owned</p>
              </div>
              <div className="bg-stone-100 p-6 text-center">
                <p className="font-serif text-green-900 text-2xl font-normal mb-1">LIC</p>
                <p className="text-stone-500 text-xs tracking-widest uppercase mt-1">1146854</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-12 text-center">What We Believe</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'See it Before We Build It',
                desc: 'We produce detailed 3D renders before breaking ground. No surprises, no guesswork — you approve the vision before it becomes reality.',
              },
              {
                title: 'Quality Over Volume',
                desc: 'We take on a select number of projects so we can give each one proper attention. Your landscape gets a designer, not a production line.',
              },
              {
                title: 'Plants That Belong Here',
                desc: 'We champion California natives and drought-tolerant species — plants evolved for this climate that support local wildlife and need less of everything.',
              },
            ].map((value) => (
              <div key={value.title} className="border-t-2 border-orange-brand pt-6">
                <h3 className="font-serif text-green-900 text-2xl mb-4">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Where We Work</p>
          <h2 className="font-serif text-green-900 text-4xl mb-6">Serving Orange County</h2>
          <p className="text-stone-500 max-w-xl mx-auto mb-10 leading-relaxed">
            We serve all of Orange County including Laguna Niguel, Dana Point, San Clemente, Laguna Beach, Newport Beach, Irvine, Mission Viejo, and beyond.
          </p>
          <Link href="/contact" className="btn-primary">Work with Us</Link>
        </div>
      </section>
    </>
  )
}
