import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const topics = [
  'A job where a client wanted sod but I talked them into artificial turf — and why they thanked me six months later',
  'The most common paver installation mistake I see in Orange County (and how to spot it before you hire someone)',
  'What I learned from a retaining wall failure on a hillside property in Laguna Niguel',
  'How to choose the right drought-tolerant plants for your specific Orange County microclimate',
  'Why your sprinkler system is probably wasting 40% of your water — and what to do about it',
  'A front yard transformation in Dana Point: from dead grass to desert-modern in 3 weeks',
  'The truth about concrete vs. pavers for driveways in Southern California',
  'How I design a landscape for a family with kids, a dog, and a tight budget',
  'What happens when a client asks for a lawn in a full-sun south-facing yard in August',
  'Natural stone vs. manufactured pavers: a contractor\'s honest breakdown',
  'Why I always do a soil test before planting — and the one time I skipped it',
  'A commercial courtyard project: what\'s different about designing for foot traffic vs. a backyard',
  'The three questions I ask every client before drawing a single line',
  'How to phase a landscape project over 2–3 years without wasting money on the first phase',
  'Agave, saguaro, and golden barrel: how to use desert plants without making your yard look like Arizona',
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
        content: `You are Gavin Mohrmann, owner of Orange Path Landscaping in Orange County, CA. You're a veteran, hands-on contractor who has been doing landscape design and construction for years. You write in a direct, honest, slightly opinionated voice — like a knowledgeable friend, not a corporate blog. No fluff, no filler.

Write a blog post for my website on this topic: "${topic}"

Format it as a real field story or how-to guide. Use specific details, real numbers where relevant, and give genuine advice. The tone should feel like you're telling a story to a homeowner over coffee.

Return ONLY the post in this exact format — nothing else before or after:

TITLE: [the post title]
CATEGORY: [one of: How-To, Project Story, Industry Insight]
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
