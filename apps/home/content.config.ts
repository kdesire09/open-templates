import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const BaseSection = z.object({
  title: z.string(),
  description: z.string(),
})

const Link = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string().optional(),
})

// const Image = z.object({
//   src: z.string(),
//   alt: z.string(),
//   width: z.number().optional(),
//   height: z.number().optional()
// })

const Template = z.object({
  name: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  repo: Link.optional(),
  demo: Link,
  featured: z.boolean().optional(),
  badge: z.enum(['Premium', 'Freemium', 'Free']).optional(),
  designer: Link.extend({
    avatar: z.string(),
  }),
  screenshotUrl: z.string().url().optional(),
  screenshotOptions: z.object({
    delay: z.number(),
  }).optional(),
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: BaseSection.extend({
          links: z.array(z.object({
            label: z.string(),
            icon: z.string(),
            variant: z.enum(['link', 'solid', 'outline', 'soft', 'subtle', 'ghost']),
            size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']),
            to: z.string(),
            target: z.string(),
          })),
        }),
        templates: z.array(Template),
      }),
    }),
  },
})
