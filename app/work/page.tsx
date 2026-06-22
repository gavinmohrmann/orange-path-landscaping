import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Landscape Projects — Orange Path Landscaping, Orange County CA',
  description: 'Browse completed landscape projects by Orange Path Landscaping across Orange County — paver patios, retaining walls, xeriscape front yards, decks, and custom outdoor living spaces.',
  openGraph: {
    title: 'Landscape Portfolio — Orange Path Landscaping | Orange County, CA',
    description: 'Completed projects: paver patios, retaining walls, xeriscape, decks, and outdoor living spaces across Orange County.',
    url: 'https://orangepathlandscaping.com/work',
  },
}

const projects = [
  {
    id: 1,
    title: 'Front Yard Redesign with Pavers',
    location: 'Orange County, CA',
    category: 'Landscape Design & Hardscape',
    description: 'A complete front yard transformation featuring a paver driveway approach, custom mailbox columns with pyramid toppers, a circle softbed in the center of the turf, and native flowering plants anchored by a statement purple-leafed tree.',
    images: ['/images/projects/sand-point-render-day.jpg', '/images/projects/sand-point-render-night.jpg'],
    alts: ['3D daytime render of front yard paver redesign with column toppers and circle softbed, Orange County CA', '3D nighttime render of front yard paver redesign with landscape lighting, Orange County CA'],
    featured: true,
  },
  {
    id: 2,
    title: 'Front Yard Desertscape',
    location: 'Orange County, CA',
    category: 'Xeriscape Design & Build',
    description: 'A drought-tolerant xeriscape transformation featuring bold desert specimens — saguaro cactus, agave, golden barrel cactus, and flagstone stepping pathways lit by warm garden lights.',
    images: ['/images/projects/monica-render-1.jpg', '/images/projects/monica-render-2.jpg'],
    alts: ['3D xeriscape design render with saguaro cactus and agave, Orange County CA', 'Xeriscape front yard design with flagstone pathways and desert plants, Orange County CA'],
    featured: true,
  },
  {
    id: 3,
    title: 'The Dream Backyard',
    location: 'Orange County, CA',
    category: 'Design Concept — California Room',
    description: 'A full outdoor living transformation centered around a California Room with outdoor kitchen, built-in grill, wine fridge, fireplace lounge, and resort-style pool patio. Designed with photorealistic 3D renders so the client could see the vision before breaking ground.',
    images: ['/images/projects/dream-backyard-render-1.jpg', '/images/projects/dream-backyard-render-2.jpg'],
    alts: ['3D render of California Room outdoor kitchen with fireplace and pool patio, Orange County CA', 'Photorealistic backyard design render with outdoor living space and pool, Orange County CA'],
    featured: true,
  },
  {
    id: 7,
    title: 'Riverstreet Marketplace Courtyard',
    location: 'Orange County, CA',
    category: 'Commercial Design',
    description: 'Full landscape design for a commercial marketplace courtyard — shade trees, agave and pink muhly planting beds, decorative boulders, a central pergola, and paver hardscape to create a gathering destination.',
    images: ['/images/projects/riverstreet-render-1.jpg', '/images/projects/riverstreet-render-2.jpg'],
    alts: ['Commercial courtyard landscape design with pergola and paver hardscape, Orange County CA', 'Marketplace courtyard design with shade trees and agave planting beds, Orange County CA'],
    featured: false,
  },
  {
    id: 8,
    title: 'Paver Patio Installation',
    location: 'Orange County, CA',
    category: 'Completed Build — Hardscape',
    description: '200 sq ft backyard paver patio installation. Random pattern layout with tight joints, proper base compaction, and seamless transition from the existing structure.',
    images: ['/images/projects/paver-patio.jpg'],
    alts: ['Completed 200 sq ft random pattern paver patio installation, Orange County CA'],
    featured: false,
  },
  {
    id: 9,
    title: 'Tropical Planting Install',
    location: 'Orange County, CA',
    category: 'Completed Build — Planting',
    description: 'Tropical planting installation featuring sago palms, colorful cordylines, and lush ground cover set in lava rock mulch — plus a cedar fence planting bed with fresh plantings along a patio.',
    images: ['/images/projects/native-plants-1.jpg', '/images/projects/native-plants-2.jpg'],
    alts: ['Tropical planting installation with sago palms and cordylines in lava rock mulch, Orange County CA', 'Cedar fence planting bed with colorful tropical plants, Orange County CA'],
    featured: false,
  },
  {
    id: 5,
    title: 'Avenida Evita',
    location: 'Orange County, CA',
    category: 'Landscape Design',
    description: 'On-site photography and design brief development for a custom residential landscape project.',
    images: [],
    featured: false,
    comingSoon: true,
  },
  {
    id: 6,
    title: 'Paseo Pinto',
    location: 'Orange County, CA',
    category: 'Planting Plan',
    description: 'Whole-house planting plan delivered with detailed plant lists and irrigation layout.',
    images: [],
    featured: false,
    comingSoon: true,
  },
]

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured)
  const all = projects.filter((p) => !p.featured)

  return (
    <>
      {/* Page Header */}
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">Portfolio</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-normal">Our Work</h1>
          <p className="text-white/55 mt-6 text-lg max-w-xl leading-relaxed">
            Every project begins with listening — to the land, to your lifestyle, and to what you want to feel when you&apos;re home.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-10">Featured Projects</p>
          <div className="space-y-24">
            {featured.map((project, i) => (
              <div key={project.id} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`grid gap-3 ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {project.images.map((img, j) => (
                    <div key={j} className={`relative overflow-hidden ${j === 0 && project.images.length > 1 ? 'aspect-[3/4]' : 'aspect-[3/4]'}`}>
                      <Image src={img} alt={(project.alts ?? [])[j] ?? project.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className={i % 2 === 1 ? 'md:order-first' : ''}>
                  <p className="section-label mb-3">{project.category}</p>
                  <h2 className="font-serif text-green-900 text-3xl md:text-4xl mb-2">{project.title}</h2>
                  <p className="text-stone-400 text-sm tracking-wide mb-6">{project.location}</p>
                  <p className="text-stone-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-10">All Projects</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {all.map((project) => (
              <div key={project.id} className="bg-white">
                {project.images.length > 0 ? (
                  <div className="relative aspect-[4/3] overflow-hidden project-card">
                    <Image src={project.images[0]} alt={project.alts?.[0] ?? project.title} fill className="object-cover" />
                    <div className="project-overlay absolute inset-0 bg-green-950/60 flex items-end p-5">
                      <p className="text-white font-serif text-lg">{project.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-stone-100 flex items-center justify-center">
                    <p className="text-stone-400 text-sm tracking-widest uppercase">Photos Coming Soon</p>
                  </div>
                )}
                <div className="p-6">
                  <p className="section-label mb-2">{project.category}</p>
                  <h3 className="font-serif text-green-900 text-xl mb-1">{project.title}</h3>
                  <p className="text-stone-400 text-xs tracking-wide mb-3">{project.location}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-white text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            We&apos;d love to learn about your space and share what&apos;s possible.
          </p>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
