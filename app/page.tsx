import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Orange Path Landscaping | Landscape Design, Hardscapes & Property Care — Orange County, CA',
  description: 'Orange County\'s landscape design and construction company. 3D design renders, hardscapes, retaining walls, pergolas, native plants, and property care. Veteran-owned. LIC #1146854. Free consultations.',
  openGraph: {
    title: 'Orange Path Landscaping | Orange County, CA',
    description: 'Landscape design, hardscapes, retaining walls, pergolas, and property care. Veteran-owned. Free consultations.',
    url: 'https://orangepathlandscaping.com',
  },
}

const featuredProjects = [
  {
    title: '32202 Del Obispo St.',
    subtitle: 'San Juan Capistrano, CA — Church Courtyard Labyrinth',
    tag: 'Completed Build',
    image: '/images/projects/hardscape-after.png',
    alt: 'Completed hardscape and labyrinth courtyard at Del Obispo St, San Juan Capistrano CA',
  },
  {
    title: 'Keystone Retaining Wall',
    subtitle: 'Curved Wall Installation',
    tag: 'Completed Build',
    image: '/images/projects/retaining-wall-curved.png',
    alt: 'Curved keystone retaining wall installation by Orange Path Landscaping, Orange County CA',
  },
  {
    title: 'Trex Stage & Deck',
    subtitle: '18x14 Freestanding Platform',
    tag: 'Completed Build',
    image: '/images/projects/deck-stage.jpg',
    alt: '18x14 freestanding Trex deck and stage platform built by Orange Path Landscaping',
  },
  {
    title: 'Backyard Oasis',
    subtitle: 'Pool Patio & Outdoor Living',
    tag: 'Design Concept',
    image: '/images/projects/wix-render1.png',
    alt: '3D landscape design render of backyard pool patio and outdoor living space, Orange County CA',
  },
  {
    title: 'Front Yard Redesign with Pavers',
    subtitle: 'Pyramid Column Toppers & Circle Softbed',
    tag: 'Design Concept',
    image: '/images/projects/sand-point-best.jpg',
    alt: 'Front yard paver redesign with pyramid column toppers and circle softbed, Orange County CA',
  },
  {
    title: 'Outdoor Kitchen & Fireplace',
    subtitle: 'Entertainer\'s Backyard',
    tag: 'Design Concept',
    image: '/images/projects/wix-render2.png',
    alt: '3D design render of outdoor kitchen and fireplace entertaining backyard, Orange County CA',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-end bg-green-900">
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="section-label text-orange-light mb-4">Orange County, CA</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-normal leading-tight max-w-3xl mb-6">
            Landscapes that<br />
            <em>Capture the Imagination</em>
          </h1>
          <p className="text-white/70 text-lg max-w-md mb-10 font-light leading-relaxed">
            Design, Construction and Property Care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/work" className="btn-outline">View Our Work</Link>
            <a href="https://calendly.com/gavin-orangepathlandscaping/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Free Consultation</a>
          </div>
        </div>

      </section>

      {/* INTRO */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">Our Approach</p>
            <h2 className="font-serif text-green-900 text-4xl md:text-5xl leading-snug mb-6">
              Beautiful design.<br />Lasting craftsmanship.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              At Orange Path, we treat every property as a canvas. From photorealistic 3D renders that let you see exactly what you&apos;re getting, to the final planted stone and pergola — we own every step.
            </p>
            <p className="text-stone-600 leading-relaxed mb-10">
              We specialize in landscape design, hardscapes, retaining walls, native plantings, and full property care. Based in Orange County. Veteran owned and operated.
            </p>
            <Link href="/services" className="btn-primary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Portfolio</p>
              <h2 className="font-serif text-green-900 text-4xl md:text-5xl">Featured Work</h2>
            </div>
            <Link href="/work" className="hidden md:block nav-link-dark border-b border-stone-300 pb-1">
              View All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.title} href="/work" className="project-card group relative overflow-hidden block aspect-[4/5]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-green-950/70 flex flex-col justify-end p-6">
                  <span className={`self-start text-xs tracking-widest uppercase mb-2 px-2 py-1 ${project.tag === 'Completed Build' ? 'bg-orange-brand text-white' : 'bg-white/20 text-white/80'}`}>
                    {project.tag}
                  </span>
                  <h3 className="font-serif text-white text-2xl font-normal mt-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{project.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/work" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-green-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4 text-center">What We Do</p>
          <h2 className="font-serif text-white text-4xl text-center mb-16">Full-Service Landscaping</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Landscape Design', desc: '3D renders, site plans, and planting layouts so you can see it before we build it.' },
              { title: 'Hardscapes', desc: 'Pavers, retaining walls, walkways, and outdoor structures built to last.' },
              { title: 'Pergolas & Decks', desc: 'Custom outdoor living spaces that extend your home into the garden.' },
              { title: 'Property Care', desc: 'Ongoing maintenance, irrigation audits, weeding, and tree trimming.' },
            ].map((service) => (
              <div key={service.title} className="border-t border-white/20 pt-6">
                <h3 className="font-serif text-white text-xl mb-3">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/services" className="btn-outline">See All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src="/images/projects/monica-2.jpg"
          alt="Completed xeriscape landscape project in Orange County CA by Orange Path Landscaping"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-950/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="section-label text-orange-light mb-4">Ready to Transform Your Property?</p>
          <h2 className="font-serif text-white text-4xl md:text-6xl mb-6">
            Let&apos;s Design Something Beautiful Together
          </h2>
          <p className="text-white/65 mb-10 leading-relaxed">
            Every great landscape starts with a conversation. Tell us about your space and we&apos;ll show you what&apos;s possible.
          </p>
          <a href="https://calendly.com/gavin-orangepathlandscaping/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </>
  )
}
