import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const topics = [
  'Why I always choose natural stone over manufactured pavers — and what it does to the feel of a space',
  'The native plants I reach for most on Orange County jobs and why they outperform everything else',
  'How a flagstone path through a drought-tolerant garden changed the way a family uses their backyard',
  'What "whimsical" actually means in landscape design — and how I achieve it without it looking chaotic',
  'The forgotten art of layering: how to plant a garden that looks intentional but feels wild',
  'Why I love decomposed granite as a base material — and how to use it without it looking cheap',
  'A Laguna Niguel front yard: how we used California natives to create something that looks like it was always there',
  'The case for imperfection: why natural materials age better than anything manufactured',
  'How boulders, gravel, and ornamental grasses can replace a lawn and look more alive',
  'What I look for in a high-end finish: texture, shadow, and how materials meet each other',
  'A client wanted a lush tropical garden in a drought zone — here is how we made it work with natives',
  'Why the best landscapes in Orange County borrow from the surrounding hills, not from a catalog',
  'How I use water features — small, natural, quiet — to add life to a garden without overwhelming it',
  'The plants I refuse to use and why: a landscape contractor\'s honest list',
  'How to design a garden that looks stunning in June and still has structure in December',
  'Why I start every design with the view from inside the house, not from the street',
  'The difference between a garden that photographs well and one that actually feels good to be in',
  'Natural wood, steel, and stone: how I combine raw materials for a finish that feels timeless',
]

function pickTopic(existing) {
  const used = existing.map((f) => f.toLowerCase())
  const available = topics.filter((t) => !used.some((u) => u.includes(t.slice(0, 20).toLowerCase())))
  return available[Math.floor(Math.random() * available.length)] || topics[Math.floor(Math.random() * topics.length)]
}

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60)
}

async function main() {
  const postsDir = path.join(process.cwd(), 'content/posts')
  const existing = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : []
  const topic = pickTopic(existing)

  console.log(`Generating post on topic: ${topic}`)

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: `You are Gavin Mohrmann, owner of Orange Path Landscaping in Orange County, CA. You're a veteran, hands-on landscape designer and contractor with a strong point of view: you believe in natural materials, California native plants, high-end finishes, and design that feels whimsical and organic — not catalog-perfect or manufactured. You prefer flagstone over concrete, native grasses over sod, boulders over block walls, and plants that look like they belong to the land. You write in a direct, honest, slightly poetic voice — like a knowledgeable friend who genuinely loves what they do. No fluff, no filler.

Write a blog post for my website on this topic: "${topic}"

Format it as a real field story or how-to guide. Use specific details, sensory descriptions, and genuine opinions. The tone should feel warm, intelligent, and grounded — like you're telling a story to a homeowner over coffee who has good taste and wants to understand why things are done a certain way.

Return ONLY the post in this exact format — nothing else before or after:

TITLE: [the post title]
CATEGORY: [one of: How-To, Project Story, Design Philosophy]
EXCERPT: [one sentence summary, under 160 characters]

[post body in markdown — use ## for section headers, - for bullet lists]`,
      },
    ],
  })

  const text = response.content[0].text
  const titleMatch = text.match(/^TITLE: (.+)$/m)
  const categoryMatch = text.match(/^CATEGORY: (.+)$/m)
  const excerptMatch = text.match(/^EXCERPT: (.+)$/m)
  const bodyMatch = text.match(/^EXCERPT: .+\n\n([\s\S]+)$/m)

  if (!titleMatch || !categoryMatch || !excerptMatch || !bodyMatch) {
    console.error('Unexpected response format:', text.slice(0, 200))
    process.exit(1)
  }

  const title = titleMatch[1].trim()
  const category = categoryMatch[1].trim()
  const excerpt = excerptMatch[1].trim()
  const body = bodyMatch[1].trim()
  const slug = slugify(title)
  const date = new Date().toISOString().split('T')[0]
  const filename = `${slug}.md`

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
category: "${category}"
excerpt: "${excerpt}"
published: true
---

${body}
`

  fs.mkdirSync(postsDir, { recursive: true })
  fs.writeFileSync(path.join(postsDir, filename), frontmatter)
  console.log(`Draft saved: content/posts/${filename}`)

  // Output for GitHub Actions to pick up
  console.log(`::set-output name=filename::${filename}`)
  console.log(`::set-output name=title::${title}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
