<script setup lang="ts">
const { data: stories } = await useAsyncData('all-stories', () => {
  return queryCollection('stories')
    .order('date', 'DESC')
    .all()
})

const pageDescription = 'The full archive of essays on architecture, design, literature, and culture.'

useSeoMeta({
  title: 'Stories',
  description: pageDescription,
  ogTitle: 'Stories — Archive',
  ogDescription: pageDescription,
})

defineOgImage('Page.takumi', {
  eyebrow: 'The Archive',
  title: 'Stories',
  description: 'Every essay we\'ve published, in full — long-form thinking on architecture, design, literature, and culture.',
})
</script>

<template>
  <div>
    <UPageSection
      headline="The Archive"
      title="Stories"
      :ui="{
        header: 'text-left',
        container: 'py-8 sm:py-16 lg:py-16',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-2 max-w-2xl">
          <span class="font-bold uppercase text-gray-500">The Archive</span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted">
            Stories
          </h1>
          <p class="text-lg text-brand-neutral">
            Every essay we've published, in full — long-form thinking on architecture, design, literature, and culture.
          </p>
        </div>
      </template>

      <UBlogPosts v-if="stories?.length">
        <UBlogPost
          v-for="story in stories"
          :key="story.path"
          :title="story.title"
          :description="story.description"
          :image="story.image"
          :to="story.path"
          variant="naked"
          :ui="{
            header: 'aspect-3/2',
            description: 'line-clamp-2',
          }"
        >
          <template #date>
            <span class="uppercase font-bold text-xs text-brand-terracotta">
              {{ story.category }}
            </span>
          </template>
          <template #authors>
            <UUser
              :name="story.author?.name"
              :description="`${story.minRead} min read • ${useDateFormat(story.date, 'MMM DD, YYYY').value}`"
              :ui="{
                name: 'uppercase font-bold',
                description: 'uppercase',
              }"
              :avatar="{
                src: story.author?.avatar?.src,
                loading: 'lazy',
                icon: 'i-lucide-image',
              }"
            />
          </template>
        </UBlogPost>
      </UBlogPosts>
    </UPageSection>
  </div>
</template>
