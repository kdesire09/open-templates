<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  eyebrow?: string
}>(), {
  title: 'Archive',
  description: 'A platform for intellectual exploration, high-design, and the preservation of long-form editorial excellence.',
  eyebrow: 'Editorial',
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
        <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.12em; color: #6b6b6b; text-transform: uppercase; display: flex;">
          {{ eyebrow }}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="font-family: 'Playfair Display', serif; font-size: 88px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: #121212; display: flex;">
          {{ title }}
        </div>
        <div style="font-size: 30px; line-height: 1.5; color: #6b6b6b; display: flex; margin-top: 28px;">
          {{ description }}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="height: 1px; width: 100%; background-color: #e5e5e5; display: flex; margin-bottom: 24px;" />
        <div style="font-size: 20px; font-weight: 700; letter-spacing: 0.1em; color: #6b6b6b; text-transform: uppercase; display: flex;">
          Long-form essays on architecture, design & culture
        </div>
      </div>
    </div>
  </div>
</template>
