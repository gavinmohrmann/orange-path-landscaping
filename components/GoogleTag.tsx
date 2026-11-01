'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Ads tag + conversion events.
// Account: AW-18410284862 (Orange Path Landscaping)
export const GADS_ID = 'AW-18410284862'
export const CONV_FORM = 'AW-18410284862/jN9qCJ6VgLAdEL7O2spE' // "Website quote form"
export const CONV_CALL = 'AW-18410284862/C-JNCKGVgLAdEL7O2spE' // "Click to call"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function reportConversion(sendTo: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: sendTo })
  }
}

export default function GoogleTag() {
  // Fire the click-to-call conversion on any tel: link, site-wide.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]')
      if (a) reportConversion(CONV_CALL)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gads-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
      </Script>
    </>
  )
}
