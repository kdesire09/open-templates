// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    // Declared before @nuxtjs/seo so it uses this version (v6, Takumi) and not whatever pnpm hoists
    'nuxt-og-image',
    '@nuxtjs/seo',
  ],

  site: {
    url: 'https://lunet.kdesire.com',
    name: 'Lunet',
    description: 'A GSAP-powered, scroll-driven product launch template for Nuxt.',
    defaultLocale: 'en',
  },

  css: ['lenis/dist/lenis.css', '~/assets/css/main.css'],

  // OG images are rendered with Takumi only. Opting out of Satori also avoids the
  // vulnerable satori@0.18.4 that pnpm hoists from @nuxtjs/seo's older nuxt-og-image.
  ogImage: {
    compatibility: {
      dev: { satori: false },
      runtime: { satori: false },
      prerender: { satori: false },
    },
  },

  // Self-hosted by @nuxt/fonts (registered by Nuxt UI). `global` makes them available to nuxt-og-image too.
  fonts: {
    families: [
      {
        name: 'Archivo',
        provider: 'google',
        weights: ['400 900'],
        styles: ['normal'],
        global: true,
        // Width axis for the expanded display cut. Set per family: at provider level the
        // options get merged twice and Google rejects the duplicated axis tuples (400).
        providerOptions: { google: { experimental: { variableAxis: { wdth: [['62', '125']] } } } },
      },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500], styles: ['normal'], global: true },
    ],
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      script: [
        // Flags JS support before first paint so `anim:` styles can hide intro elements without a flash
        { innerHTML: 'document.documentElement.classList.add(\'js-anim\')', tagPosition: 'head' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },
})
