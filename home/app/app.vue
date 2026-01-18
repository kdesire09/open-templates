<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})

const title = 'Open Templates'
const description = 'A collection of high-quality, open-source templates built with Nuxt UI to kickstart your next project.'

const links = [
  // {
  //   label: 'Become a sponsor',
  //   icon: 'i-lucide-book-open',
  //   variant: 'ghost',
  //   size: 'md',
  //   to: 'https://github.com/sponsors/kdesire09',
  //   target: '_blank',
  // },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    variant: 'ghost',
    size: 'md',
    to: 'https://github.com/kdesire09/open-templates',
    target: '_blank',
  },
]

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
    <div class="min-h-screen xl:grid xl:grid-cols-2">
      <UPageSection
        title="OpenTemplates UI"
        orientation="vertical"
        :links
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
            A collection of high-quality, open-source templates built with Nuxt UI to kickstart your next project by
            <NuxtLink to="https://kdesire.com" target="_blank" class="relative text-primary font-bold">
              Desire KOUASSI <UIcon name="i-fluent-open-20-filled" class="size-4 absolute top-0 -right-5" />
            </NuxtLink>
          </div>
        </template>
        <template #default />
      </UPageSection>
      <section class="px-4 sm:px-6 xl:px-0 xl:-ms-30 xl:flex-1 bg-zinc-50 dark:bg-zinc-900">
        <ColorModeButton class="fixed top-4 right-4 z-10" />

        <NuxtPage />
      </section>
    </div>
  </UApp>
</template>
