import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-icon.png"
                alt="Orange Path Landscaping"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif text-white text-lg leading-tight">Orange Path<br />Landscaping</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mt-4">
              Orange County&apos;s landscape design, construction, and maintenance company. Veteran owned. Locally rooted.
            </p>
            <div className="flex gap-4 mt-6 text-xs text-stone-500 tracking-wide uppercase">
              <span>🎖 Veteran Owned</span>
              <span>LIC: 1146854</span>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Navigate</p>
            <ul className="space-y-3 text-stone-300 text-sm">
              {[
                { href: '/work', label: 'Our Work' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Contact</p>
            <ul className="space-y-3 text-stone-300 text-sm">
              <li>
                <a href="tel:9493716356" className="hover:text-white transition-colors">
                  (949) 371-6356
                </a>
              </li>
              <li>
                <a href="mailto:gavin@orangepathlandscaping.com" className="hover:text-white transition-colors break-all">
                  gavin@orangepathlandscaping.com
                </a>
              </li>
              <li className="text-stone-500 text-xs pt-2">Serving all of Orange County, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-600 text-xs">
          <p>© {new Date().getFullYear()} Orange Path Landscaping. All rights reserved.</p>
          <p>Orange County, California</p>
        </div>
      </div>
    </footer>
  )
}
