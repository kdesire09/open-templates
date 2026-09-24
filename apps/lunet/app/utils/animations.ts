import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

/**
 * Reusable animation recipes shared by the launch scenes.
 * They must be called inside `useScrollScene` so they get reverted on unmount.
 */

/** Masked character/word reveal — the classic GSAP headline entrance. */
export function revealText(
  target: HTMLElement,
  { type = 'chars', stagger = 0.04, delay = 0, trigger }: {
    type?: 'chars' | 'words' | 'lines'
    stagger?: number
    delay?: number
    /** When set, plays on scroll instead of immediately */
    trigger?: HTMLElement
  } = {},
): gsap.core.Tween {
  gsap.set(target, { autoAlpha: 1 })
  const split = SplitText.create(target, { type, mask: type })

  return gsap.from(split[type], {
    yPercent: 115,
    rotate: type === 'chars' ? 6 : 0,
    duration: 1.1,
    ease: 'expo.out',
    stagger,
    delay,
    scrollTrigger: trigger ? { trigger, start: 'top 80%' } : undefined,
  })
}

/** Words light up one by one while the element scrolls through the viewport. */
export function scrubWords(target: HTMLElement): gsap.core.Tween {
  const split = SplitText.create(target, { type: 'words' })

  return gsap.fromTo(split.words, { opacity: 0.12 }, {
    opacity: 1,
    ease: 'none',
    stagger: 0.1,
    scrollTrigger: {
      trigger: target,
      start: 'top 75%',
      end: 'bottom 45%',
      scrub: true,
    },
  })
}

const numberFormat = new Intl.NumberFormat('en-US')

export function formatNumber(value: number): string {
  return numberFormat.format(Math.round(value))
}

/** Number that counts up with the scroll position. */
export function scrubCounter(
  target: HTMLElement,
  value: number,
  { suffix = '', trigger = target }: { suffix?: string, trigger?: HTMLElement } = {},
): gsap.core.Tween {
  const proxy = { value: 0 }
  const render = (): void => {
    target.textContent = `${formatNumber(proxy.value)}${suffix}`
  }
  render()

  return gsap.to(proxy, {
    value,
    ease: 'power2.out',
    onUpdate: render,
    scrollTrigger: {
      trigger,
      start: 'top 85%',
      end: 'top 35%',
      scrub: 0.6,
    },
  })
}

/** Fade + rise entrance for a group of elements when they enter the viewport. */
export function riseIn(targets: HTMLElement[], trigger: HTMLElement, stagger = 0.08): gsap.core.Tween {
  return gsap.from(targets, {
    y: 40,
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger,
    scrollTrigger: { trigger, start: 'top 75%' },
  })
}

/** Element drifts toward the pointer while hovered, then springs back. Returns a cleanup. */
export function magnetic(target: HTMLElement, strength = 0.35): () => void {
  const xTo = gsap.quickTo(target, 'x', { duration: 0.6, ease: 'power3' })
  const yTo = gsap.quickTo(target, 'y', { duration: 0.6, ease: 'power3' })

  const move = (e: PointerEvent): void => {
    const rect = target.getBoundingClientRect()
    xTo((e.clientX - rect.left - rect.width / 2) * strength)
    yTo((e.clientY - rect.top - rect.height / 2) * strength)
  }
  const leave = (): void => {
    xTo(0)
    yTo(0)
  }

  target.addEventListener('pointermove', move)
  target.addEventListener('pointerleave', leave)
  return () => {
    target.removeEventListener('pointermove', move)
    target.removeEventListener('pointerleave', leave)
  }
}
