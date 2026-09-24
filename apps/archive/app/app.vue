<script setup lang="ts">
const route = useRoute()
const siteConfig = useSiteConfig()

const canonicalUrl = computed(() => new URL(route.path, siteConfig.url).toString())

useSeoMeta({
  ogSiteName: siteConfig.name,
  ogType: 'website',
  ogLocale: 'en',
  ogUrl: canonicalUrl,
})

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'theme-color', content: '#121212' }],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>

<template>
  <UApp :tooltip="{ delayDuration: 500 }">
    <NuxtLoadingIndicator color="var(--ui-primary)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
@media (min-width: 1024px) {
  .root {
    --ui-header-height: 112px;
  }
}
</style>
