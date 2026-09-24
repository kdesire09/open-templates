<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Curated thought, delivered weekly.',
  description: 'Join 20,000 readers receiving our curated digest of the most significant architectural and cultural essays.',
})
</script>

<template>
  <UPageSection
    :ui="{
      root: 'bg-brand-charcoal dark:bg-surface-container-lowest',
      container: 'py-16 sm:py-20 text-center gap-6 sm:gap-8',
    }"
  >
    <h2 class="text-3xl sm:text-4xl font-bold text-white dark:text-highlighted tracking-tight text-pretty">
      {{ title }}
    </h2>
    <p class="text-white/70 dark:text-brand-neutral max-w-lg mx-auto">
      {{ description }}
    </p>
    <AppNewsletterForm inverted />
  </UPageSection>
</template>
