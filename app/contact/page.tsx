'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Formspree endpoint — replace YOUR_FORM_ID with actual ID from formspree.io
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="font-serif text-green-900 text-5xl md:text-7xl font-normal">Contact</h1>
          <p className="text-stone-500 mt-6 text-lg max-w-md leading-relaxed">
            Ready to talk about your project? We&apos;d love to hear about your space.
          </p>
        </div>
      </section>

      {/* Calendly CTA */}
      <section className="bg-green-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-white text-2xl md:text-3xl">The fastest way to get started</p>
            <p className="text-white/60 mt-1">Pick a time that works for you — 30 minutes, no pressure.</p>
          </div>
          <a
            href="https://calendly.com/gavin-orangepathlandscaping/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap shrink-0"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Contact info */}
          <div>
            <div className="space-y-10">
              <div>
                <p className="section-label mb-4">Direct Contact</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Phone</p>
                    <a href="tel:9493716356" className="font-serif text-green-900 text-2xl hover:text-orange-brand transition-colors">
                      (949) 371-6356
                    </a>
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Email</p>
                    <a href="mailto:gavin@orangepathlandscaping.com" className="text-stone-600 hover:text-green-900 transition-colors">
                      gavin@orangepathlandscaping.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="section-label mb-4">Service Area</p>
                <p className="text-stone-600 leading-relaxed">
                  Serving all of Orange County, CA — including Laguna Niguel, Dana Point, San Clemente, Newport Beach, Irvine, Laguna Beach, Mission Viejo, and surrounding communities.
                </p>
              </div>

              <div>
                <p className="section-label mb-4">Credentials</p>
                <div className="space-y-2 text-sm text-stone-600">
                  <p>🎖 Veteran Owned & Operated</p>
                  <p>📋 Licensed: 1146854</p>
                  <p>🌿 Specializing in Native & Drought-Tolerant Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-900 text-white p-12 text-center">
                <p className="font-serif text-3xl mb-4">Thank you!</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We&apos;ve received your message and will be in touch within one business day.
                </p>
                <Link href="/work" className="btn-outline">View Our Work</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">City / Neighborhood</label>
                  <input
                    name="location"
                    type="text"
                    className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">What are you looking for?</label>
                  <select
                    name="service"
                    className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Design & Build">Design & Build (Full Project)</option>
                    <option value="Hardscapes">Hardscapes / Retaining Walls</option>
                    <option value="Pergola / Deck">Pergola / Deck</option>
                    <option value="Property Care">Property Care / Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors resize-none"
                    placeholder="Describe your space, your goals, your timeline..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Send Message
                </button>
                <p className="text-stone-400 text-xs text-center">
                  We respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
