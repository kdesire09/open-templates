<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})

const title = 'Pochoir'
const description = 'A collection of high-quality, open-source templates built with Nuxt UI to kickstart your next project.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://pochoir.kdesire.com/og-image.png',
  twitterImage: 'https://pochoir.kdesire.com/og-image.png',
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
