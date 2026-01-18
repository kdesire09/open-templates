<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#18181B' : 'white')

useHead({
  meta: [
    { name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})

useSeoMeta({
  ogSiteName: 'MotionLaunch',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@DesireKouassi',
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <UMain class="min-h-screen bg-[#050505]">
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
