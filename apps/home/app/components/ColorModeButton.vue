<script setup lang="ts">
const colorMode = useColorMode()

// Nuxt UI's color-mode (`disableTransition`) already kills transitions during the swap
async function switchTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  await nextTick()
}

function toggleTheme(event: MouseEvent) {
  const isKeyboard = event.detail === 0
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!document.startViewTransition || isKeyboard || reduceMotion) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const transition = document.startViewTransition(switchTheme)

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <UButton
    aria-label="Toggle color mode"
    color="neutral"
    variant="ghost"
    square
    class="rounded-full bg-default shadow-(--shadow-border) hover:shadow-(--shadow-border-hover)"
    @click="toggleTheme"
  >
    <!-- `!` outranks color-mode's `*{transition:none!important}` so the icons still cross-fade -->
    <span class="relative flex size-5 items-center justify-center">
      <UIcon
        name="i-lucide-sun"
        class="absolute size-5 scale-[0.25] opacity-0 blur-[4px] transition-[opacity,filter,scale]! duration-300 ease-[cubic-bezier(0.2,0,0,1)] dark:scale-100 dark:opacity-100 dark:blur-[0px]"
      />
      <UIcon
        name="i-lucide-moon"
        class="size-5 scale-100 opacity-100 blur-[0px] transition-[opacity,filter,scale]! duration-300 ease-[cubic-bezier(0.2,0,0,1)] dark:scale-[0.25] dark:opacity-0 dark:blur-[4px]"
      />
    </span>
  </UButton>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
