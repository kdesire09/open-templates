export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'zinc',
    },
    button: {
      slots: {
        // Tactile press feedback on every button
        base: 'transition-[color,background-color,box-shadow,scale] duration-150 ease-out active:not-disabled:scale-[0.96]',
      },
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
