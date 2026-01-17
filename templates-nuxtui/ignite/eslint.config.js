import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  ignores: [
    '**/fixtures',
  ],

  gitignore: true,


  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  typescript: true,
  vue: true,

  jsonc: false,
  yaml: false,
})