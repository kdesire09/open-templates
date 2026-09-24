import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
      return savedPosition

    if (to.hash) {
      // Route anchor links through Lenis so smooth scrolling and ScrollTrigger stay in sync
      const lenis = useNuxtApp().$lenis
      if (lenis) {
        lenis.scrollTo(to.hash, { offset: -16 })
        return false
      }
      return { el: to.hash, top: 16 }
    }

    return { top: 0 }
  },
} satisfies RouterConfig
