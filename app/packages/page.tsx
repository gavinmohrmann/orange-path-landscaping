import Link from 'next/link'

const faqs = [
  {
    q: 'What makes Orange Path different from online design services?',
    a: 'Every project starts in person. We walk your property, understand how you live in your space, and design with the actual light, soil, and microclimate of your yard in mind, not a satellite photo.',
  },
  {
    q: 'What does the site walk include?',
    a: 'We visit your property, measure the space, photograph existing conditions, and have a focused conversation about your goals, timeline, and budget. There is no charge for it.',
  },
  {
    q: 'What does the design cost?',
    a: 'Nothing. We draw the concept, present it to you in person along with a price to build it, and the full plan set comes with your construction contract. The design is free because we are the ones who build it.',
  },
  {
    q: 'How long does the design process take?',
    a: 'Most concepts are presented within 2 to 4 weeks of the site walk. Larger properties may take 4 to 6 weeks.',
  },
  {
    q: 'Can I buy the design and use my own contractor?',
    a: 'We no longer sell designs separately. Our concepts are drawn for our own crew to build, so the plans stay with Orange Path until there is a construction contract. If you decide not to move forward, you owe nothing.',
  },
]

const constructionServices = [
  {
    name: 'Artificial Turf',
    rate: '$9.50',
    unit: 'per sq ft',
    description: 'Professional installation of artificial turf including base prep, compaction, and infill. No mowing, no watering — just a clean lawn year-round.',
    notes: 'Material cost included in rate.',
  },
  {
    name: 'Sod Installation',
    rate: '$7.00',
    unit: 'per sq ft',
    description: 'Fresh sod installed over prepared soil — graded, rolled, and ready to take root. Best for homeowners who want a real lawn fast.',
    notes: 'Material cost included in rate.',
  },
  {
    name: 'Paver Installation',
    rate: '$18.00',
    unit: 'per sq ft',
    description: 'Full paver installation including excavation, compacted gravel base, sand bed, laying, and joint sand. Driveways, patios, walkways, and pool decks.',
    notes: 'Includes a $3/sq ft paver allowance; upgraded pavers priced on request.',
  },
  {
    name: 'Concrete — Sand Finish',
    rate: '$13.50',
    unit: 'per sq ft',
    description: 'Standard broom or sand finish concrete. Clean, durable, and cost-effective for driveways, walkways, and utility slabs.',
    notes: 'Material and labor included.',
  },
  {
    name: 'Concrete — Top Cast',
    rate: '$15.50',
    unit: 'per sq ft',
    description: 'A surface retarder is applied to the fresh pour and washed off to expose the aggregate already in the concrete mix. Textured and refined, at a cost-effective price point. Popular for patios and front entries.',
    notes: 'Material and labor included.',
  },
  {
    name: 'Concrete — Seeded Exposed Aggregate',
    rate: '$25.00',
    unit: 'per sq ft',
    description: 'Decorative stone is broadcast onto the fresh surface, pressed in, and exposure-washed to reveal it — so you choose the stone and control the color and texture. Includes demolition and haul-off, compacted base, steel reinforcement, and a two-coat penetrating sealer. A specialty finish few crews still do well.',
    notes: 'Minimum project size applies. Small areas price higher per sq ft.',
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">Design &amp; Build</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-normal">Design &amp; Pricing</h1>
          <p className="text-white/55 mt-6 text-lg max-w-xl leading-relaxed">
            The design concept is on us when we build it. It starts with an in-person site walk, so the plan fits your property, your lifestyle, and your budget.
          </p>
        </div>
      </section>

      {/* Differentiator bar */}
      <section className="bg-orange-brand py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-white text-sm tracking-wide text-center">
          <span className="font-medium">✓ Every project starts with an in-person site walk</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="font-medium">✓ Design concept at no charge</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="font-medium">✓ Orange County, CA — locally owned & operated</span>
        </div>
      </section>

      {/* Design-Build: concept included */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="section-label mb-4">Design-Build</p>
            <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-5">The concept is on us.</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Walk the site with Gavin, tell us the budget, and we&apos;ll draw the concept: a rendered view and a plan, presented in person.
              If you build with us, there&apos;s no design fee; the full plan set comes with your construction contract.
            </p>
            <p className="text-stone-500 leading-relaxed">
              The design is free because we&apos;re the ones who build it. If you decide not to move forward, you owe nothing.
            </p>
          </div>
          <div className="md:col-span-2 bg-green-900 p-8">
            <p className="text-xs tracking-widest uppercase text-orange-light mb-3">How it works</p>
            <ol className="space-y-3 text-white/85 text-sm leading-relaxed list-decimal list-inside">
              <li>Site walk and budget conversation</li>
              <li>We draw the concept and present it to you</li>
              <li>Build contract: plan set delivered, no design fee</li>
            </ol>
            <a href="/contact" className="mt-7 block text-center py-3 px-6 text-sm tracking-widest uppercase font-medium bg-orange-brand text-white hover:bg-orange-light transition-colors">
              Book a Site Walk
            </a>
          </div>
        </div>
      </section>

      {/* Construction Pricing */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Construction Services</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-4">Build Pricing</h2>
          <p className="text-stone-500 max-w-xl leading-relaxed mb-14">
            Transparent, per-square-foot pricing on the installations we do most. Every project starts with a site visit to confirm scope before any numbers are locked in.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((svc) => (
              <div key={svc.name} className="border border-stone-100 p-8">
                <p className="section-label mb-3">{svc.name}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-green-900 text-4xl">{svc.rate}</span>
                  <span className="text-stone-400 text-sm">{svc.unit}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mt-4 mb-3">{svc.description}</p>
                <p className="text-xs text-stone-400 italic">{svc.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-sm mt-10">
            Minimum project sizes may apply. Contact us for a site-specific estimate.
          </p>
        </div>
      </section>

      {/* Property Care */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Property Care</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-4">Maintenance Plans</h2>
          <p className="text-stone-500 max-w-xl leading-relaxed mb-2">
            Ongoing care to keep your landscape looking its best — handled by the same team that knows your property.
          </p>
          <div className="max-w-md mb-8">
            <div className="bg-green-900 p-8">
              <p className="text-xs tracking-widest uppercase text-orange-light mb-3">Maintenance</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-white text-4xl">from $300</span>
                <span className="text-white/50 text-sm">/ month</span>
              </div>
              <p className="text-white/40 text-xs tracking-wide uppercase mb-6">Weekly visits</p>
              <ul className="space-y-3">
                {['Mowing', 'Edging', 'Pruning as needed', 'Bed weeding', 'Debris blow-down'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="text-orange-light">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/maintenance"
                className="mt-8 block text-center py-3 px-6 text-sm tracking-widest uppercase font-medium bg-orange-brand text-white hover:bg-orange-light transition-colors"
              >
                See Maintenance Details
              </Link>
            </div>
          </div>
          <p className="text-xs text-stone-400 max-w-xl leading-relaxed">
            * Pricing is based on standard residential properties. Surcharges may apply based on overall property size and slope.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-green-900 text-4xl text-center mb-14">FAQs</h2>
          <div className="divide-y divide-stone-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-serif text-green-900 text-xl mb-3">{faq.q}</h3>
                <p className="text-stone-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-white text-4xl mb-4">Ready to See Your Yard on Paper?</h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            Book a free 30-minute call and we'll set up a site walk. The design concept is on us.
          </p>
          <a
            href="https://calendly.com/gavin-orangepathlandscaping/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  )
}
