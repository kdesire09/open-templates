// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-studio',
    'motion-v/nuxt',
    '@vueuse/nuxt',
    '@comark/nuxt',
    'nuxt-og-image',
  ],
  css: ['~/assets/css/main.css'],

  // @nuxt/content v3 cannot serve its SQLite database from a serverless
  // function, so SSR would query an empty collection. Prerendering bakes the
  // content in at build time; crawlLinks picks up every story from the listings.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/stories', '/topics', '/about', '/contact'],
    },
  },

  // Override the URL per environment with NUXT_PUBLIC_SITE_URL (see .env.example).
  site: {
    url: 'https://archive.kdesire.com',
    name: 'Archive',
    description: 'A platform for intellectual exploration, high-design, and the preservation of long-form editorial excellence in the digital age.',
    defaultLocale: 'en',
  },

  // Takumi is the only renderer used here. Opting out of Satori also avoids the
  // vulnerable satori@0.18.4 that pnpm hoists from another workspace app.
  ogImage: {
    compatibility: {
      dev: { satori: false },
      runtime: { satori: false },
      prerender: { satori: false },
    },
  },

  fonts: {
    families: [
      { name: 'Playfair Display', weights: [200, 300, 400, 500, 600, 700, 800, 900, 950], global: true },
      { name: 'Source Sans 3', weights: [200, 300, 400, 500, 600, 700, 800, 900, 950], global: true },
    ],
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    storageKey: 'archive-color-mode',
  },
})
