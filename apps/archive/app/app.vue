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
  link: [{ rel: 'canonical', href: canonicalUrl }],
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
