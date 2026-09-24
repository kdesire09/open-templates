<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('stories').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: otherStories } = await useAsyncData(`${route.path}-related`, () => {
  return queryCollection('stories')
    .order('date', 'DESC')
    .limit(4)
    .all()
})

const relatedStories = computed(() => {
  return otherStories.value
    ?.filter(story => story.path !== page.value?.path)
    .slice(0, 3)
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogType: 'article',
  articlePublishedTime: page.value?.date,
  articleSection: page.value?.category,
  articleTag: page.value?.tags,
})

defineOgImage('Article.takumi', {
  title: page.value?.title,
  description: page.value?.description,
  category: page.value?.category,
  author: page.value?.author?.name,
  readTime: page.value?.minRead,
  date: useDateFormat(page.value?.date, 'MMM DD, YYYY').value,
})
</script>

<template>
  <div v-if="page">
    <UContainer class="py-8 sm:py-16">
      <div class="max-w-3xl mx-auto text-center">
        <span class="uppercase font-bold text-sm text-brand-terracotta">
          {{ page.category }}
        </span>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-highlighted text-balance">
          {{ page.title }}
        </h1>
        <p class="mt-6 text-xl text-brand-neutral text-pretty">
          {{ page.description }}
        </p>

        <USeparator class="my-8" />

        <div class="flex justify-center">
          <UUser
            :name="page.author?.name"
            :description="`${page.minRead} min read • ${useDateFormat(page.date, 'MMM DD, YYYY').value}`"
            :ui="{
              name: 'uppercase font-bold',
              description: 'uppercase',
            }"
            :avatar="{
              src: page.author?.avatar?.src,
              loading: 'lazy',
              icon: 'i-lucide-image',
            }"
          />
        </div>
      </div>
    </UContainer>

    <UContainer>
      <NuxtImg
        :src="page.image"
        :alt="page.title"
        loading="eager"
        class="w-full aspect-video object-cover"
      />
    </UContainer>

    <UContainer class="py-12 sm:py-16">
      <div class="prose prose-lg dark:prose-invert max-w-[70ch] mx-auto">
        <ContentRenderer :value="page" />
      </div>
    </UContainer>

    <USeparator />

    <AppNewsletterSection />

    <template v-if="relatedStories?.length">
      <USeparator />

      <UPageSection
        headline="Keep Reading"
        title="Related Stories"
        :ui="{
          header: 'text-left',
          container: 'py-8 sm:py-16 lg:py-16',
        }"
      >
        <UBlogPosts>
          <UBlogPost
            v-for="story in relatedStories"
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
    </template>
  </div>
</template>
