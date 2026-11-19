'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Slide = { src: string; alt: string }

type Props = {
  src: string
  alt: string
  className?: string
  sizes?: string
  /** Optional extra photos. The thumbnail shows `src`; opening it lets the viewer step through all of them. */
  gallery?: Slide[]
}

export default function Lightbox({ src, alt, className = '', sizes, gallery }: Props) {
  const slides: Slide[] = gallery && gallery.length > 0 ? gallery : [{ src, alt }]
  const many = slides.length > 1

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const close = useCallback(() => setOpen(false), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (many && e.key === 'ArrowRight') next()
      if (many && e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, next, prev, many])

  const current = slides[index] ?? slides[0]

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0)
          setOpen(true)
        }}
        aria-label={many ? `View ${slides.length} photos: ${alt}` : `View larger: ${alt}`}
        className="group relative block w-full h-full cursor-zoom-in overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
        />
        {many && (
          <span className="absolute bottom-3 right-3 bg-green-950/80 text-white text-xs tracking-widest uppercase px-3 py-2">
            {slides.length} photos · tap to view
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[100] bg-green-950/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-3 right-3 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white text-3xl leading-none font-light cursor-pointer"
          >
            ×
          </button>

          {many && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Previous photo"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white text-3xl leading-none cursor-pointer"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Next photo"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white text-3xl leading-none cursor-pointer"
              >
                ›
              </button>
            </>
          )}

          <div
            onClick={(e) => {
              // One photo: tapping it closes. Several: tapping steps to the next one.
              if (many) {
                e.stopPropagation()
                next()
              }
            }}
            className={`relative w-full h-full max-w-5xl ${many ? 'cursor-pointer' : 'cursor-zoom-out'}`}
          >
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-5 left-0 right-0 z-10 pointer-events-none text-center text-white/60 text-xs tracking-wide px-6">
            {many ? `${index + 1} / ${slides.length} · ` : ''}
            {current.alt}
          </p>
        </div>
      )}
    </>
  )
}
