<script lang="ts" setup>
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const img = useImage()
</script>

<template>
  <div class="min-h-screen xl:grid xl:grid-cols-2">
    <UPageSection
      :title="page?.hero.title"
      orientation="vertical"
      :links="page?.hero.links"
      :ui="{
        root: 'border-b border-default xl:border-b-0 xl:sticky xl:inset-y-0 xl:h-screen overflow-hidden',
        container: 'h-full items-center justify-center',
        wrapper: 'flex flex-col',
        headline: 'mb-6',
        title: 'text-left text-4xl',
        description: 'text-left max-w-lg',
        links: 'gap-1 justify-start -ms-2.5',
      }"
    >
      <template #top>
        <BgDot />

        <div class="absolute -right-1/2 z-[-1] rounded-full bg-primary blur-[300px] size-60 sm:size-100 transform -translate-y-1/2 top-1/2" />
      </template>
      <template #description>
        <div class="text-3xl font-light text-zinc-600 dark:text-zinc-200">
          {{ page?.hero.description }}
        </div>
      </template>
      <template #default />
      <template #footer>
        <div class="mt-auto pt-8">
          <p class="text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-tight">
            Built by
            <NuxtLink to="https://kdesire.com" target="_blank" class="relative text-primary font-bold">
              Desire KOUASSI <UIcon name="i-fluent-open-20-filled" class="size-4 absolute top-0 -right-5" />
            </NuxtLink>
          </p>
        </div>
      </template>
    </UPageSection>
    <section class="px-4 sm:px-6 xl:px-0 xl:-ms-30 xl:flex-1 bg-zinc-50 dark:bg-zinc-900">
      <ColorModeButton class="fixed top-4 right-4 z-10" />

      <UChangelogVersions
        as="main"
        :indicator-motion="false"
        :ui="{
          root: 'py-16 sm:py-24 lg:py-32',
          indicator: 'inset-y-0',
        }"
      >
        <UChangelogVersion
          v-for="(template, index) in page?.templates"
          :key="index"
          :image="template.screenshotUrl"
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
                v-if="template.screenshotUrl"
                :src="template.screenshotUrl"
                :alt="template.name"
                :width="1280"
                :height="720"
                quality="80"
                :placeholder="img(template.screenshotUrl, { width: 1280, height: 720, blur: 3, quality: 90 })"
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
                  {{ formatDate(template.date) }}
                </UBadge>

                <!-- Designer info -->
                <NuxtLink
                  :to="template.designer.to"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors no-underline group/designer"
                >
                  <span class="text-xs text-zinc-500 dark:text-zinc-500">Designed by</span>
                  <UAvatar size="xs" :src="template.designer.avatar" />
                  <span class="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover/designer:text-primary transition-colors">
                    {{ template.designer.label }}
                  </span>
                  <UIcon name="i-heroicons-arrow-up-right" class="w-3 h-3 text-zinc-400 opacity-0 group-hover/designer:opacity-100 transition-opacity" />
                </NuxtLink>
              </div>

              <!-- Title -->
              <h1 class="text-3xl font-extrabold leading-tight text-zinc-900 dark:text-white">
                {{ template.name }}
              </h1>

              <!-- Description -->
              <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                {{ template.description }}
              </p>

              <!-- Action links -->
              <div class="flex flex-wrap gap-3 mt-1">
                <NuxtLink
                  :to="template.demo.to"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-lg no-underline transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-primary group/link"
                >
                  <UIcon :name="template.demo.icon || 'i-heroicons-play-circle'" class="w-4 h-4 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  <span>{{ template.demo.label }}</span>
                </NuxtLink>

                <NuxtLink
                  v-if="template.repo"
                  :to="template.repo.to"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-lg no-underline transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-primary group/link"
                >
                  <UIcon :name="template.repo.icon" class="w-4 h-4 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  <span>{{ template.repo.label }}</span>
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
    </section>
  </div>
</template>
