<script setup lang="ts">
/** Ticking local time — a small nod to the product. Renders placeholders during SSR. */
const time = ref('--:--:--')
let timer: ReturnType<typeof setInterval> | undefined

const format = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

onMounted(() => {
  const tick = (): void => {
    time.value = format.format(new Date())
  }
  tick()
  timer = setInterval(tick, 1000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <span class="font-mono text-xs text-muted tabular-nums">{{ time }}</span>
</template>
