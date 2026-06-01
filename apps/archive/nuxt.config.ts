// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-studio',
    'motion-v/nuxt',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],

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
