import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  published: boolean
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: data.slug || file.replace('.md', ''),
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        published: data.published ?? false,
        content,
      } as Post
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : []
  const file = files.find((f) => f.includes(slug))
  if (!file) return null
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug: data.slug || file.replace('.md', ''),
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    published: data.published ?? false,
    content,
  }
}
