<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

const { launch } = useAppConfig()
const { product } = launch
const colorway = launch.colors.items[0]!
const nuxtApp = useNuxtApp()

const corners = ['top-3 left-4', 'top-3 right-4 text-right', 'bottom-3 left-4', 'bottom-3 right-4 text-right']

const root = useTemplateRef<HTMLElement>('root')

/**
 * Loader + assembly intro. Plays once per page load: matchMedia rebuilds the scene when the
 * viewport crosses the desktop breakpoint, and replaying the loader then would black out the page.
 */
let introPlayed = false

function playIntro(q: SceneContext['q']): void {
  introPlayed = true
  const lenis = nuxtApp.$lenis
  lenis?.stop()

  const [title] = q('[data-title]')
  const [watch] = q('[data-watch]')
  const [halo] = q('[data-watch] [data-layer="halo"]')
  const layers = q('[data-watch] [data-layer]').filter(layer => layer !== halo)

  gsap.set(title!, { autoAlpha: 1 })
  const split = SplitText.create(title!, { type: 'chars' })

  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })

  // 1. Opening — the halo draws itself, then opens onto the page
  intro
    .to(q('[data-loader-ring]'), { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0)
    .to(q('[data-loader-ring-wrap]'), { scale: 14, duration: 1, ease: 'power4.inOut' }, 1.3)
    .to(q('[data-loader]'), { autoAlpha: 0, duration: 0.4, ease: 'none' }, 2)
    // Hand scrolling back as soon as the opening is gone — the rest of the intro is decorative
    .call(() => lenis?.start(), [], 2)

  // 2. Assembly — layers fly in from depth and stack, then the halo ignites
  const at = 1.8
  intro
    .set(halo!, { opacity: 0 }, 0)
    .from(watch!, { rotateX: 62, rotateZ: -28, scale: 0.7, duration: 2.4 }, at)
    .from(layers, { z: i => (i - (layers.length - 1) / 2) * 260, autoAlpha: 0, stagger: 0.07, duration: 1.8 }, at)
    .from(halo!, { z: 520, duration: 1.8 }, at)
    .from(q('[data-watch] [data-case]'), { autoAlpha: 0, scale: 0.6, duration: 1.6 }, at)
    .from(q('[data-watch] [data-strap]'), { scaleY: 0.2, autoAlpha: 0, transformOrigin: i => (i === 0 ? '50% 100%' : '50% 0%'), duration: 1.4 }, at + 0.7)
    .to(halo!, { keyframes: { opacity: [1, 0.15, 1, 0.4, 1] }, duration: 0.7, ease: 'none' }, at + 1.5)
    .from(q('[data-glow]'), { scale: 0.4, autoAlpha: 0, duration: 2.4 }, at + 1.5)

  // 3. Wordmark flips up in 3D from the center out
    .from(split.chars, {
      rotateX: -100,
      yPercent: 50,
      autoAlpha: 0,
      transformOrigin: '50% 100%',
      stagger: { each: 0.06, from: 'center' },
      duration: 1.6,
    }, at + 0.6)

  // 4. Technical frame draws out, then the copy settles in
    .from(q('[data-frame]'), { clipPath: 'inset(50% 50% 50% 50%)', duration: 1.8, ease: 'expo.inOut' }, at + 0.2)
    .from(q('[data-corner]'), { autoAlpha: 0, y: 8, stagger: 0.08, duration: 0.8 }, at + 1.2)
    .from(q('[data-fade]'), { y: 24, autoAlpha: 0, stagger: 0.1, duration: 1 }, at + 1.4)
}

useScrollScene(root, ({ root, desktop, q }) => {
  const lenis = nuxtApp.$lenis
  const cleanups: Array<() => void> = []

  if (introPlayed) {
    gsap.set(q('[data-loader]'), { autoAlpha: 0 })
    gsap.set(q('[data-title], [data-fade]'), { autoAlpha: 1 })
  }
  else {
    playIntro(q)
  }

  // Idle: the product breathes
  gsap.to(q('[data-float]'), { y: -14, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.fromTo(q('[data-scroll-line]'), { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: 1.4, ease: 'power2.inOut', repeat: -1, yoyo: true })

  // Desktop: real 3D tilt toward the pointer (layers keep their depth) + magnetic CTAs
  if (desktop) {
    const [tilt] = q('[data-tilt]')
    const [parallax] = q('[data-parallax]')
    const rotateX = gsap.quickTo(tilt!, 'rotateX', { duration: 0.9, ease: 'power3' })
    const rotateY = gsap.quickTo(tilt!, 'rotateY', { duration: 0.9, ease: 'power3' })
    const shiftX = gsap.quickTo(parallax!, 'x', { duration: 1.2, ease: 'power3' })

    const move = (e: PointerEvent): void => {
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      rotateY(x * 36)
      rotateX(-y * 36)
      shiftX(x * -50)
    }
    window.addEventListener('pointermove', move)
    cleanups.push(() => window.removeEventListener('pointermove', move))
    q('[data-magnetic]').forEach(el => cleanups.push(magnetic(el)))
  }

  // Scroll-out — scrubbed on wrappers so it never fights the intro or the tilt
  gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
  })
    .to(q('[data-title-wrap]'), { yPercent: -30, autoAlpha: 0 }, 0)
    .to(q('[data-watch-wrap]'), { y: 220, scale: 1.35, rotate: -14 }, 0)
    .to(q('[data-meta]'), { y: -60, autoAlpha: 0 }, 0)
    .to(q('[data-frame-wrap]'), { autoAlpha: 0 }, 0)

  return () => {
    cleanups.forEach(fn => fn())
    lenis?.start()
  }
})
</script>

<template>
  <section
    ref="root"
    class="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-14"
  >
    <!-- Loader (only rendered when the intro can actually play) -->
    <div
      data-loader
      class="loader-failsafe fixed inset-0 z-100 hidden items-center justify-center bg-default anim:flex"
    >
      <div data-loader-ring-wrap class="relative size-36">
        <svg viewBox="0 0 100 100" class="size-full -rotate-90">
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--ui-border)" stroke-width="0.6" />
          <circle
            data-loader-ring
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--ui-primary)"
            stroke-width="1.6"
            stroke-linecap="round"
            pathLength="100"
            stroke-dasharray="100"
            stroke-dashoffset="100"
          />
        </svg>
      </div>
    </div>

    <!-- Technical frame with corner notes -->
    <div data-frame-wrap aria-hidden="true" class="pointer-events-none absolute inset-x-3 top-20 bottom-4 sm:inset-x-6">
      <div data-frame class="absolute inset-0 border border-default">
        <span
          v-for="(note, i) in product.meta"
          :key="note"
          data-corner
          class="absolute font-mono text-xs text-dimmed"
          :class="corners[i]"
        >
          {{ note }}
        </span>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
        data-glow
        class="size-[55vmin] rounded-full opacity-30 blur-[110px]"
        :style="{ background: colorway.accent }"
      />
    </div>

    <!-- Giant wordmark with the product floating in front of it -->
    <div class="relative flex w-full items-center justify-center">
      <div data-title-wrap>
        <div data-parallax>
          <h1
            data-title
            :aria-label="product.name"
            class="font-display text-[clamp(4rem,19vw,17rem)] leading-[0.8] font-black tracking-[-0.02em] text-highlighted uppercase select-none perspective-[900px] anim:invisible"
          >
            {{ product.shortName }}
          </h1>
        </div>
      </div>

      <div data-watch-wrap class="pointer-events-none absolute inset-0 flex items-center justify-center perspective-distant">
        <div data-tilt class="transform-3d">
          <div data-float class="transform-3d">
            <ProductWatch data-watch :colorway="colorway" class="[--w:clamp(130px,18vw,230px)] [--strap-length:0.36]" />
          </div>
        </div>
      </div>
    </div>

    <div data-meta class="relative z-10 mt-20 flex max-w-xl flex-col items-center gap-5 text-center">
      <p data-fade class="font-display text-2xl font-semibold text-highlighted sm:text-3xl anim:invisible">
        {{ product.tagline }}
      </p>
      <p data-fade class="text-pretty text-muted sm:text-lg anim:invisible">
        {{ product.description }}
      </p>
      <div data-fade class="mt-2 flex flex-col items-center gap-3 sm:flex-row anim:invisible">
        <div data-magnetic>
          <UButton to="#waitlist" size="xl" trailing-icon="i-ph-arrow-right">
            {{ product.cta }}
          </UButton>
        </div>
        <div data-magnetic>
          <UButton to="#design" size="xl" color="neutral" variant="ghost" leading-icon="i-ph-cube">
            Take it apart
          </UButton>
        </div>
      </div>
    </div>

    <div data-fade class="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-3 anim:invisible sm:flex">
      <span class="text-xs text-dimmed">Scroll</span>
      <span data-scroll-line class="block h-10 w-px bg-primary" />
    </div>
  </section>
</template>
