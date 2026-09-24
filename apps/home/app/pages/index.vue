<script lang="ts" setup>
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="min-h-screen xl:grid xl:grid-cols-2">
    <UPageHero
      :title="page?.hero.title"
      :description="page?.hero.description"
      :ui="{
        root: 'border-b border-default xl:border-b-0 xl:sticky xl:top-0 xl:h-dvh overflow-hidden',
        container: 'h-full content-center justify-center py-16 sm:py-24 lg:py-24',
        // Same column as the template cards below (max-w-xl, centered)
        wrapper: 'text-left sm:mx-auto sm:w-full sm:max-w-xl',
        title: 'font-tasa-orbiter text-4xl sm:text-5xl xl:text-6xl stagger-in',
        description: 'max-w-md text-xl sm:text-2xl/9 font-light text-toned text-pretty stagger-in [--stagger:1]',
        footer: 'mt-8 stagger-in [--stagger:2]',
      }"
    >
      <template #top>
        <BgDot />
      </template>

      <template #footer>
        <div class="flex flex-wrap gap-2">
          <UButton
            v-for="link in page?.hero.links"
            :key="link.to"
            v-bind="link"
            color="neutral"
          />
        </div>

        <p class="mt-10 text-sm text-muted">
          Built by
          <NuxtLink
            to="https://kdesire.com"
            target="_blank"
            class="inline-flex items-center gap-0.5 font-medium text-highlighted underline decoration-primary/40 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-primary"
          >
            Desire KOUASSI
            <UIcon name="i-lucide-arrow-up-right" class="size-3.5 text-dimmed" />
          </NuxtLink>
        </p>
      </template>
    </UPageHero>

    <section class="px-4 sm:px-6 xl:px-0 xl:-ms-30">
      <ColorModeButton class="fixed top-4 right-4 z-10" />

      <UChangelogVersions
        as="main"
        :indicator-motion="false"
        :ui="{
          root: 'py-16 sm:py-24 lg:py-32',
          indicator: 'inset-y-0',
        }"
      >
        <TemplateEntry
          v-for="(template, index) in page?.templates"
          :key="template.slug"
          :template="template"
          :priority="index === 0"
          class="stagger-in"
          :class="index === 0 ? '[--stagger:3]' : '[--stagger:4]'"
        />
      </UChangelogVersions>
    </section>
  </div>
</template>
