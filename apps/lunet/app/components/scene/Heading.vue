<script setup lang="ts">
/** Section heading shared by every scene — animates itself when it scrolls into view. */
const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>(), {
  align: 'left',
})

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ root, q }) => {
  const [title] = q('[data-title]')
  if (title)
    revealText(title, { type: 'words', stagger: 0.06, trigger: root })
  riseIn(q('[data-rise]'), root)
})
</script>

<template>
  <div
    ref="root"
    class="max-w-2xl"
    :class="props.align === 'center' ? 'mx-auto text-center' : ''"
  >
    <p v-if="eyebrow" data-rise class="mb-4 text-sm font-medium text-primary">
      {{ eyebrow }}
    </p>
    <h2
      data-title
      class="font-display text-3xl leading-[1.05] font-semibold tracking-tight text-balance text-highlighted sm:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      data-rise
      class="mt-6 max-w-xl text-lg text-pretty text-muted"
      :class="props.align === 'center' ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </div>
</template>
