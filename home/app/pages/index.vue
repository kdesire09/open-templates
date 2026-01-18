<script lang="ts" setup>
const versions = ref([
  {
    title: 'Motion Launch',
    description: 'Modern, high-impact product launch template.',
    image: '~/assets/images/motion-launch.png',
    date: '2025-04-27',
    preview: 'https://nuxt.com/blog/v3-17',
    repository: 'https://nuxt.com/blog/v3-17',
    designer: {
      name: 'Desire KOUASSI',
      url: 'https://github.com/kdesire09',
      avatar: 'https://avatars.githubusercontent.com/u/57430025?v=4',
    },
    target: '_blank',
  },
])

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <UChangelogVersions
    as="main"
    :indicator-motion="false"
    :ui="{
      root: 'py-16 sm:py-24 lg:py-32',
      indicator: 'inset-y-0',
    }"
  >
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      :image="version.image"
      :ui="{
        root: 'flex items-start',
        container: 'max-w-xl',
        header: 'border-default pb-4',
        title: 'text-3xl font-tasa-orbiter',
        date: 'text-xs/9 text-highlighted',
        indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32',
        imageWrapper: 'mt-0',
      }"
    >
      <template #image>
        <div class="relative overflow-hidden rounded-lg bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 group">
          <NuxtImg
            :src="version.image"
            :alt="version.title"
            quality="80"
            class="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <!-- Border ring -->
          <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/5 dark:ring-white/5 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300 pointer-events-none" />
        </div>
      </template>

      <template #body>
        <div class="flex flex-col gap-5">
          <!-- Header with date and designer -->
          <div class="flex items-center justify-between flex-wrap gap-3">
            <!-- Date badge -->
            <UBadge icon="i-heroicons-calendar" color="primary" size="xl" variant="subtle">
              {{ formatDate(version.date) }}
            </UBadge>

            <!-- Designer info -->
            <NuxtLink
              :to="version.designer.url"
              target="_blank"
              class="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors no-underline group/designer"
            >
              <span class="text-xs text-zinc-500 dark:text-zinc-500">Designed by</span>
              <UAvatar size="xs" :src="version.designer.avatar" />
              <span class="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover/designer:text-primary transition-colors">
                {{ version.designer.name }}
              </span>
              <UIcon name="i-heroicons-arrow-up-right" class="w-3 h-3 text-zinc-400 opacity-0 group-hover/designer:opacity-100 transition-opacity" />
            </NuxtLink>
          </div>

          <!-- Title -->
          <h1 class="text-3xl font-extrabold leading-tight text-zinc-900 dark:text-white">
            {{ version.title }}
          </h1>

          <!-- Description -->
          <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
            {{ version.description }}
          </p>

          <!-- Action links -->
          <div class="flex flex-wrap gap-3 mt-1">
            <NuxtLink
              :to="version.preview"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-lg no-underline transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-primary group/link"
            >
              <UIcon name="i-heroicons-play-circle" class="w-4 h-4 opacity-70 group-hover/link:opacity-100 transition-opacity" />
              <span>Live demo</span>
            </NuxtLink>

            <NuxtLink
              :to="version.repository"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-lg no-underline transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-primary group/link"
            >
              <UIcon name="i-heroicons-code-bracket" class="w-4 h-4 opacity-70 group-hover/link:opacity-100 transition-opacity" />
              <span>Source code</span>
            </NuxtLink>

            <!-- <NuxtLink
              :to="version.to"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-primary to-green-600 text-white text-sm font-medium rounded-xl no-underline transition-all duration-200 hover:from-green-500 hover:to-green-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              <UIcon name="i-heroicons-rocket-launch" class="w-4 h-4" />
              <span>Deploy</span>
            </NuxtLink> -->
          </div>
        </div>
      </template>
    </UChangelogVersion>
  </UChangelogVersions>
</template>
