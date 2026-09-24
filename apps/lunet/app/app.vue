<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#0c0b0a' : '#f4f1ea')

useHead({
  meta: [
    { name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})

useSeoMeta({
  ogSiteName: 'Lunet',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@DesireKouassi',
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <ScrollProgress />
    <AppHeader />
    <UMain class="min-h-screen">
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
