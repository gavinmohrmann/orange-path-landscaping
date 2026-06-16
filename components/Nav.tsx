'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Only the homepage gets the transparent dark-hero nav treatment
  const hasDarkHero = pathname === '/'
  const useDarkText = scrolled || !hasDarkHero

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/work', label: 'Our Work' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/blog', label: 'Field Notes' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Trust bar */}
      {!scrolled && hasDarkHero && (
        <div className="flex justify-end px-6 pt-2 pb-1">
          <div className="flex items-center gap-4 text-white/80 text-xs tracking-widest uppercase bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-sm">
            <span>⭐ Veteran Owned</span>
            <span className="text-white/30">|</span>
            <span>LIC: 1146854</span>
          </div>
        </div>
      )}
      <div
        className={`transition-all duration-500 ${
          useDarkText ? 'bg-white shadow-sm py-3' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.png"
              alt="Orange Path Landscaping"
              width={48}
              height={48}
              className={`rounded-full transition-all duration-300 ${useDarkText ? 'hidden' : 'block'}`}
              priority
            />
            <Image
              src="/images/logo.png"
              alt="Orange Path Landscaping"
              width={200}
              height={60}
              className={`transition-all duration-300 ${useDarkText ? 'block' : 'hidden'}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={useDarkText ? 'nav-link-dark' : 'nav-link'}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9493716356"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                useDarkText ? 'text-orange-brand hover:text-orange-light' : 'text-white hover:text-white/80'
              }`}
            >
              (949) 371-6356
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-colors ${useDarkText ? 'bg-stone-800' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-colors ${useDarkText ? 'bg-stone-800' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 transition-colors ${useDarkText ? 'bg-stone-800' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-dark"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:9493716356" className="text-orange-brand text-sm font-medium">
              (949) 371-6356
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
