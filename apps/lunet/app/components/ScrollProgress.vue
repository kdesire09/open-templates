<script setup lang="ts">
import gsap from 'gsap'

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ root }) => {
  gsap.fromTo(root, { scaleX: 0 }, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
  })
})
</script>

<template>
  <div
    ref="root"
    aria-hidden="true"
    class="fixed inset-x-0 top-0 z-60 hidden h-0.5 origin-left bg-primary anim:block"
  />
</template>
