<script setup lang="ts">
import gsap from 'gsap'

const { launch } = useAppConfig()
const { features } = launch

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ desktop, q }) => {
  const [pin] = q('[data-pin]')
  const [track] = q('[data-track]')
  const cards = q('[data-card]')

  if (!desktop) {
    riseIn(cards, track!, 0.1)
    return
  }

  const distance = (): number => Math.max(0, track!.scrollWidth - window.innerWidth)

  // Cards lean into the scroll direction, then settle — driven by scroll velocity
  const skew = gsap.quickSetter(cards, 'skewX', 'deg')
  const clampSkew = gsap.utils.clamp(-10, 10)
  const proxy = { skew: 0 }

  // Vertical scroll drives horizontal movement — ease must stay "none"
  const scroll = gsap.to(track!, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: pin,
      pin: true,
      start: 'top top',
      end: () => `+=${distance()}`,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const next = clampSkew(self.getVelocity() / -300)
        if (Math.abs(next) > Math.abs(proxy.skew)) {
          proxy.skew = next
          gsap.to(proxy, { skew: 0, duration: 0.8, ease: 'power3', overwrite: true, onUpdate: () => skew(proxy.skew) })
        }
      },
    },
  })

  gsap.fromTo(q('[data-progress]'), { scaleX: 0 }, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { trigger: pin, start: 'top top', end: () => `+=${distance()}`, scrub: true },
  })

  // Nested reveals follow the horizontal animation, not the page scroll
  cards.forEach((card) => {
    gsap.from(card.querySelector('[data-icon]'), {
      scale: 0.25,
      autoAlpha: 0,
      filter: 'blur(4px)',
      ease: 'power3.out',
      scrollTrigger: { containerAnimation: scroll, trigger: card, start: 'left 95%', end: 'left 65%', scrub: true },
    })
  })
})
</script>

<template>
  <section id="features" ref="root" class="relative overflow-hidden">
    <div data-pin class="flex flex-col justify-center py-24 lg:h-svh lg:py-0">
      <UContainer class="flex w-full items-end justify-between gap-8">
        <SceneHeading :title="features.title" />
        <p class="hidden text-sm text-dimmed lg:block">
          Scroll →
        </p>
      </UContainer>

      <div
        data-track
        class="mt-12 flex flex-col px-4 sm:px-6 lg:mt-16 lg:w-max lg:flex-row lg:border-y lg:border-default lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        <article
          v-for="item in features.items"
          :key="item.title"
          data-card
          class="flex shrink-0 flex-col gap-16 border-b border-default py-10 lg:w-md lg:border-r lg:border-b-0 lg:px-10 lg:first:border-l"
        >
          <div data-icon class="text-primary">
            <UIcon :name="item.icon" class="size-10" />
          </div>
          <div class="mt-auto">
            <h3 class="font-display text-2xl font-semibold text-highlighted">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-pretty text-muted">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>

      <UContainer class="mt-10 hidden w-full lg:block">
        <div class="h-px bg-(--ui-border)">
          <div data-progress class="h-full origin-left bg-primary" />
        </div>
      </UContainer>
    </div>
  </section>
</template>
