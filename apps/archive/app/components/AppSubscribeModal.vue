<script setup lang="ts">
const open = ref(false)

function onSubscribed() {
  open.value = false
}
</script>

<template>
  <UModal
    v-model:open="open"
    title="Subscribe to Archive"
    description="Join 20,000 readers receiving our curated digest of the most significant architectural and cultural essays, every week."
  >
    <UButton label="Subscribe" />

    <template #body>
      <AppNewsletterForm @subscribed="onSubscribed" />
    </template>
  </UModal>
</template>
