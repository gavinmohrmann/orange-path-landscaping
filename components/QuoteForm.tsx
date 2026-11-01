'use client'

import { useState } from 'react'
import { reportConversion, CONV_FORM } from '@/components/GoogleTag'

// Short lead form used on landing pages (maintenance). Posts to the same
// FormSubmit inbox as the contact page and fires the Google Ads conversion.
export default function QuoteForm({ subject = 'New website lead — Orange Path', service = '' }: { subject?: string; service?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)
    setSending(true)
    const data = new FormData(e.currentTarget)
    data.append('_subject', subject)
    data.append('_template', 'table')
    data.append('_captcha', 'false')
    if (service) data.append('service', service)
    try {
      const res = await fetch('https://formsubmit.co/ajax/gavin@orangepathlandscaping.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        reportConversion(CONV_FORM)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-900 text-white p-10 text-center">
        <p className="font-serif text-3xl mb-3">Thank you!</p>
        <p className="text-white/70 leading-relaxed">
          Gavin will text or call you within one business day to set up a quick walk-through.
        </p>
      </div>
    )
  }

  const input = 'w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-green-900 transition-colors'
  const label = 'block text-xs tracking-widest uppercase text-stone-400 mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={label}>Name</label>
          <input name="name" type="text" required className={input} />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input name="phone" type="tel" required className={input} />
        </div>
      </div>
      <div>
        <label className={label}>Email</label>
        <input name="email" type="email" className={input} />
      </div>
      <div>
        <label className={label}>Street address or neighborhood</label>
        <input name="location" type="text" required className={input} placeholder="So we can confirm you're in our route area" />
      </div>
      <div>
        <label className={label}>Anything we should know?</label>
        <textarea name="message" rows={3} className={`${input} resize-none`} placeholder="Lot size, current gardener, what's bugging you about the yard..." />
      </div>
      <button type="submit" disabled={sending} className="btn-primary w-full text-center disabled:opacity-60">
        {sending ? 'Sending…' : 'Request a Quote'}
      </button>
      {error && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong — please call or text Gavin at (949) 371-6356.
        </p>
      )}
      <p className="text-stone-400 text-xs text-center">No contracts. Month to month. We respond within one business day.</p>
    </form>
  )
}
