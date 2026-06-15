import Link from 'next/link'

const packages = [
  {
    name: 'Essential',
    price: '$995',
    description: 'Everything you need to confidently plan your outdoor project — at our most accessible price.',
    scope: 'Backyard & side yards',
    highlight: false,
    includes: [
      '2D CAD Landscape Plan',
      'Plant, hardscape & amenities design',
      'Curated plant list & material list',
      'In-person site consultation',
    ],
    notIncluded: [
      '3D photorealistic renders',
      'Revision rounds',
      'Night render & lighting plan',
      'Project manager',
      'Cost advisor',
    ],
  },
  {
    name: 'Classic',
    price: '$1,395',
    description: 'A guided design experience with photorealistic renders and a dedicated project manager to bring your vision to life.',
    scope: 'Backyard & side yards',
    highlight: true,
    badge: 'Most Popular',
    includes: [
      '2D CAD Landscape Plan',
      'Plant, hardscape & amenities design',
      'Curated plant list & material list',
      'In-person site consultation & kick-off call',
      'Photorealistic 3D renders (day)',
      '1 revision round',
      'Dedicated project manager',
    ],
    notIncluded: [
      'Night render & lighting plan',
      'Cost advisor',
    ],
  },
  {
    name: 'Signature',
    price: '$1,995',
    description: 'Our most comprehensive design experience — day-to-night renders, cost advisor, and expert guidance from start to finish.',
    scope: 'Entire backyard & side yards',
    highlight: false,
    includes: [
      '2D CAD Landscape Plan',
      'Plant, hardscape & amenities design',
      'Curated plant list & material list',
      'In-person site consultation & kick-off call',
      'Photorealistic 3D renders (day)',
      'Night render & lighting plan',
      '2 revision rounds',
      'Dedicated project manager',
      'Cost advisor',
    ],
    notIncluded: [],
  },
  {
    name: 'Premium',
    price: '$3,495',
    description: 'Full-property design including exterior architecture — paint, windows, doors — with a master designer and check-in calls throughout.',
    scope: 'Entire property',
    highlight: false,
    includes: [
      'Custom 2D landscape CAD plans',
      'Plant, hardscape & amenities design',
      'Curated plant & materials list',
      'In-person site consultation & kick-off call',
      'Photorealistic 3D renders (day & night)',
      'Night render & lighting plan',
      'Exterior design (paint, windows, doors)',
      '3 revision rounds',
      'Master designer',
      'Dedicated project manager',
      'Check-in design calls',
      'Cost advisor',
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: 'What makes Orange Path different from online design services?',
    a: 'Every consultation is in-person. We walk your property, understand how you live in your space, and design with the actual light, soil, and microclimate of your yard in mind — not a satellite photo.',
  },
  {
    q: 'What does the in-person consultation include?',
    a: 'We visit your property, measure the space, photograph existing conditions, and have a focused conversation about your goals, timeline, and budget. This is included in every package.',
  },
  {
    q: 'Do you also build what you design?',
    a: 'Yes. We offer full design-build services, meaning we can take your approved design all the way through construction. Ask us about bundled design + build pricing.',
  },
  {
    q: 'How long does the design process take?',
    a: 'Most designs are delivered within 2–4 weeks of the site consultation. Premium projects with multiple revision rounds may take 4–6 weeks.',
  },
  {
    q: 'Can I use the design plans with my own contractor?',
    a: 'Absolutely. Your plans are yours to use however you like — with us, with another contractor, or as a phased roadmap you build over time.',
  },
]

const constructionServices = [
  {
    name: 'Artificial Turf',
    rate: '$7.98',
    unit: 'per sq ft',
    description: 'Professional installation of artificial turf including base prep, compaction, and infill. No mowing, no watering — just a clean lawn year-round.',
    notes: 'Material cost included in rate.',
  },
  {
    name: 'Sod Installation',
    rate: '$6.98',
    unit: 'per sq ft',
    description: 'Fresh sod installed over prepared soil — graded, rolled, and ready to take root. Best for homeowners who want a real lawn fast.',
    notes: 'Material cost included in rate.',
  },
  {
    name: 'Paver Installation',
    rate: '$14.98',
    unit: 'per sq ft (labor)',
    description: 'Full paver installation including excavation, compacted gravel base, sand bed, laying, and joint sand. Driveways, patios, walkways, and pool decks.',
    notes: 'Paver material cost is additional and varies by product selection.',
  },
  {
    name: 'Concrete — Sand Finish',
    rate: '$13.00',
    unit: 'per sq ft',
    description: 'Standard broom or sand finish concrete. Clean, durable, and cost-effective for driveways, walkways, and utility slabs.',
    notes: 'Material and labor included.',
  },
  {
    name: 'Concrete — Top Cast',
    rate: '$15.00',
    unit: 'per sq ft',
    description: 'Exposed aggregate or top-cast finish concrete for a more refined, textured look. Popular for patios and front entries.',
    notes: 'Material and labor included.',
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">Design Services</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-normal">Packages</h1>
          <p className="text-white/55 mt-6 text-lg max-w-xl leading-relaxed">
            Professional landscape design delivered with an in-person consultation — so your plan actually fits your property, your lifestyle, and your budget.
          </p>
        </div>
      </section>

      {/* Differentiator bar */}
      <section className="bg-orange-brand py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-white text-sm tracking-wide text-center">
          <span className="font-medium">✓ Every package includes an in-person site visit</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="font-medium">✓ All designs delivered as full CAD plans</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="font-medium">✓ Orange County, CA — locally owned & operated</span>
        </div>
      </section>

      {/* Packages grid */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col ${
                  pkg.highlight
                    ? 'bg-green-900 text-white ring-2 ring-orange-brand'
                    : 'bg-white text-stone-800'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-orange-brand text-white text-xs tracking-widest uppercase px-3 py-1">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 border-b border-current/10">
                  <p className={`text-xs tracking-widest uppercase mb-2 ${pkg.highlight ? 'text-orange-light' : 'text-orange-brand'}`}>
                    {pkg.name}
                  </p>
                  <p className={`font-serif text-4xl mb-1 ${pkg.highlight ? 'text-white' : 'text-green-900'}`}>
                    {pkg.price}
                  </p>
                  <p className={`text-xs mb-4 ${pkg.highlight ? 'text-white/50' : 'text-stone-400'}`}>
                    {pkg.scope}
                  </p>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? 'text-white/70' : 'text-stone-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 shrink-0 ${pkg.highlight ? 'text-orange-light' : 'text-green-700'}`}>✓</span>
                        <span className={pkg.highlight ? 'text-white/80' : 'text-stone-600'}>{item}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 shrink-0 text-stone-300">—</span>
                        <span className={pkg.highlight ? 'text-white/30' : 'text-stone-300'}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/gavin-orangepathlandscaping/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 px-6 text-sm tracking-widest uppercase font-medium transition-colors ${
                      pkg.highlight
                        ? 'bg-orange-brand text-white hover:bg-orange-light'
                        : 'border border-green-900 text-green-900 hover:bg-green-900 hover:text-white'
                    }`}
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-400 text-sm mt-10">
            Not sure which package is right for you?{' '}
            <a href="https://calendly.com/gavin-orangepathlandscaping/30min" target="_blank" rel="noopener noreferrer" className="text-green-900 underline underline-offset-2 hover:text-orange-brand transition-colors">
              Book a free 30-minute call
            </a>{' '}
            and we'll help you figure it out.
          </p>
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
          <p className="text-xs text-stone-400 tracking-wide uppercase mb-14">
            ⚠ Applies to properties under 8,000 sq ft. Contact us for larger properties.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white p-8 border border-stone-100">
              <p className="section-label mb-3">Basic</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-green-900 text-4xl">$95</span>
                <span className="text-stone-400 text-sm">/ month</span>
              </div>
              <p className="text-stone-400 text-xs tracking-wide uppercase mb-6">1 visit per month</p>
              <ul className="space-y-3">
                {['Mowing', 'Edging', 'Pruning as needed'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                    <span className="text-green-700">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/gavin-orangepathlandscaping/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center py-3 px-6 text-sm tracking-widest uppercase font-medium border border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-green-900 p-8">
              <p className="text-xs tracking-widest uppercase text-orange-light mb-3">Standard</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-white text-4xl">$145</span>
                <span className="text-white/50 text-sm">/ month</span>
              </div>
              <p className="text-white/40 text-xs tracking-wide uppercase mb-6">Up to 2 visits per month</p>
              <ul className="space-y-3">
                {['Mowing', 'Edging', 'Pruning as needed'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="text-orange-light">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/gavin-orangepathlandscaping/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center py-3 px-6 text-sm tracking-widest uppercase font-medium bg-orange-brand text-white hover:bg-orange-light transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
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
          <h2 className="font-serif text-white text-4xl mb-4">Ready to Start Your Design?</h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            Book a free 30-minute consultation and we'll walk you through the right package for your project.
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
