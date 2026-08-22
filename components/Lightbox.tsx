'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  className?: string
  sizes?: string
}

export default function Lightbox({ src, alt, className = '', sizes }: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View larger: ${alt}`}
        className="group relative block w-full h-full cursor-zoom-in overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] bg-green-950/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl leading-none font-light"
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-5xl cursor-default"
          >
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center text-white/60 text-xs tracking-wide px-6">
            {alt}
          </p>
        </div>
      )}
    </>
  )
}
