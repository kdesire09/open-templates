<script setup lang="ts">
import gsap from 'gsap'

const { launch } = useAppConfig()
const { halo } = launch
const colorway = launch.colors.items[0]!

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ q }) => {
  const [pin] = q('[data-pin]')
  const [stage] = q('[data-stage]')
  const [watch] = q('[data-watch]')
  const captions = q('[data-caption]')
  const steps = q('[data-step]')
  // The watch sets its own --accent inline, so recolor it and the stage together
  const tinted = [stage!, watch!]

  gsap.set(captions.slice(1), { autoAlpha: 0, y: 16, filter: 'blur(4px)' })
  gsap.set(tinted, { '--accent': halo.states[0]!.color })

  // Ripples radiate from the halo continuously, in whatever color it currently has
  gsap.fromTo(q('[data-ripple]'), { scale: 1, opacity: 0.6 }, {
    scale: 2.2,
    opacity: 0,
    duration: 2.4,
    ease: 'power2.out',
    stagger: { each: 0.8, repeat: -1 },
  })

  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: pin,
      pin: true,
      start: 'top top',
      end: `+=${halo.states.length * 90}%`,
      scrub: 1,
    },
  })

  tl.fromTo(watch!, { rotateY: -25, rotateX: 10 }, { rotateY: 25, rotateX: -10, ease: 'none', duration: halo.states.length }, 0)
    .fromTo(steps[0]!, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'none' }, 0)

  halo.states.slice(1).forEach((state, i) => {
    const at = i + 1
    tl.to(tinted, { '--accent': state.color, 'duration': 0.4 }, at)
      .fromTo(q('[data-watch] [data-layer="halo"]'), { scale: 1 }, { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1 }, at)
      // Exit is smaller and quicker than the enter; blur bridges the crossfade
      .to(captions[i]!, { autoAlpha: 0, y: -8, filter: 'blur(4px)', duration: 0.3, ease: 'power2.out' }, at)
      .to(captions[i + 1]!, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.45, ease: 'power3.out' }, at + 0.15)
      .fromTo(steps[i + 1]!, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'none' }, at)
  })
})
</script>

<template>
  <section id="halo" ref="root" class="relative overflow-hidden">
    <div data-pin class="flex min-h-svh items-center py-24 anim:h-svh anim:py-0">
      <UContainer class="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col gap-10">
          <SceneHeading :eyebrow="halo.eyebrow" :title="halo.title" :description="halo.description" />

          <!-- Captions: listed statically, stacked and swapped when animated -->
          <div class="grid gap-6 anim:gap-0">
            <div
              v-for="state in halo.states"
              :key="state.title"
              data-caption
              class="flex items-start gap-4 anim:[grid-area:1/1]"
            >
              <div class="grid size-11 shrink-0 place-items-center border border-default" :style="{ color: state.color }">
                <UIcon :name="state.icon" class="size-5" />
              </div>
              <div>
                <p class="font-display text-xl font-semibold text-highlighted">
                  {{ state.title }}
                </p>
                <p class="mt-1 text-muted">
                  {{ state.detail }}
                </p>
              </div>
            </div>
          </div>

          <div class="hidden gap-2 anim:flex">
            <span
              v-for="state in halo.states"
              :key="state.title"
              class="h-px flex-1 bg-(--ui-border)"
            >
              <span data-step class="block h-full origin-left scale-x-0" :style="{ background: state.color }" />
            </span>
          </div>
        </div>

        <div
          data-stage
          class="relative flex h-[46svh] items-center justify-center perspective-[1400px] lg:h-[80svh]"
          :style="{ '--accent': colorway.accent }"
        >
          <div class="pointer-events-none absolute size-[70%] rounded-full bg-(--accent) opacity-20 blur-[120px]" />
          <span
            v-for="n in 3"
            :key="n"
            data-ripple
            class="pointer-events-none absolute hidden size-[clamp(150px,22vw,280px)] rounded-full border border-(--accent) anim:block"
          />
          <ProductWatch data-watch :colorway="colorway" class="[--w:clamp(180px,26vw,330px)]" />
        </div>
      </UContainer>
    </div>
  </section>
</template>
