<script setup lang="ts">
const features = [
  {
    icon: 'i-ph-lightning-fill',
    title: 'Blazing Fast',
    description: 'Optimized for speed and responsiveness in every interaction.',
    gradient: 'from-amber-400 to-orange-500',
    glowColor: 'rgba(251, 191, 36, 0.3)',
  },
  {
    icon: 'i-ph-shield-check-fill',
    title: 'Built to Last',
    description: 'Premium materials engineered for durability and longevity.',
    gradient: 'from-emerald-400 to-teal-500',
    glowColor: 'rgba(52, 211, 153, 0.3)',
  },
  {
    icon: 'i-ph-palette-fill',
    title: 'Iconic Design',
    description: 'A timeless aesthetic that stands out from the crowd.',
    gradient: 'from-violet-400 to-purple-500',
    glowColor: 'rgba(167, 139, 250, 0.3)',
  },
  {
    icon: 'i-ph-cloud-fill',
    title: 'Cloud Connected',
    description: 'Seamlessly sync across all your devices and platforms.',
    gradient: 'from-sky-400 to-blue-500',
    glowColor: 'rgba(56, 189, 248, 0.3)',
  },
  {
    icon: 'i-ph-recycle-fill',
    title: 'Eco Friendly',
    description: 'Sustainably sourced and fully recyclable components.',
    gradient: 'from-lime-400 to-green-500',
    glowColor: 'rgba(163, 230, 53, 0.3)',
  },
  {
    icon: 'i-ph-headset-fill',
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you succeed.',
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'rgba(244, 114, 182, 0.3)',
  },
]

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '99%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
]
</script>

<template>
  <section id="features" class="py-24 sm:py-32 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
    </div>

    <UContainer class="relative z-10">
      <!-- Section Header -->
      <ClientOnly>
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
          :viewport="{ once: true, amount: 0.3 }"
        >
          <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <UBadge
              color="primary"
              variant="subtle"
              size="md"
              icon="i-ph-sparkle-fill"
              class="mb-6"
            >
              Powerful Features
            </UBadge>

            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Everything You
              <span class="relative">
                <span class="gradient-text"> Need</span>
              </span>
            </h2>

            <p class="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
              Packed with features that make a real difference.
              Here's what sets us apart from the rest.
            </p>
          </div>
        </Motion>
        <template #fallback>
          <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <UBadge
              color="primary"
              variant="subtle"
              size="md"
              icon="i-ph-sparkle-fill"
              class="mb-6"
            >
              Powerful Features
            </UBadge>

            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Everything You
              <span class="relative">
                <span class="gradient-text"> Need</span>
              </span>
            </h2>

            <p class="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
              Packed with features that make a real difference.
              Here's what sets us apart from the rest.
            </p>
          </div>
        </template>
      </ClientOnly>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Motion
          v-for="(feature, index) in features"
          :key="feature.title"
          :initial="{ opacity: 0, y: 50, rotateX: -10 }"
          :while-in-view="{ opacity: 1, y: 0, rotateX: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.2 }"
        >
          <div class="group">
            <UCard
              class="h-full bg-zinc-900/60 border-zinc-800/80 hover:border-primary-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
              :ui="{
                body: 'p-6 lg:p-8 relative',
                rounded: 'rounded-3xl',
              }"
            >
              <!-- Hover glow effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                :style="{ background: `radial-gradient(circle at 50% 0%, ${feature.glowColor}, transparent 70%)` }"
              />

              <!-- Content -->
              <div class="relative z-10">
                <!-- Icon with gradient background -->
                <div
                  class="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                >
                  <div :class="`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`" />
                  <UIcon :name="feature.icon" class="w-7 h-7 text-white" />
                </div>

                <!-- Title -->
                <h3 class="font-display text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {{ feature.title }}
                </h3>

                <!-- Description -->
                <p class="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {{ feature.description }}
                </p>

                <!-- Learn more indicator -->
                <div class="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
              </div>
            </UCard>
          </div>
        </Motion>
      </div>

      <!-- Stats Section -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <div class="mt-20">
          <UCard
            class="bg-zinc-900/50 border-zinc-800/60"
            :ui="{
              body: 'py-10 px-8',
              rounded: 'rounded-2xl',
            }"
          >
            <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/60">
              <div
                v-for="(stat, index) in stats"
                :key="stat.label"
                class="text-center px-4 first:pl-0 last:pr-0"
              >
                <Motion
                  :initial="{ opacity: 0, scale: 0.9 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.4, delay: index * 0.1 }"
                  :viewport="{ once: true }"
                >
                  <div>
                    <div class="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                      {{ stat.value }}
                    </div>
                    <div class="text-sm text-zinc-500">
                      {{ stat.label }}
                    </div>
                  </div>
                </Motion>
              </div>
            </div>
          </UCard>
        </div>
      </Motion>

      <!-- Bottom CTA -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        :viewport="{ once: true }"
      >
        <div class="mt-16 text-center">
          <p class="text-zinc-400 mb-6">
            Ready to experience the difference?
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="#waitlist"
              size="xl"
              color="primary"
              trailing-icon="i-ph-arrow-right"
            >
              Get Started Now
            </UButton>
            <UButton
              size="xl"
              color="neutral"
              variant="outline"
              leading-icon="i-ph-play-circle"
            >
              Watch Demo
            </UButton>
          </div>
        </div>
      </Motion>
    </UContainer>
  </section>
</template>
