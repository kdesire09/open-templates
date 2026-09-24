/**
 * Snap between light and dark instead of smearing: every element with a color transition
 * would otherwise animate at once. Transitions are disabled for the swap, then restored.
 * `flush: 'sync'` runs before color-mode applies the new class to <html>.
 */
export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()

  watch(() => colorMode.value, () => {
    const style = document.createElement('style')
    style.append(document.createTextNode('*,*::before,*::after{transition:none !important}'))
    document.head.append(style)

    // Read for its side effect: forces a style flush while the override is in place
    void document.body.offsetHeight

    requestAnimationFrame(() => {
      requestAnimationFrame(() => style.remove())
    })
  }, { flush: 'sync' })
})
