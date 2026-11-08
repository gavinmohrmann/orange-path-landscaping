import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Pavers, Concrete & Retaining Walls — San Juan Capistrano & South OC | Orange Path Landscaping',
  description:
    'Paver patios, walkways and driveways, exposed-aggregate concrete and retaining walls in San Juan Capistrano, Dana Point, San Clemente, Laguna Niguel and Mission Viejo. Veteran-owned, licensed C-27, 10-year workmanship warranty. Call or text (949) 371-6356.',
  openGraph: {
    title: 'Hardscape — Pavers, Concrete & Retaining Walls | Orange Path Landscaping',
    description: 'Paver patios and driveways, exposed-aggregate concrete and retaining walls built on compacted base with a 10-year workmanship warranty. South Orange County.',
    url: 'https://orangepathlandscaping.com/hardscape',
  },
}

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=Orange+Path+Landscaping+San+Juan+Capistrano'

const work = [
  {
    title: 'Paver patios, walkways & driveways',
    price: 'from $15 / sq ft',
    d: 'Interlocking pavers over geotextile and a compacted base, sand-set and edge-restrained so the field stays flat and tight for decades. Driveways get a thicker base for vehicle loads. Random, herringbone or running-bond patterns; borders and inlays on request.',
    bullets: ['Geotextile separation + compacted Class II base', 'Concrete or spiked edge restraint on every edge', 'Polymeric sand joints', 'Driveway-rated base depth'],
  },
  {
    title: 'Exposed-aggregate concrete',
    price: 'from $25 / sq ft',
    d: 'Seeded river stone washed to reveal the stone itself, no dye needed. It is a specialty finish few crews still do well, and it lives or dies on the base underneath, the timing of the exposure wash, and keeping the wash water off everything around it. We demo and haul off the old surface, set steel on chairs, pour, seed, wash and seal.',
    bullets: ['Demolition and haul-off included', '#3 or #4 rebar on chairs, mid-slab', 'Del Rio or Mexican beach pebble', 'Two-coat penetrating sealer'],
  },
  {
    title: 'Retaining walls',
    price: 'quoted per project',
    d: 'Segmental block, natural stone and poured-concrete walls that solve a grade problem and look like they belong. Every wall gets a drained, compacted base and backfill; taller walls are engineered. Stairs and planters built in.',
    bullets: ['Drain rock + perforated pipe behind every wall', 'Engineered when height requires it', 'Block, stone veneer or stucco finish', 'Integrated steps and seat walls'],
  },
]

const projects = [
  { f: 'hardscape-after.png', t: 'Church courtyard labyrinth, San Juan Capistrano', d: 'Two-tone paver labyrinth, every radius paver cut individually.' },
  { f: 'sand-point-built-detail.jpg', t: 'Paver driveway & entry, Dana Point', d: 'Full driveway approach and wide entry steps over compacted base.' },
  { f: 'paver-patio.jpg', t: 'Backyard paver patio', d: '200 sq ft random-pattern patio, tight joints, seamless to the house.' },
  { f: 'hardscape-detail.png', t: 'Labyrinth centerpiece', d: 'Curved paver work has nowhere to hide. This is what careful cutting looks like.' },
]

const steps = [
  { n: '01', t: 'Site visit', d: 'Gavin walks the space with you, measures, checks grade and drainage, and talks through materials. Usually within a week.' },
  { n: '02', t: 'Firm proposal', d: 'A written scope and a fixed price, not an estimate. Marked plan of the work area so there is no argument later about what was included.' },
  { n: '03', t: 'Build', d: 'Demo, base, steel, pour or set, finish. One crew start to finish; Gavin on site. Most patios and driveways run one to two weeks including cure.' },
  { n: '04', t: 'Warranty', d: '10-year workmanship warranty on paver and wall installation. If a paver settles or an edge moves, we fix it.' },
]

const faqs = [
  {
    q: 'What does a paver patio cost?',
    a: 'Paver installation starts around $15 per square foot and most patios land between $15 and $22 depending on the paver, the pattern, access, and how much demo and grading the site needs. A typical 300 to 400 sq ft backyard patio runs $6,000 to $9,000. Driveways are priced a little higher for the thicker base. You get a fixed price in writing before we start.',
  },
  {
    q: 'What does exposed-aggregate concrete cost?',
    a: 'From $25 per square foot including demolition and haul-off, base, steel, the seeded stone finish and sealer. That rate assumes a project of about 1,000 square feet or more; smaller pours cost more per foot because the setup, finishing crew and dump runs do not shrink with the slab.',
  },
  {
    q: 'Pavers or concrete?',
    a: 'Pavers can be lifted and reset if a tree root or a utility ever moves them, and they never crack. Concrete gives you a seamless surface and, in exposed aggregate, a finish that pavers cannot match. We install both and will tell you which one fits your site rather than the one we feel like pouring that week.',
  },
  {
    q: 'Do you do small jobs?',
    a: 'Minimum project sizes apply. Setup, base prep and a finishing crew cost about the same for 150 square feet as for 500, so very small areas are expensive per foot. If your project is small, ask; sometimes it makes sense to pair it with a walkway or a wall.',
  },
  {
    q: 'Who does the work?',
    a: 'Our own crew, with Gavin on site. For exposed-aggregate pours we bring in a dedicated concrete finishing crew we have worked with for years; everything else is in-house. Licensed C-27 #1146854, general liability and workers’ comp.',
  },
]

export default function HardscapePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="section-label mb-4">Hardscape · South Orange County</p>
            <h1 className="font-serif text-green-900 text-4xl md:text-6xl font-normal leading-tight">
              Pavers, concrete and retaining walls built to still look right in year ten.
            </h1>
            <p className="text-stone-500 mt-6 text-lg max-w-xl leading-relaxed">
              Paver patios, walkways and driveways. Exposed-aggregate concrete. Retaining walls and steps. All of it on a
              compacted base with proper drainage, built by one crew with the owner on site, and backed by a 10-year
              workmanship warranty.
            </p>
            <p className="text-stone-500 mt-4 text-lg max-w-xl leading-relaxed">
              Most people know they want pavers or concrete but don&apos;t have a layout yet. That&apos;s fine. If you build with us,
              the design concept is on us: we draw it, you see it before anything is poured.{' '}
              <Link href="/packages" className="text-green-900 underline">How our design packages work</Link>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="tel:9493716356" className="btn-primary">Call or Text (949) 371-6356</a>
              <a href="#quote" className="inline-block px-8 py-4 border border-green-900 text-green-900 text-sm tracking-widest uppercase font-medium hover:bg-green-900 hover:text-white transition-colors">
                Request a Site Visit
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest uppercase text-stone-500">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
                <span className="text-orange-brand">★★★★★</span> 5.0 on Google
              </a>
              <span>Veteran Owned</span>
              <span>Licensed C-27 #1146854</span>
              <span>Insured</span>
              <span>10-Year Workmanship Warranty</span>
            </div>
          </div>
          <div className="md:col-span-2 relative aspect-[4/5] hidden md:block">
            <Image src="/images/projects/hardscape-after.png" alt="Paver labyrinth courtyard built by Orange Path Landscaping in San Juan Capistrano" fill className="object-cover" sizes="40vw" priority />
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="bg-green-900 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-orange-light mb-2">Pavers</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-white text-5xl">from $15</span>
              <span className="text-white/50 text-sm">/ sq ft</span>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-orange-light mb-2">Exposed-aggregate concrete</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-white text-5xl">from $25</span>
              <span className="text-white/50 text-sm">/ sq ft</span>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed">
            Fixed price in writing after a site visit. Includes demo and haul-off, base, steel and finish. Minimum project
            sizes apply; final pricing depends on access, existing conditions and complexity.
          </p>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">What we build</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-12 max-w-2xl">The base is the job. The surface is what you see.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {work.map((w) => (
              <div key={w.title} className="bg-cream p-8">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-serif text-green-900 text-2xl">{w.title}</h3>
                </div>
                <p className="text-orange-brand text-sm mb-4">{w.price}</p>
                <p className="text-stone-500 leading-relaxed mb-5">{w.d}</p>
                <ul className="space-y-2 text-stone-600 text-sm">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-orange-brand">✓</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">Recent hardscape</p>
              <h2 className="font-serif text-green-900 text-4xl md:text-5xl">Built, not rendered</h2>
            </div>
            <Link href="/work" className="text-sm tracking-widest uppercase text-green-900 hover:text-orange-brand transition-colors">See all work →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p) => (
              <figure key={p.f}>
                <div className="relative aspect-square">
                  <Image src={`/images/projects/${p.f}`} alt={p.t} fill className="object-cover" sizes="25vw" />
                </div>
                <figcaption className="mt-3">
                  <p className="text-green-900 text-sm font-medium">{p.t}</p>
                  <p className="text-stone-500 text-sm">{p.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">How it works</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-12">Site visit to warranty, one crew.</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-orange-brand text-4xl mb-3">{s.n}</p>
                <h3 className="font-serif text-green-900 text-2xl mb-2">{s.t}</h3>
                <p className="text-stone-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us + FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <p className="section-label mb-4">Why Orange Path</p>
            <h2 className="font-serif text-green-900 text-3xl mb-6">We design it, build it, and maintain it.</h2>
            <ul className="space-y-4 text-stone-600">
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Owner on site.</strong> Gavin runs the job and answers his phone. No sales rep, no hand-off.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Fixed price, marked plan.</strong> The work area is drawn on a plan in the proposal so the scope is never a judgment call.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">10-year workmanship warranty</strong> on paver and wall installation.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Licensed and insured.</strong> CSLB #1146854 (C-27), general liability and workers&apos; comp. Certificates on request.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Design in-house.</strong> If you want to see it first, we produce 3D renders and a planting plan to go with the hardscape.</span></li>
            </ul>
            <p className="text-stone-400 text-sm mt-8">
              Serving San Juan Capistrano, Dana Point, San Clemente, Laguna Niguel, Laguna Beach, Mission Viejo, Ladera Ranch and Rancho Mission Viejo.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="section-label mb-4">Common questions</p>
            <div className="divide-y divide-stone-200">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-serif text-green-900 text-xl mb-2">{f.q}</h3>
                  <p className="text-stone-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">Start here</p>
            <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-6">A site visit and a firm number.</h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Send the form or text Gavin a photo of the space. He will come out, measure, talk through materials, and send a
              written proposal with a fixed price. Site visits are usually within a week.
            </p>
            <a href="tel:9493716356" className="font-serif text-green-900 text-3xl hover:text-orange-brand transition-colors">(949) 371-6356</a>
            <p className="text-stone-400 text-sm mt-2">Call or text · Mon–Sat 7am–6pm</p>
            <p className="text-stone-400 text-sm mt-8">
              Want the planting and irrigation designed with it? See our <Link href="/packages" className="text-green-900 underline">design &amp; build packages</Link>.
            </p>
          </div>
          <div>
            <QuoteForm subject="New HARDSCAPE lead — website /hardscape" service="Hardscape" footnote="Free site visit. Fixed price in writing. We respond within one business day." />
          </div>
        </div>
      </section>
    </>
  )
}
