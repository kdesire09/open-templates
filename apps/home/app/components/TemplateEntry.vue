<script lang="ts" setup>
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  template: IndexCollectionItem['templates'][number]
  /** Above the fold: load the screenshot eagerly */
  priority?: boolean
}>()
</script>

<template>
  <UChangelogVersion
    :ui="{
      root: 'flex items-start',
      container: 'w-full max-w-xl',
      indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32',
      imageWrapper: 'mt-0 bg-elevated',
    }"
  >
    <template v-if="template.screenshotUrl" #image>
      <!-- Mouse shortcut to the demo; keyboard users get the labelled button below -->
      <NuxtLink
        :to="template.demo.to"
        target="_blank"
        tabindex="-1"
        aria-hidden="true"
        class="group/shot block size-full"
      >
        <NuxtImg
          :src="template.screenshotUrl"
          alt=""
          :width="576"
          :height="324"
          densities="x1 x2"
          quality="80"
          :modifiers="{ position: 'top' }"
          :placeholder="priority ? undefined : [32, 18, 50, 5]"
          :loading="priority ? 'eager' : 'lazy'"
          :fetchpriority="priority ? 'high' : 'auto'"
          class="size-full object-cover object-top transition-transform duration-300 ease-(--ease-out-strong) motion-safe:group-hover/shot:scale-[1.02]"
        />
      </NuxtLink>
      <span class="pointer-events-none absolute inset-0 rounded-[inherit] outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10" />
    </template>

    <template #body>
      <div class="mt-5 flex flex-col">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <NuxtTime
            :datetime="template.date"
            locale="en-US"
            time-zone="UTC"
            year="numeric"
            month="short"
            day="numeric"
            class="tabular-nums"
          />
          <span aria-hidden="true" class="text-dimmed">·</span>
          <span class="inline-flex items-center gap-1.5">
            by
            <NuxtLink
              :to="template.designer.to"
              target="_blank"
              class="inline-flex items-center gap-1.5 font-medium text-toned transition-colors duration-150 hover:text-highlighted"
            >
              <UAvatar :src="template.designer.avatar" alt="" size="3xs" />
              {{ template.designer.label }}
            </NuxtLink>
          </span>
        </div>

        <h2 class="mt-3 font-tasa-orbiter text-3xl font-bold tracking-tight text-pretty text-highlighted">
          {{ template.name }}
        </h2>

        <p class="mt-2 text-lg text-pretty text-muted">
          {{ template.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <UButton
            :to="template.demo.to"
            target="_blank"
            :label="template.demo.label"
            :trailing-icon="template.demo.icon || 'i-lucide-arrow-up-right'"
            color="neutral"
            variant="solid"
            size="lg"
          />
          <UButton
            v-if="template.repo"
            :to="template.repo.to"
            target="_blank"
            :label="template.repo.label"
            :icon="template.repo.icon"
            color="neutral"
            variant="soft"
            size="lg"
          />
        </div>
      </div>
    </template>
  </UChangelogVersion>
</template>
