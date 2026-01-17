export default defineAppConfig({
  repository: 'nuxt/ui',
  ui: {
    pageSection: {
      slots: {
        title: 'font-tasa-orbiter!',
      },
    },
    changelogVersion: {
      slots: {
        title: 'font-tasa-orbiter!',
      },
    },
    colors: {
      primary: 'cyan',
      neutral: 'neutral',
    },
    prose: {
      li: {
        base: 'break-words',
      },
      a: {
        base: 'break-words',
      },
    },
  },
})
