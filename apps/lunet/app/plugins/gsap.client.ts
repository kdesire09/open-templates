import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

/**
 * Registers GSAP plugins once and wires Lenis smooth scrolling to the GSAP ticker
 * so ScrollTrigger always reads the smoothed scroll position.
 */
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const reduceMotion = window.matchMedia(MEDIA.reduce).matches
  let lenis: Lenis | null = null

  if (!reduceMotion) {
    lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis?.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  // Webfonts change text metrics, which shifts every trigger position
  document.fonts?.ready.then(() => ScrollTrigger.refresh())

  return {
    provide: { lenis },
  }
})
