<script setup lang="ts">
import gsap from 'gsap'

const { launch } = useAppConfig()
const { design } = launch
const colorway = launch.colors.items[0]!

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ desktop, q }) => {
  const [pin] = q('[data-pin]')
  const [stage] = q('[data-stage]')
  const [watch] = q('[data-watch]')
  const labels = q('[data-label]')
  const layers = design.layers.map(layer => q(`[data-layer="${layer.id}"]`)[0]!)
  const restingZ = layers.map(layer => Number(gsap.getProperty(layer, 'z')))
  const spread = desktop ? 80 : 44
  const center = (layers.length - 1) / 2

  // Desktop pins the whole scene; mobile scrubs while the product crosses the viewport
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: desktop
      ? { trigger: pin, pin: true, start: 'top top', end: '+=320%', scrub: 1 }
      : { trigger: stage, start: 'top 75%', end: 'bottom 25%', scrub: 1 },
  })

  // 1. Straps drop away, product tilts into an isometric view
  tl.to(q('[data-strap]'), { autoAlpha: 0, scaleY: 0.4, duration: 0.5 }, 0)
    .to(watch!, { rotateX: 58, rotateZ: -32, scale: desktop ? 0.9 : 0.8, duration: 1 }, 0)

  // 2. Layers separate along Z, top layer first in the list
  layers.forEach((layer, i) => {
    tl.to(layer, { z: (center - i) * spread, duration: 1 }, 0.4)
  })

  // Time passes as you scroll: the hands keep turning for the whole scene
  tl.to(q('.hand-minute'), { rotation: '+=720', svgOrigin: '50 50', ease: 'none', duration: tl.duration() + (desktop ? 4 : 0) }, 0)
    .to(q('.hand-hour'), { rotation: '+=60', svgOrigin: '50 50', ease: 'none', duration: tl.duration() + (desktop ? 4 : 0) }, 0)

  if (!desktop) {
    riseIn(labels, q('[data-labels]')[0]!)
    return
  }

  // 3. Each layer lifts while its label lights up (transform only: filters on 3D layers re-raster every frame)
  layers.forEach((layer, i) => {
    const at = 1.5 + i * 0.45
    tl.to(layer, { z: `+=30`, duration: 0.25 }, at)
      .fromTo(labels[i]!, { autoAlpha: 0.25, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.25 }, at)
      // fromTo: GSAP can't read Tailwind's `scale` property as a starting value
      .fromTo(q('[data-label-bar]')[i]!, { scaleX: 0 }, { scaleX: 1, duration: 0.25 }, at)
      .to(layer, { z: `-=30`, duration: 0.25 }, at + 0.3)
  })

  // 4. Everything comes back together before the pin releases
  const back = 1.5 + layers.length * 0.45 + 0.4
  layers.forEach((layer, i) => {
    tl.to(layer, { z: restingZ[i], duration: 1, ease: 'expo.inOut' }, back)
  })
  tl.to(watch!, { rotateX: 0, rotateZ: 0, scale: 1, duration: 1, ease: 'expo.inOut' }, back)
    .to(q('[data-strap]'), { autoAlpha: 1, scaleY: 1, duration: 0.6 }, back + 0.5)
})
</script>

<template>
  <section id="design" ref="root" class="relative">
    <div data-pin class="flex min-h-svh items-center py-24 lg:h-svh lg:py-0">
      <UContainer class="grid w-full items-center gap-12 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-10">
        <SceneHeading
          :title="design.title"
          :description="design.description"
          class="lg:self-end"
        />

        <div
          data-stage
          class="relative flex h-[60svh] items-center justify-center perspective-[1600px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[80svh]"
        >
          <!-- Blueprint crosshair behind the product -->
          <div aria-hidden="true" class="pointer-events-none absolute inset-8 border border-dashed border-default">
            <div class="absolute inset-x-0 top-1/2 h-px bg-border" />
            <div class="absolute inset-y-0 left-1/2 w-px bg-border" />
          </div>
          <ProductWatch data-watch :colorway="colorway" class="[--w:clamp(150px,20vw,250px)]" />
        </div>

        <ol data-labels class="grid self-start border-t border-default">
          <li
            v-for="(layer, i) in design.layers"
            :key="layer.id"
            data-label
            class="relative grid grid-cols-[3rem_1fr] items-baseline border-b border-default py-3"
          >
            <span class="font-mono text-xs text-primary tabular-nums">
              L{{ i + 1 }}
            </span>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4">
              <p class="font-medium text-highlighted">
                {{ layer.label }}
              </p>
              <p class="font-mono text-xs text-muted">
                {{ layer.detail }}
              </p>
            </div>
            <span data-label-bar class="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-primary" />
          </li>
        </ol>
      </UContainer>
    </div>
  </section>
</template>
