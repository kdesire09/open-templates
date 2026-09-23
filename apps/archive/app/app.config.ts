export default defineAppConfig({
  ui: {
    colors: {
      neutral: 'zinc',
    },
    button: {
      slots: {
        label: 'tracking-widest text-[13px] font-bold',
      },
    },
    input: {
      slots: {
        root: 'border-b border-t-0 border-l-0 border-r-0 border-neutral-300 focus:border-brand-charcoal bg-transparent shadow-none ring-0',
      },
    },
    card: {
      slots: {
        root: 'shadow-none border-neutral-200 bg-brand-offwhite',
      },
    },
  },
})
