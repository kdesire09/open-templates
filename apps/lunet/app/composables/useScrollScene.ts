import type { ShallowRef } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const MEDIA = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 1024px)',
} as const

export interface SceneContext {
  /** Scene root element — every selector inside `setup` is scoped to it */
  root: HTMLElement
  /** True on viewports ≥ 1024px */
  desktop: boolean
  /** Scoped query helper returning elements inside the scene */
  q: (selector: string) => HTMLElement[]
}

let refreshQueued = false

/**
 * Pins shift every trigger below them, so ScrollTriggers must be refreshed in page order.
 * Scenes mounted late (HMR, lazy components) would break that order: re-sort by position
 * and refresh once per frame, however many scenes mount together.
 */
function queueRefresh(): void {
  if (refreshQueued)
    return
  refreshQueued = true
  requestAnimationFrame(() => {
    refreshQueued = false
    ScrollTrigger.sort()
    ScrollTrigger.refresh()
  })
}

/**
 * Runs a GSAP scene once the component is mounted.
 *
 * - Scoped to the root element (selectors never leak outside the component)
 * - Re-built automatically when crossing the desktop breakpoint
 * - Skipped entirely when the user prefers reduced motion: the static SSR layout is shown
 * - Everything (tweens, ScrollTriggers, SplitText) is reverted on unmount
 */
export function useScrollScene(
  root: Readonly<ShallowRef<HTMLElement | null>>,
  setup: (ctx: SceneContext) => void | (() => void),
): void {
  let mm: gsap.MatchMedia | undefined

  onMounted(() => {
    const el = root.value
    if (!el)
      return

    mm = gsap.matchMedia(el)
    mm.add({ motion: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
      const { motion, desktop } = context.conditions as { motion: boolean, desktop: boolean }
      if (!motion)
        return

      const q = gsap.utils.selector(el) as (selector: string) => HTMLElement[]
      return setup({ root: el, desktop, q })
    })
    queueRefresh()
  })

  onBeforeUnmount(() => mm?.revert())
}
