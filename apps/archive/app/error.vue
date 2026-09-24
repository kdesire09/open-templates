<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

const message = computed(() => {
  return isNotFound.value
    ? 'This page has been moved, unpublished, or never existed. The archive is still open.'
    : 'Something went wrong on our side. The editorial office has been notified.'
})

useSeoMeta({
  title: isNotFound.value ? 'Page not found' : 'Something went wrong',
  robots: 'noindex',
})
</script>

<template>
  <div>
    <AppHeader />

    <UError
      :error="error"
      :ui="{
        statusCode: 'text-brand-terracotta font-bold',
        statusMessage: 'font-bold tracking-tight text-highlighted',
      }"
      :clear="{
        label: 'Back to home',
        size: 'lg',
        class: 'bg-brand-terracotta hover:bg-terracotta-600 text-white',
      }"
    >
      <template #message>
        <p class="text-lg text-brand-neutral text-pretty max-w-lg mx-auto">
          {{ message }}
        </p>
      </template>
    </UError>

    <AppFooter />
  </div>
</template>
