<script setup lang="ts">
const [
  { data: homePage },
  { data: stories },
] = await Promise.all([
  useAsyncData('index', () => {
    return queryCollection('index').first()
  }),
  useAsyncData('index-stories', () => {
    return queryCollection('stories')
      .order('date', 'DESC')
      .limit(4)
      .all()
  }),
])

if (!stories.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const latestPost = computed(() => stories.value?.[0])
const latestReleases = computed(() => stories.value?.slice(1))


</script>

<template>
  <div v-if="stories">
    <UContainer>
      <UBlogPost
        orientation="horizontal"
        :description="latestPost?.description"
        :image="latestPost?.image"
        :to="latestPost?.path"
        variant="naked"
        :ui="{
          root: 'py-8 md:py-16',
          header: 'aspect-3/2',
        }"
      >
        <template #title>
          <h2 class="text-[64px] leading-[1.1] tracking-[-0.02em] font-bold">
            {{ latestPost?.title }}
          </h2>
        </template>
        <template #description>
          <p class="text-xl max-w-lg">
            {{ latestPost?.description }}
          </p>
        </template>
        <template #date>
          <span class="uppercase font-bold text-sm text-brand-terracotta">
            {{ latestPost?.category }}
          </span>
        </template>
        <template #authors>
          <UUser
            :name="latestPost?.author?.name"
            :description="`${latestPost?.minRead} min read • ${useDateFormat(latestPost?.date, 'MMM DD, YYYY').value}`"
            :ui="{
              name: 'uppercase font-bold',
              description: 'uppercase',
            }"
            :avatar="{
              src: latestPost?.author?.avatar?.src,
              loading: 'lazy',
              icon: 'i-lucide-image',
            }"
          />
        </template>
      </UBlogPost>
    </UContainer>

    <USeparator />

    <UPageSection
      :headline="homePage?.latestStories.headline"
      :title="homePage?.latestStories.title"
      :ui="{
        root: 'bg-[#f5f3f3]',
        header: 'text-left flex justify-between items-end',
        container: 'py-8 sm:py-16 lg:py-16',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-2">
          <span class="font-bold justify-start uppercase text-gray-500">{{ homePage?.latestStories.headline }}</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted">
            {{ homePage?.latestStories.title }}
          </h2>
        </div>
        <ULink
          to="/stories"
          class="flex justify-center items-center gap-x-2 uppercase hover:translate-x-1 transition-transform"
        >
          <span>View all</span>
          <UIcon name="i-lucide-arrow-right" />
        </ULink>
      </template>

      <UBlogPosts>
        <UBlogPost
          v-for="post in latestReleases"
          :key="post?.path"
          :title="post?.title"
          :description="post?.description"
          :image="post?.image"
          :to="post?.path"
          variant="naked"
          :ui="{
            header: 'aspect-3/2',
            description: 'line-clamp-2',
          }"
        >
          <template #date>
            <span class="uppercase font-bold text-xs text-brand-terracotta">
              {{ post?.category }}
            </span>
          </template>
          <template #authors>
            <UUser
              :name="post?.author?.name"
              :description="`${post?.minRead} min read • ${useDateFormat(latestPost?.date, 'MMM DD, YYYY').value}`"
              :ui="{
                name: 'uppercase font-bold',
                description: 'uppercase',
              }"
              :avatar="{
                src: post?.author?.avatar?.src,
                loading: 'lazy',
                icon: 'i-lucide-image',
              }"
            />
          </template>
        </UBlogPost>
      </UBlogPosts>
    </UPageSection>

    <USeparator />
    <UPageSection>

    </UPageSection>
  </div>
</template>

<style scoped>

</style>
