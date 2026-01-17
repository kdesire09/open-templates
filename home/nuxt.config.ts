// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxtjs/mdc',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      langs: ['diff', 'ts', 'vue', 'css'],
    },
    remarkPlugins: {
      'remark-github': {
        options: {
          repository: 'nuxt-ui-templates/changelog',
        },
      },
    },
  },

  ui: {
    theme: {
      defaultVariants: {
        color: 'neutral',
      },
      colors: ['cyan', 'neutral'],
    },
  },

  fonts: {
    defaults: {
      weights: [400, 600, 700],
      fallbacks: {
        'sans-serif': ['system-ui', '-apple-system', 'BlinkMacSystemFont'],
      },
    },
    families: [
      { name: 'TASA Orbiter', provider: 'google' },
    ],
  },

  routeRules: {
    '/': { prerender: true },
  },
})
