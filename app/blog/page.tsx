import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-green-900 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-orange-light mb-4">Field Notes</p>
          <h1 className="font-serif text-white text-5xl md:text-7xl font-normal">Project Stories</h1>
          <p className="text-white/55 mt-6 text-lg max-w-xl leading-relaxed">
            Real jobs, real problems, real solutions. How-to guides and stories from the field across Orange County.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-stone-400 text-center py-20">First post coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white group block hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <p className="section-label mb-3">{post.category}</p>
                    <h2 className="font-serif text-green-900 text-xl leading-snug mb-3 group-hover:text-orange-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-stone-400 text-xs tracking-wide">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                      <span className="text-green-900 text-xs tracking-widest uppercase group-hover:text-orange-brand transition-colors">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
