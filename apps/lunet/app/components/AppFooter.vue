<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

const { launch } = useAppConfig()

const socialLinks = [
  { icon: 'i-ph-x-logo', href: '#', label: 'X (Twitter)' },
  { icon: 'i-ph-instagram-logo', href: '#', label: 'Instagram' },
  { icon: 'i-ph-youtube-logo', href: '#', label: 'YouTube' },
]

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Design', to: '#design' },
      { label: 'Halo', to: '#halo' },
      { label: 'Specs', to: '#specs' },
      { label: 'Finishes', to: '#colors' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', to: '#' },
      { label: 'Warranty', to: '#' },
      { label: 'Contact', to: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '#' },
      { label: 'Terms', to: '#' },
    ],
  },
]

const currentYear = new Date().getFullYear()

const root = useTemplateRef<HTMLElement>('root')

// Giant wordmark rises letter by letter and lands exactly at the end of the page.
// The trigger is the footer, not the wordmark: the wordmark bleeds past the page bottom,
// so its own `bottom bottom` is never reached and the last letters would stay stuck halfway.
useScrollScene(root, ({ root, q }) => {
  const [mark] = q('[data-wordmark]')
  const split = SplitText.create(mark!, { type: 'chars', mask: 'chars' })
  gsap.from(split.chars, {
    yPercent: 100,
    ease: 'none',
    stagger: 0.08,
    scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom bottom', scrub: true },
  })
})
</script>

<template>
  <footer ref="root" class="overflow-hidden border-t border-default pt-20">
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p class="font-display text-2xl font-semibold text-highlighted">
            {{ launch.product.tagline }}
          </p>
          <div class="mt-6 flex gap-1">
            <UButton
              v-for="social in socialLinks"
              :key="social.icon"
              :to="social.href"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="ghost"
            />
          </div>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <p class="mb-4 text-sm font-medium text-highlighted">
            {{ section.title }}
          </p>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.label">
              <ULink :to="link.to" inactive-class="text-muted hover:text-highlighted transition-colors">
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-2 border-t border-default py-6 text-sm text-dimmed sm:flex-row sm:justify-between">
        <p>© {{ currentYear }} Lunet template · Built with Nuxt & GSAP</p>
        <p v-if="launch.product.disclaimer">
          {{ launch.product.disclaimer }}
        </p>
      </div>
    </UContainer>

    <p
      data-wordmark
      aria-hidden="true"
      class="font-display -mb-[0.2em] text-center text-[21vw] leading-none font-black tracking-tight text-highlighted/[0.06] uppercase select-none"
    >
      {{ launch.product.shortName }}
    </p>
  </footer>
</template>
