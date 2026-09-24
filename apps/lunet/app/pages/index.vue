<script setup lang="ts">
const { launch } = useAppConfig()
const title = `${launch.product.name} — ${launch.product.tagline}`

useSeoMeta({
  title,
  description: launch.product.description,
  ogTitle: title,
  ogDescription: launch.product.description,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: launch.product.description,
})

defineOgImage('Lunet.takumi', {
  name: launch.product.shortName,
  tagline: launch.product.tagline,
  description: launch.product.description,
  meta: launch.product.meta,
})
</script>

<template>
  <SceneHero />
  <SceneDesign />
  <SceneHalo />
  <SceneFeatures />
  <SceneSpecs />
  <SceneColors />
  <SceneStatement />
  <SceneWaitlist />
</template>
