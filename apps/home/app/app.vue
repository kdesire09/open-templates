<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})

const title = 'Open Templates'
const description = 'A collection of high-quality, open-source templates built with Nuxt UI to kickstart your next project.'

useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://opentemplates.kdesire.com/og-image.png',
  twitterImage: 'https://opentemplates.kdesire.com/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@kdesire09',
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
