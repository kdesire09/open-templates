<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  category?: string
  author?: string
  readTime?: number
  date?: string
}>(), {
  title: 'The Alchemy of Minimalism',
  description: 'Why stripping away the excess is the most radical act in a maximalist digital world.',
  category: 'Design',
  author: 'Desire Kouassi',
  readTime: 8,
  date: '',
})
</script>

<template>
  <div
    style="height: 100%; width: 100%; display: flex; background-color: #f9f8f6; font-family: 'Source Sans 3', sans-serif;"
  >
    <div style="width: 16px; height: 100%; background-color: #e05a33; display: flex;" />

    <div style="flex: 1; display: flex; flex-direction: column; padding: 64px 72px; justify-content: space-between;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; letter-spacing: 0.08em; color: #121212; display: flex;">
          ARCHIVE
        </div>
        <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.12em; color: #6b6b6b; display: flex;">
          ESSAY
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="font-size: 22px; font-weight: 700; letter-spacing: 0.14em; color: #e05a33; text-transform: uppercase; display: flex; margin-bottom: 24px;">
          {{ category }}
        </div>
        <div style="font-family: 'Playfair Display', serif; font-size: 72px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: #121212; display: flex;">
          {{ title }}
        </div>
        <div style="font-size: 28px; line-height: 1.5; color: #6b6b6b; display: flex; margin-top: 24px;">
          {{ description }}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="height: 1px; width: 100%; background-color: #e5e5e5; display: flex; margin-bottom: 24px;" />
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="font-size: 20px; font-weight: 700; letter-spacing: 0.1em; color: #121212; text-transform: uppercase; display: flex;">
            {{ author }}
          </div>
          <div style="font-size: 20px; letter-spacing: 0.08em; color: #6b6b6b; text-transform: uppercase; display: flex;">
            {{ readTime }} min read<span v-if="date"> • {{ date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
