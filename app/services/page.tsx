import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Landscaping Services | Orange County, CA — Orange Path Landscaping',
  description: 'Full-service landscaping in Orange County: 3D landscape design, retaining walls, hardscapes, pergolas, native & drought-tolerant plants, property care, and irrigation audits. Free consultations. LIC #1146854.',
  openGraph: {
    title: 'Landscaping Services — Orange Path Landscaping | Orange County, CA',
    description: 'Landscape design, retaining walls, hardscapes, pergolas, native plants, and property care across Orange County. Free consultations.',
    url: 'https://orangepathlandscaping.com/services',
  },
}

const services = [
  {
    category: 'Design & Build',
    items: [
      {
        title: 'Landscape Design',
        description: 'We start with a detailed site analysis and design brief, then produce photorealistic 3D renders and 2D site plans so you know exactly what you\'re getting before a single shovel hits the ground. Multiple design options, one great outcome.',
        features: ['Site analysis & design brief', '3D photorealistic renders', '2D planting plans', 'Multiple design iterations', 'Plant selection & specification'],
      },
      {
        title: 'Retaining Walls',
        description: 'Structurally engineered retaining walls that solve grading challenges while enhancing the beauty of your property. We work with natural stone, concrete block, and poured concrete systems.',
        features: ['Gravity & segmental block walls', 'Natural stone options', 'Drainage integration', 'Hillside stabilization', 'Decorative finishes'],
      },
      {
        title: 'Hardscapes',
        description: 'From paver driveways to flagstone patios, we design and install hardscape elements that tie your outdoor space together. Clean lines, quality materials, lasting results.',
        features: ['Paver driveways & walkways', 'Patio design & installation', 'Stepping stone pathways', 'Outdoor kitchen prep', 'Edging & borders'],
      },
      {
        title: 'Pergolas & Decks',
        description: 'Custom-designed outdoor structures that extend your living space into the garden. We design pergolas, shade structures, and decks that complement your home\'s architecture.',
        features: ['Custom pergola design', 'Wood & aluminum options', 'Shade sail integration', 'Deck construction', 'Lighting & wiring coordination'],
      },
      {
        title: 'Native Plants',
        description: 'California native and drought-tolerant plantings that thrive in our climate, support local pollinators, and reduce water use. We specialize in xeriscape designs that look lush without the water bill.',
        features: ['California native plant selection', 'Xeriscape design', 'Pollinator gardens', 'Low-water plant palettes', 'Seasonal interest planning'],
      },
    ],
  },
  {
    category: 'Property Care',
    items: [
      {
        title: 'Landscape Maintenance',
        description: 'Regular maintenance that keeps your landscape looking its best year-round. We treat your property with the same care we used to build it.',
        features: ['Weekly & bi-weekly visits', 'Seasonal cleanup', 'Fertilization programs', 'Pest & disease monitoring', 'Storm cleanup'],
      },
      {
        title: 'Irrigation Audits',
        description: 'A poorly tuned irrigation system wastes money and can damage plants. We audit your system, identify inefficiencies, and optimize for water savings.',
        features: ['Full system inspection', 'Coverage & runtime analysis', 'Smart controller programming', 'Leak detection & repair', 'Water district rebate assistance'],
      },
      {
        title: 'Weeding',
        description: 'Hand-weeding and pre-emergent applications to keep unwanted plants out of your garden beds and hardscape joints.',
        features: ['Hand removal', 'Pre-emergent treatments', 'Mulch application', 'Ongoing monitoring'],
      },
      {
        title: 'Tree Trimming',
        description: 'Proper pruning for structure, health, and aesthetics. We follow ISA best practices to keep your trees safe and beautiful.',
        features: ['Crown cleaning & thinning', 'Structural pruning', 'Vista pruning', 'Deadwood removal', 'Palm trimming'],
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">What We Offer</p>
          <h1 className="font-serif text-green-900 text-5xl md:text-7xl font-normal">Services</h1>
          <p className="text-stone-500 mt-6 text-lg max-w-xl leading-relaxed">
            From concept to care — everything your property needs under one roof.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((group) => (
        <section key={group.category} className="py-20 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline gap-4 mb-16">
              <p className="section-label">{group.category}</p>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {group.items.map((service) => (
                <div key={service.title}>
                  <h2 className="font-serif text-green-900 text-2xl mb-4">{service.title}</h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-stone-600">
                        <span className="text-orange-brand mt-0.5 flex-shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="bg-green-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">How It Works</p>
          <h2 className="font-serif text-white text-4xl mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We visit your property, listen to your vision, and assess what\'s possible.' },
              { step: '02', title: 'Design', desc: 'We produce 3D renders and site plans. You see it before we build it.' },
              { step: '03', title: 'Build', desc: 'Our crew executes the plan with precision and quality craftsmanship.' },
              { step: '04', title: 'Care', desc: 'Ongoing maintenance keeps your landscape looking its best year-round.' },
            ].map((step) => (
              <div key={step.step} className="border-t border-white/20 pt-6">
                <p className="font-serif text-orange-brand text-4xl mb-4">{step.step}</p>
                <h3 className="font-serif text-white text-xl mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-green-900 text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-stone-500 mb-8 leading-relaxed">Free consultations for all Design & Build projects. We&apos;re Orange County local and ready to see your space.</p>
          <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
