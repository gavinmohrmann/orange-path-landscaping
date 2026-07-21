import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const topics = [
  // Materials & hardscape
  'Why I almost never use concrete as a finish surface — and what I use instead',
  'What "whimsical" actually means in landscape design — and how I achieve it without it looking chaotic',
  'The case for imperfection: why natural materials age better than anything manufactured',
  'What I look for in a high-end finish: texture, shadow, and how materials meet each other',
  'Why I love decomposed granite as a base material — and how to use it without it looking cheap',
  'Natural wood, steel, and stone: how I combine raw materials for a finish that feels timeless',
  'How boulders actually work in a landscape — placement, burial depth, and why most people get it wrong',
  'The difference between a paver job that holds and one that fails in five years',
  // Design thinking
  'Why I start every design with the view from inside the house, not from the street',
  'The difference between a garden that photographs well and one that actually feels good to be in',
  'How I use water features — small, natural, quiet — to add life to a garden without overwhelming it',
  'Why the best landscapes in Orange County borrow from the surrounding hills, not from a catalog',
  'How to design a garden that looks stunning in June and still has structure in December',
  'Why outdoor lighting is the most underused tool in residential landscaping',
  'The first question I ask every client — and why the answer changes everything about the design',
  // Plants
  'The plants I refuse to use and why: a landscape contractor\'s honest list',
  'How to design a garden that looks intentional but feels wild',
  'Why I almost always recommend against a lawn — and what I say when clients push back',
]

function pickTopic(existing) {
  const used = existing.map((f) => f.toLowerCase())
  const available = topics.filter((t) => !used.some((u) => u.includes(t.slice(0, 20).toLowerCase())))
  return available[Math.floor(Math.random() * available.length)] || topics[Math.floor(Math.random() * topics.length)]
}

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60)
}

// Returns a unique slug that doesn't collide with existing post files
function uniqueSlug(baseSlug, postsDir) {
  let slug = baseSlug
  let n = 2
  while (fs.existsSync(path.join(postsDir, `${slug}.md`))) {
    slug = `${baseSlug.slice(0, 57)}-${n}`
    n++
  }
  return slug
}

// Strip any frontmatter block the model may have wrapped the body in
function stripFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\n?/, '').trim()
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

IMPORTANT RULES:
- Never invent client stories, client names, or specific completed projects. You do not have permission to fabricate jobs or people.
- Write from your own perspective as a designer and contractor — your philosophy, your opinions, your approach, your observations from years in the field.
- Posts should be about design philosophy, how-to guidance, plant knowledge, material choices, or your point of view on landscaping in Southern California.
- You can reference "clients often ask..." or "I see this a lot on jobs..." as general observations, but never name or describe a specific person or project.

Write a blog post for my website on this topic: "${topic}"

Use specific details, sensory descriptions, and genuine opinions. The tone should feel warm, intelligent, and grounded — like you're sharing hard-won knowledge with a homeowner over coffee who has good taste and wants to understand why things are done a certain way.

Return ONLY the post in this exact format — nothing else before or after. Do NOT wrap the output in frontmatter or markdown code fences:

TITLE: [the post title]
CATEGORY: [one of: How-To, Design Philosophy]
EXCERPT: [one sentence summary, under 160 characters]

[post body in markdown — use ## for section headers, - for bullet lists]`,
      },
    ],
  })

  const text = response.content[0].text

  // Take only the FIRST match of each header to avoid the regex matching
  // a stale example that the model may have echoed inside the body
  const titleMatch = text.match(/^TITLE: (.+)$/m)
  const categoryMatch = text.match(/^CATEGORY: (.+)$/m)
  const excerptMatch = text.match(/^EXCERPT: (.+)$/m)
  const bodyMatch = text.match(/^EXCERPT: .+\n\n([\s\S]+)$/m)

  if (!titleMatch || !categoryMatch || !excerptMatch || !bodyMatch) {
    console.error('ERROR: Unexpected response format from model:')
    console.error(text.slice(0, 400))
    process.exit(1)
  }

  const title = titleMatch[1].trim()
  const category = categoryMatch[1].trim()
  const excerpt = excerptMatch[1].trim()
  // Strip any frontmatter the model snuck into the body
  const body = stripFrontmatter(bodyMatch[1].trim())

  // Always derive slug and date fresh — never from model output
  const baseSlug = slugify(title)
  const date = new Date().toISOString().split('T')[0]

  fs.mkdirSync(postsDir, { recursive: true })

  // Bug 2: collision guard
  const slug = uniqueSlug(baseSlug, postsDir)
  const filename = `${slug}.md`

  // Validation step: catch obviously bad output before writing
  if (!title || title.length < 5) {
    console.error(`ERROR: title looks wrong: "${title}"`)
    process.exit(1)
  }
  if (!['How-To', 'Design Philosophy'].includes(category)) {
    console.error(`ERROR: unexpected category: "${category}"`)
    process.exit(1)
  }
  if (!excerpt || excerpt.length > 200) {
    console.error(`ERROR: excerpt missing or too long: "${excerpt}"`)
    process.exit(1)
  }
  if (body.length < 200) {
    console.error(`ERROR: body suspiciously short (${body.length} chars)`)
    process.exit(1)
  }
  if (fs.existsSync(path.join(postsDir, filename))) {
    console.error(`ERROR: slug collision even after uniqueness guard — ${filename} already exists`)
    process.exit(1)
  }

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
category: "${category}"
excerpt: "${excerpt}"
published: false
---

${body}
`

  fs.writeFileSync(path.join(postsDir, filename), frontmatter)
  console.log(`Draft saved: content/posts/${filename}`)
  console.log(`Title: ${title}`)
  console.log(`Slug: ${slug}`)
  console.log(`Date: ${date}`)

  // GitHub Actions output (modern syntax)
  const githubOutput = process.env.GITHUB_OUTPUT
  if (githubOutput) {
    fs.appendFileSync(githubOutput, `filename=${filename}\n`)
    fs.appendFileSync(githubOutput, `title=${title}\n`)
  } else {
    // Fallback for local runs
    console.log(`::set-output name=filename::${filename}`)
    console.log(`::set-output name=title::${title}`)
  }
}

main().catch((e) => { console.error(e); process.exit(1) })
