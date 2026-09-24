<script setup lang="ts">
const { data: stories } = await useAsyncData('topics-stories', () => {
  return queryCollection('stories')
    .order('date', 'DESC')
    .all()
})

const categories = computed(() => {
  const seen = new Set<string>()
  for (const story of stories.value ?? []) {
    if (story.category)
      seen.add(story.category)
  }
  return Array.from(seen).sort()
})

const activeCategory = ref<string | null>(null)

function setCategory(category: string | null) {
  activeCategory.value = category
}

const filteredStories = computed(() => {
  if (!activeCategory.value)
    return stories.value ?? []
  return (stories.value ?? []).filter(story => story.category === activeCategory.value)
})

const pageDescription = 'Browse the archive by subject — architecture, design, literature, and more.'

useSeoMeta({
  title: 'Topics',
  description: pageDescription,
  ogTitle: 'Topics — Archive',
  ogDescription: pageDescription,
})

defineOgImage('Page.takumi', {
  eyebrow: 'Browse by Subject',
  title: 'Topics',
  description: 'Exploring the intersection of form, function, and the human experience — the subjects our writers return to.',
})
</script>

<template>
  <div>
    <UPageSection
      headline="Browse by Subject"
      title="Topics"
      :ui="{
        header: 'text-left',
        container: 'py-8 sm:py-16 lg:py-16',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-2 max-w-2xl">
          <span class="font-bold uppercase text-gray-500">Browse by Subject</span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted">
            Topics
          </h1>
          <p class="text-lg text-brand-neutral">
            Exploring the intersection of form, function, and the human experience — filter the archive by the subjects our writers return to.
          </p>
        </div>
      </template>

      <div class="flex flex-wrap gap-3 mb-12">
        <UButton
          label="All"
          size="sm"
          :variant="activeCategory === null ? 'solid' : 'outline'"
          color="neutral"
          class="rounded-none uppercase text-xs font-bold tracking-wide"
          @click="setCategory(null)"
        />
        <UButton
          v-for="category in categories"
          :key="category"
          :label="category"
          size="sm"
          :variant="activeCategory === category ? 'solid' : 'outline'"
          color="neutral"
          class="rounded-none uppercase text-xs font-bold tracking-wide"
          @click="setCategory(category)"
        />
      </div>

      <UBlogPosts v-if="filteredStories.length">
        <UBlogPost
          v-for="story in filteredStories"
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
      <p v-else class="text-brand-neutral">
        No stories in this topic yet.
      </p>
    </UPageSection>

    <USeparator />

    <AppNewsletterSection
      title="The Weekly Archive"
      description="A digest of the week's most significant architectural and cultural essays, sent every Friday."
    />
  </div>
</template>
