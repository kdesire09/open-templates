<script setup lang="ts">
const props = defineProps<{ date: string }>()

// null during SSR so the server and client markup match
const now = ref<number | null>(null)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  now.value = Date.now()
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const left = computed(() => now.value === null ? null : Math.max(0, new Date(props.date).getTime() - now.value))
// Covers pages prerendered before launch and viewed after it
const expired = computed(() => left.value === 0)

const units = computed(() => {
  const parts = [
    { label: 'Days', ms: 86_400_000, mod: Infinity },
    { label: 'Hours', ms: 3_600_000, mod: 24 },
    { label: 'Min', ms: 60_000, mod: 60 },
    { label: 'Sec', ms: 1000, mod: 60 },
  ]
  return parts.map(({ label, ms, mod }) => ({
    label,
    value: left.value === null ? '--' : String(Math.floor(left.value / ms) % mod).padStart(2, '0'),
  }))
})
</script>

<template>
  <div v-if="!expired" class="grid grid-cols-4 border-y border-default">
    <div
      v-for="unit in units"
      :key="unit.label"
      class="border-r border-default py-4 text-center last:border-r-0"
    >
      <p class="font-display text-3xl font-semibold text-highlighted tabular-nums sm:text-4xl">
        {{ unit.value }}
      </p>
      <p class="mt-1 text-xs text-dimmed">
        {{ unit.label }}
      </p>
    </div>
  </div>
</template>
