import { createConfig } from '@hrcd/eslint-config'

export default createConfig({
  typescript: true,
  vue: true,
  nuxt: true,

  // Define files to ignore
  ignores: [
    'dist',
    'node_modules',
  ],
})
