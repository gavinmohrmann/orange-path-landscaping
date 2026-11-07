import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Landscape Maintenance San Juan Capistrano & South OC — from $300/mo | Orange Path Landscaping',
  description:
    'Weekly landscape maintenance in San Juan Capistrano, Dana Point, San Clemente, Laguna Niguel and Mission Viejo. Veteran-owned, licensed C-27, insured, 5-star rated. Weekly service from $300/month. Call or text (949) 371-6356 for a quote.',
  openGraph: {
    title: 'Landscape Maintenance — South Orange County | Orange Path Landscaping',
    description: 'Weekly yard and landscape maintenance from $300/month. Veteran-owned, licensed, insured, 5 stars on Google.',
    url: 'https://orangepathlandscaping.com/maintenance',
  },
}

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=Orange+Path+Landscaping+San+Juan+Capistrano'

const included = [
  { t: 'Beds kept weed-free, no chemicals', d: 'Hand weeding every visit, not a once-a-month blitz and not a spray bottle. Weeds never get big enough to seed.' },
  { t: 'Pruning done on a schedule', d: 'Shrubs shaped to the plant, not sheared into balls. Hedges, perennials and ornamental grasses cut at the right time of year.' },
  { t: 'Mow, edge, blow (quietly)', d: 'Battery mowers, trimmers and blowers, about half the noise of gas and no exhaust. Turf mowed and edged where you have it; walkways, patio and driveway blown clean before we leave.' },
  { t: 'Irrigation checked every visit', d: 'We run the zones, catch broken heads and clogged emitters, and adjust the controller with the seasons. Small fixes are handled on the spot.' },
  { t: 'Debris and leaf removal', d: 'Everything we cut leaves with us. Seasonal leaf drop is cleared as it falls, not after it mats.' },
  { t: 'A crew that knows your yard', d: 'Same small crew every week, so they notice when something changes. You text Gavin directly if anything comes up.' },
]

const reviews = [
  {
    name: 'Joe Petrone',
    city: 'San Clemente',
    quote:
      'He takes ownership — standing behind the plants with a warranty and staying on as our landscape property manager, accountable for how the yard ages rather than walking away on day one.',
  },
  {
    name: 'Amanda Strader',
    city: 'Orange County',
    quote:
      'Gavin and his team went above and beyond. The whole experience was professional, friendly, and completely stress-free. If you want a team that cares, thinks outside the box, and delivers beautiful results, Orange Path Landscaping is it!',
  },
  {
    name: 'Lori Moe',
    city: 'South Orange County',
    quote:
      'His crew was polite and very conscientious. Gavin came up with a preliminary plan and then was very patient as we fine tuned the look we wanted.',
  },
  {
    name: 'Tim Morissette',
    city: 'Property manager',
    quote:
      'What started as an overgrown, neglected yard truly looked like a jungle — but Gavin came in, cleaned everything up, and completely brought it back to life. He is extremely diligent, reliable, and creative.',
  },
]

const areas = ['San Juan Capistrano', 'Dana Point', 'San Clemente', 'Laguna Niguel', 'Mission Viejo', 'Ladera Ranch', 'Laguna Beach', 'Rancho Mission Viejo']

const faqs = [
  {
    q: 'What does weekly service cost?',
    a: 'Most homes in our route area run $300 to $450 a month for weekly service, depending on lot size, how much is planted versus hardscape, and slope. Your monthly price buys a set amount of crew time on site each visit; we give you a firm number after a 15-minute walk-through, and it stays fixed. Bi-weekly service is available at a lower monthly rate.',
  },
  {
    q: 'Is there a contract?',
    a: 'No. Service is month to month, invoiced once a month. Either of us can end it with 30 days’ notice.',
  },
  {
    q: 'What is not included?',
    a: 'Irrigation repairs beyond a head or emitter swap, tree work above about 12 feet, fertilization programs, plant replacement and seasonal color are quoted separately at published rates. Repairs under $250 are handled the same visit and photo-documented; anything larger gets a written price first.',
  },
  {
    q: 'Do you use gas blowers?',
    a: 'No. Our route crew runs battery mowers, trimmers and blowers. About half the noise of a gas crew and no exhaust, which your neighbors will notice.',
  },
  {
    q: 'What if you installed my plants?',
    a: 'Our standard planting warranty is 60 days. While we maintain the property, every plant we installed carries a full one-year replacement warranty at no charge.',
  },
]

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="section-label mb-4">Property Care · South Orange County</p>
            <h1 className="font-serif text-green-900 text-4xl md:text-6xl font-normal leading-tight">
              Weekly landscape maintenance that keeps your yard looking finished.
            </h1>
            <p className="text-stone-500 mt-6 text-lg max-w-xl leading-relaxed">
              Same small crew every week. Beds weeded by hand, no chemicals. Battery equipment, about half as loud as a gas crew.
              Irrigation checked every visit, and an owner you can text. Serving San Juan Capistrano and the surrounding coast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="tel:9493716356" className="btn-primary">Call or Text (949) 371-6356</a>
              <a href="#quote" className="inline-block px-8 py-4 border border-green-900 text-green-900 text-sm tracking-widest uppercase font-medium hover:bg-green-900 hover:text-white transition-colors">
                Request a Quote
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest uppercase text-stone-500">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
                <span className="text-orange-brand">★★★★★</span> 5.0 on Google
              </a>
              <span>Veteran Owned</span>
              <span>Licensed C-27 #1146854</span>
              <span>Insured</span>
              <span>Chemical-Free Weeding</span>
              <span>Quiet Battery Equipment</span>
            </div>
          </div>
          <div className="md:col-span-2 relative aspect-[4/5] hidden md:block">
            <Image src="/images/projects/riverstreet-built-1-oct28.jpg" alt="Freshly maintained planting beds in San Juan Capistrano" fill className="object-cover" sizes="40vw" priority />
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="bg-green-900 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-orange-light mb-2">Weekly service</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-white text-5xl">from $300</span>
              <span className="text-white/50 text-sm">/ month</span>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed md:col-span-2">
            Firm monthly price after a 15-minute walk-through. No contract, invoiced monthly, cancel with 30 days&apos; notice.
            Bi-weekly service available. Most homes in our area land between $300 and $450 depending on lot size, planting and slope.
          </p>
        </div>
      </section>

      {/* Price = time */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">How we price</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-6 max-w-2xl">Your monthly price buys crew time</h2>
          <p className="text-green-900/80 text-lg leading-relaxed max-w-3xl mb-12">
            Every plan works the same way: your price buys a set amount of two-person crew time on site, every visit. Lot size, how much is planted, slope and what you want done decide how many minutes your property needs. More minutes, higher price.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { price: '$300', time: 'About 40 minutes', crew: 'two crew, weekly', fit: 'Typical quarter-acre front and back: mow, edge, blow, a pass through the beds, debris hauled.' },
              { price: '$400', time: 'About 50 minutes', crew: 'two crew, weekly', fit: 'Larger lots or heavier planting: everything above plus hedges, more bed work, roses.' },
              { price: '$500+', time: 'An hour or more', crew: 'two crew, weekly', fit: 'Estate lots, hedge-heavy and slope properties, or anything that needs real time every week.' },
            ].map((t) => (
              <div key={t.price} className="bg-white border border-green-900/10 rounded-lg p-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-green-900 text-4xl">{t.price}</span>
                  <span className="text-green-900/50 text-sm">/ month</span>
                </div>
                <p className="text-orange-brand font-medium mb-1">{t.time}</p>
                <p className="text-green-900/50 text-xs uppercase tracking-widest mb-4">{t.crew}</p>
                <p className="text-green-900/80 leading-relaxed">{t.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-green-900/60 text-sm mt-8 max-w-3xl">
            Bi-weekly plans get roughly double the time per visit at the same monthly price. Fertilizer programs, rose and pest treatments, seasonal cutbacks, plant replacement, irrigation repairs beyond a head or emitter, and tree work over 12 feet are quoted separately. We put the exact minutes your price buys in writing with every quote.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Every visit</p>
          <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-14 max-w-2xl">What a weekly visit includes</h2>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
            {included.map((i) => (
              <div key={i.t}>
                <h3 className="font-serif text-green-900 text-xl mb-2">{i.t}</h3>
                <p className="text-stone-500 leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-cream py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['native-plants-1.jpg', 'riverstreet-built-2.jpg', 'sand-point-built-1.jpg', 'riverstreet-built-4.jpg'].map((f) => (
            <div key={f} className="relative aspect-square">
              <Image src={`/images/projects/${f}`} alt="Orange Path Landscaping maintained property" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">Why Orange Path</p>
            <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-6">Built by the people who maintain it</h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              We design and build landscapes, so our maintenance crew knows what a plant is supposed to look like in year three,
              not just how to make it look trimmed today. That changes how we prune, how we water, and what we tell you when
              something needs attention.
            </p>
            <ul className="space-y-4 text-stone-600">
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Owner you can text.</strong> Gavin runs the company and answers his phone. No call center, no account rep.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Licensed and insured.</strong> CSLB #1146854 (C-27), general liability and workers&apos; comp. Certificate on request.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Battery equipment.</strong> Quiet, no exhaust. Your neighbors will thank you.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Photos when it matters.</strong> If we handle something beyond the routine, you get a text with before-and-after photos.</span></li>
              <li className="flex gap-3"><span className="text-orange-brand">✓</span><span><strong className="text-green-900">Veteran owned, local.</strong> Based in San Juan Capistrano. Tight route, so we are never far.</span></li>
            </ul>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/projects/riverstreet-built-3.jpg" alt="Maintained landscape beds, San Juan Capistrano" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">Reviews</p>
              <h2 className="font-serif text-green-900 text-4xl md:text-5xl">What clients say</h2>
            </div>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase text-green-900 hover:text-orange-brand transition-colors">
              <span className="text-orange-brand">★★★★★</span> 5.0 · Read all reviews on Google →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <blockquote key={r.name} className="bg-cream p-8">
                <p className="text-orange-brand text-sm mb-3">★★★★★</p>
                <p className="text-stone-700 leading-relaxed mb-5">&ldquo;{r.quote}&rdquo;</p>
                <footer className="text-xs tracking-widest uppercase text-stone-400">{r.name} · {r.city} · Google review</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <p className="section-label mb-4">Service area</p>
            <h2 className="font-serif text-green-900 text-3xl mb-6">South Orange County</h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              We keep the route tight so the crew spends its time in your yard, not on the freeway. Weekly maintenance is available in:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-stone-600">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="text-stone-400 text-sm mt-6">Outside these cities? Ask. Commercial and HOA properties welcome.</p>
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
            <p className="section-label mb-4">Get a quote</p>
            <h2 className="font-serif text-green-900 text-4xl md:text-5xl mb-6">Fifteen minutes and a firm number.</h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Send the form or text Gavin. He will walk the property with you, tell you what the yard needs, and give you a
              fixed monthly price on the spot. First visit is usually within a week.
            </p>
            <a href="tel:9493716356" className="font-serif text-green-900 text-3xl hover:text-orange-brand transition-colors">(949) 371-6356</a>
            <p className="text-stone-400 text-sm mt-2">Call or text · Mon–Sat 7am–6pm</p>
            <p className="text-stone-400 text-sm mt-8">
              Looking for a full redesign instead? See our <Link href="/packages" className="text-green-900 underline">design &amp; build packages</Link>.
            </p>
          </div>
          <div>
            <QuoteForm subject="New MAINTENANCE lead — website /maintenance" service="Property Care" />
          </div>
        </div>
      </section>
    </>
  )
}
