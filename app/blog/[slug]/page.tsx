import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post || !post.published) notFound()

  const lines = post.content.split('\n')
  const html = lines.map((line) => {
    if (line.startsWith('## ')) return `<h2 class="font-serif text-green-900 text-2xl mt-10 mb-4">${line.slice(3)}</h2>`
    if (line.startsWith('# ')) return `<h1 class="font-serif text-green-900 text-3xl mt-10 mb-4">${line.slice(2)}</h1>`
    if (line.startsWith('- ')) return `<li class="text-stone-600 leading-relaxed ml-4 list-disc">${line.slice(2)}</li>`
    if (line.startsWith('---')) return `<hr class="border-stone-200 my-8" />`
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      return `<p class="text-stone-500 italic leading-relaxed mb-4">${line.slice(1, -1)}</p>`
    }
    if (line.trim() === '') return '<br />'
    if (line.startsWith('![')) {
      const m = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      if (m) return `<img src="${m[2]}" alt="${m[1]}" class="w-full rounded-sm my-8 object-cover" />`
    }
    return `<p class="text-stone-600 leading-relaxed mb-4">${line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-900 underline underline-offset-2 hover:text-orange-brand transition-colors">$1</a>')}</p>`
  }).join('\n')

  return (
    <>
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors mb-8 block">
            ← Field Notes
          </Link>
          <p className="section-label text-orange-light mb-4">{post.category}</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-normal leading-tight">{post.title}</h1>
          <p className="text-white/40 text-sm mt-6">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · Gavin Mohrmann, Orange Path Landscaping
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>

      <section className="bg-green-900 py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-white text-3xl mb-4">Have a question about your yard?</h2>
          <p className="text-white/55 mb-8">Book a free 30-minute call and get a straight answer.</p>
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
