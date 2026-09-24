<script setup lang="ts">
import gsap from 'gsap'

const { launch } = useAppConfig()
const { colors } = launch

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ q }) => {
  const [pin] = q('[data-pin]')
  const panels = q('[data-panel]')
  const swatches = q('[data-swatch]')
  const hidden = 'circle(0% at 50% 50%)'

  gsap.set(panels.slice(1), { clipPath: hidden })
  gsap.set(swatches.slice(1), { opacity: 0.35 })

  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: pin,
      pin: true,
      start: 'top top',
      end: `+=${(panels.length - 1) * 100}%`,
      scrub: 1,
    },
  })

  // Each finish wipes in from the halo outward while the watch turns to face you
  panels.slice(1).forEach((panel, i) => {
    tl.fromTo(panel, { clipPath: hidden }, { clipPath: 'circle(75% at 50% 50%)', duration: 1 }, i)
      .from(panel.querySelector('[data-watch]'), { rotateY: -80, rotateZ: 12, scale: 0.85, duration: 1 }, i)
      .from(panel.querySelector('[data-name]'), { y: 24, autoAlpha: 0, filter: 'blur(4px)', duration: 0.6, ease: 'power3.out' }, i + 0.4)
      .to(swatches[i]!, { opacity: 0.35, duration: 0.3 }, i)
      .to(swatches[i + 1]!, { opacity: 1, duration: 0.3 }, i)
  })
})
</script>

<template>
  <section id="colors" ref="root" class="relative">
    <UContainer class="pt-24 pb-12 sm:pt-32">
      <SceneHeading :title="colors.title" align="center" />
    </UContainer>

    <div data-pin class="relative anim:h-svh anim:overflow-hidden">
      <div class="grid h-full">
        <div
          v-for="(item, i) in colors.items"
          :key="item.name"
          data-panel
          class="flex min-h-svh flex-col items-center justify-center gap-12 anim:[grid-area:1/1]"
          :class="i % 2 ? 'bg-elevated' : 'bg-default'"
        >
          <div class="perspective-[1400px]">
            <ProductWatch data-watch :colorway="item" class="[--w:clamp(150px,19vw,230px)]" />
          </div>
          <p data-name class="font-display text-4xl font-semibold text-highlighted sm:text-5xl">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-10 hidden justify-center gap-3 anim:flex">
        <span
          v-for="item in colors.items"
          :key="item.name"
          data-swatch
          class="size-4 rounded-full shadow-[0_0_0_1px_var(--ui-border-accented),0_0_0_4px_var(--ui-bg),0_0_0_5px_var(--ui-border)]"
          :style="{ background: item.case }"
          :title="item.name"
        />
      </div>
    </div>
  </section>
</template>
