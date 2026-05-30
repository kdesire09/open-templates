<script setup lang="ts">
const showcaseItems = [
  {
    title: 'Precision Engineering',
    description: 'Every detail crafted to perfection. From concept to creation, we obsess over the smallest elements.',
    icon: 'i-ph-gear-six-fill',
  },
  {
    title: 'Lightweight Design',
    description: 'Defying gravity with advanced materials. Experience weightlessness without compromising durability.',
    icon: 'i-ph-feather-fill',
  },
  {
    title: 'Sustainable Future',
    description: 'Built with responsibility. Our materials are sourced ethically and designed to last.',
    icon: 'i-ph-leaf-fill',
  },
]

const highlights = [
  '30% lighter than competitors',
  '2x more durable',
  '100% recyclable materials',
]
</script>

<template>
  <UPageSection
    id="showcase"
    headline="Why Choose Us"
    orientation="vertical"
    :ui="{
      root: 'relative',
      headline: 'text-primary',
      title: 'font-display',
      description: 'text-muted',
    }"
  >
    <!-- Background accent -->
    <template #top>
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-primary-500/3 to-transparent pointer-events-none" />
    </template>

    <!-- Section Header -->
    <template #title>
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <div class="mb-6">
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-highlighted">
            Crafted for <span class="gradient-text">Excellence</span>
          </h2>
        </div>
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.1 }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <p class="text-lg text-muted">
          Discover what makes our product stand apart from everything else on the market.
        </p>
      </Motion>
    </template>

    <!-- Body: Showcase Grid -->
    <template #body>
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16 sm:mt-20">
        <Motion
          v-for="(item, index) in showcaseItems"
          :key="item.title"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.15 }"
          :viewport="{ once: true, amount: 0.2 }"
        >
          <div class="group">
            <UCard
              class="h-full glass border-white/5 hover:border-primary-500/30 transition-all duration-300"
              :ui="{
                body: 'p-6 lg:p-8',
                rounded: 'rounded-2xl',
              }"
            >
              <!-- Icon -->
              <div class="w-14 h-14 rounded-xl bg-linear-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UIcon :name="item.icon" class="w-7 h-7 text-primary-400" />
              </div>

              <!-- Content -->
              <h3 class="font-display text-xl font-semibold text-highlighted mb-3 group-hover:text-primary-400 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-muted leading-relaxed">
                {{ item.description }}
              </p>

              <!-- Learn more link -->
              <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <UButton
                  variant="link"
                  color="primary"
                  size="sm"
                  trailing-icon="i-ph-arrow-right"
                  :padded="false"
                >
                  Learn more
                </UButton>
              </div>
            </UCard>
          </div>
        </Motion>
      </div>
    </template>

    <!-- Default slot: Large Feature Highlight -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      :viewport="{ once: true, amount: 0.2 }"
    >
      <div class="mt-16 lg:mt-20">
        <UCard
          class="glass border-white/5 overflow-hidden"
          :ui="{
            body: 'p-0',
            rounded: 'rounded-3xl',
          }"
        >
          <div class="grid lg:grid-cols-2">
            <!-- Text Side -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <UBadge
                color="primary"
                variant="soft"
                size="sm"
                class="w-fit mb-4"
              >
                Featured
              </UBadge>
              <h3 class="font-display text-2xl lg:text-3xl font-bold text-highlighted mb-4">
                Engineered for Performance
              </h3>
              <p class="text-muted mb-6 leading-relaxed">
                Our proprietary technology combines cutting-edge materials with innovative design principles.
                The result? A product that performs beyond expectations while looking absolutely stunning.
              </p>
              <ul class="space-y-3">
                <li
                  v-for="feature in highlights"
                  :key="feature"
                  class="flex items-center gap-3 text-zinc-300"
                >
                  <UIcon name="i-ph-check-circle-fill" class="w-5 h-5 text-primary-400 shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Visual Side -->
            <div class="relative h-64 lg:h-auto bg-linear-to-br from-primary-500/10 to-primary-600/5">
              <div class="absolute inset-0 flex items-center justify-center">
                <Motion
                  :animate="{ rotate: 360 }"
                  :transition="{ duration: 20, repeat: Infinity, ease: 'linear' }"
                >
                  <div class="w-40 h-40 rounded-full border border-primary-500/20" />
                </Motion>
                <div class="absolute w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <UIcon name="i-ph-lightning-fill" class="w-12 h-12 text-primary-400" />
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </Motion>
  </UPageSection>
</template>
