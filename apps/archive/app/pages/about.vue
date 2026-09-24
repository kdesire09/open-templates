<script setup lang="ts">
definePageMeta({
  alias: ['/contact'],
})

const pageDescription = 'The pursuit of intellectual rigor and visual clarity — who we are, and how to reach the editorial office.'

useSeoMeta({
  title: 'About & Contact',
  description: pageDescription,
  ogTitle: 'About & Contact — Archive',
  ogDescription: pageDescription,
})

defineOgImage('Page.takumi', {
  eyebrow: 'About Archive',
  title: 'The pursuit of intellectual rigor.',
  description: 'Long-form essays from architects, designers, and critics willing to sit with a subject longer than a news cycle allows.',
})

const stats = [
  { label: 'Intentionality', value: '14', description: 'Years in editorial practice, refining a single point of view.' },
  { label: 'Perspective', value: '82', description: 'Contributing writers, architects, and critics worldwide.', dark: true },
  { label: 'Quality', value: '1.2K', description: 'Essays published, each held to the same editorial standard.' },
]
</script>

<template>
  <div>
    <UContainer class="py-8 sm:py-16">
      <div class="max-w-3xl">
        <span class="uppercase font-bold text-sm text-brand-terracotta">About Archive</span>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-highlighted text-balance">
          The pursuit of intellectual rigor and visual clarity.
        </h1>
      </div>
    </UContainer>

    <UContainer>
      <NuxtImg
        src="/assets/stories/the-silence-of-brutalism.png"
        alt="A bright, modern studio space with large windows and clean lines"
        loading="eager"
        class="w-full aspect-21/9 object-cover"
      />
    </UContainer>

    <UContainer class="py-12 sm:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        <span class="font-bold uppercase text-sm text-brand-terracotta">Crafting narratives that outline the news cycle.</span>
        <div class="flex flex-col gap-stack-md text-brand-neutral text-lg">
          <p>
            Archive was founded on a simple wager: that in an era of infinite, disposable content, readers would still choose depth over volume, if it was offered with enough care.
          </p>
          <p>
            We commission long-form essays from architects, designers, and critics who are willing to sit with a subject longer than a news cycle allows — and we design every page to match the standard of the writing on it.
          </p>
        </div>
      </div>
    </UContainer>

    <USeparator />

    <UContainer class="py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="p-8 border border-outline-variant flex flex-col gap-4"
          :class="stat.dark ? 'bg-brand-charcoal text-white border-transparent' : 'bg-surface-container-low'"
        >
          <span class="text-4xl font-bold" :class="stat.dark ? 'text-white' : 'text-highlighted'">
            {{ stat.value }}
          </span>
          <span class="uppercase font-bold text-sm" :class="stat.dark ? 'text-white/70' : 'text-brand-terracotta'">
            {{ stat.label }}
          </span>
          <p class="text-sm" :class="stat.dark ? 'text-white/70' : 'text-brand-neutral'">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </UContainer>

    <USeparator />

    <UPageSection
      :ui="{
        container: 'py-12 sm:py-16',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-2 max-w-2xl">
          <span class="font-bold uppercase text-gray-500">Get in Touch</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted">
            Connect with our editorial office.
          </h2>
        </div>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        <div class="flex flex-col gap-stack-md text-brand-neutral text-lg">
          <p>
            For editorial pitches, press inquiries, or general correspondence, reach out directly — a member of the team responds within two business days.
          </p>
          <ULink to="mailto:editors@archive.example" class="text-brand-charcoal dark:text-white font-bold underline underline-offset-4">
            editors@archive.example
          </ULink>
        </div>
        <AppContactForm />
      </div>
    </UPageSection>
  </div>
</template>
