import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// const Link = z.object({
//   label: z.string(),
//   to: z.string(),
//   icon: z.string().optional(),
// })

// const Button = z.object({
//   label: z.string(),
//   icon: z.string().optional(),
//   trailingIcon: z.string().optional(),
//   to: z.string().optional(),
//   color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
//   size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
//   variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
//   id: z.string().optional(),
//   target: z.enum(['_blank', '_self']).optional(),
// })

const BaseSection = z.object({
  title: z.string(),
  description: z.string(),
  headline: z.string().optional(),
})

const Image = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
})
const Author = z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  bluesky: z.string().optional(),
  to: z.string().optional(),
  avatar: Image.optional(),
})

// const PageHero = BaseSection.extend({
//   image: Image.optional(),
//   head: z.object({
//     title: z.string().optional(),
//     description: z.string().optional(),
//   }).optional(),
//   headline: z.object({
//     label: z.string(),
//     to: z.string(),
//     icon: z.string().optional().editor({ input: 'icon' }),
//   }).optional(),
//   links: z.array(Button).optional(),
//   cta: Link.optional(),
// })

const Storie = z.object({
  image: z.string().editor({ input: 'media' }),
  author: Author,
  date: z.string().date(),
  minRead: z.number(),
  draft: z.boolean().default(false),
  category: z.enum([
    'Architecture',
    'Design',
    'Ecology',
    'Literature',
    'Technology & Culture',
    'Urbanism',
    'Materials',
    'Culture',
    'Sustainability',
  ]),
  tags: z.array(z.string()),
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      source: 'index.yml',
      type: 'data',
      schema: z.object({
        latestStories: BaseSection,
      }),
    }),
    stories: defineCollection({
      type: 'page',
      source: 'stories/*',
      schema: Storie,
    }),
  },
})
