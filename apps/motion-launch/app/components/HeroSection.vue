<script setup lang="ts">
// Stagger delay for each element
const staggerDelay = 0.15
</script>

<template>
  <UPageHero
    orientation="horizontal"
    :ui="{
      root: 'relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden',
      container: 'gap-12 lg:gap-16',
      wrapper: 'text-center lg:text-left',
      title: 'font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6',
      description: 'text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8',
      links: 'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start',
    }"
  >
    <!-- Background gradient -->
    <template #top>
      <div class="absolute inset-0 bg-linear-to-b from-primary-500/5 via-transparent to-transparent pointer-events-none" />
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />
    </template>

    <!-- Badge headline -->
    <template #headline>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: staggerDelay * 0 }"
      >
        <div>
          <UBadge
            color="primary"
            variant="subtle"
            size="lg"
            class="mb-6"
          >
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
            Now accepting early access
          </UBadge>
        </div>
      </Motion>
    </template>

    <!-- Title with gradient -->
    <template #title>
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: staggerDelay * 1 }"
      >
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span class="text-highlighted">Experience the</span>
          <br>
          <span class="gradient-text">Next Generation</span>
        </h1>
      </Motion>
    </template>

    <!-- Description -->
    <template #description>
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: staggerDelay * 2 }"
      >
        <p class="text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8">
          Engineered for performance. Designed for those who demand excellence.
          Discover a product that defies gravity.
        </p>
      </Motion>
    </template>

    <!-- CTA Buttons in body slot -->
    <template #body>
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: staggerDelay * 3 }"
      >
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
          <UButton
            to="#waitlist"
            size="xl"
            color="primary"
            trailing-icon="i-ph-arrow-right"
            class="glow"
          >
            Get Early Access
          </UButton>

          <UButton
            size="xl"
            color="neutral"
            variant="ghost"
            leading-icon="i-ph-play-circle"
          >
            Watch Video
          </UButton>
        </div>
      </Motion>
    </template>

    <!-- Footer: Social proof -->
    <template #footer>
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.8, delay: staggerDelay * 5 }"
      >
        <div class="mt-12 flex items-center gap-6 justify-center lg:justify-start">
          <UAvatarGroup :max="4">
            <UAvatar
              v-for="i in 5"
              :key="i"
              icon="i-ph-user-fill"
              size="md"
              class="bg-zinc-800 border-2 border-zinc-900"
            />
          </UAvatarGroup>
          <div class="text-left">
            <p class="text-highlighted font-medium">
              1,200+ people
            </p>
            <p class="text-sm text-muted">
              Already on the waitlist
            </p>
          </div>
        </div>
      </Motion>
    </template>

    <!-- Default slot: Floating product card -->
    <Motion
      :initial="{ opacity: 0, scale: 0.9, x: 50 }"
      :animate="{ opacity: 1, scale: 1, x: 0 }"
      :transition="{ duration: 0.8, delay: staggerDelay * 2 }"
    >
      <div class="relative flex justify-center lg:justify-end">
        <!-- Glow effect behind product -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-80 h-80 rounded-full bg-primary-500/20 blur-[100px]" />
        </div>

        <!-- Floating product container -->
        <Motion
          :animate="{ y: [0, -20, 0] }"
          :transition="{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }"
        >
          <div class="relative z-10">
            <!-- Product Card -->
            <UCard
              class="w-72 h-96 sm:w-80 sm:h-112 glass border-white/10"
              :ui="{
                body: 'flex items-center justify-center h-full',
                rounded: 'rounded-3xl',
              }"
            >
              <div class="text-center p-8">
                <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <UIcon name="i-ph-sneaker-fill" class="w-10 h-10 text-white" />
                </div>
                <h3 class="font-display text-xl font-semibold text-highlighted mb-2">
                  Premium Product
                </h3>
                <p class="text-sm text-muted">
                  Your product image here
                </p>
              </div>
            </UCard>

            <!-- Floating accent elements -->
            <Motion
              :animate="{ y: [0, -10, 0], rotate: [0, 5, 0] }"
              :transition="{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }"
            >
              <div class="absolute -top-6 -right-6">
                <UBadge
                  color="primary"
                  size="xl"
                  icon="i-ph-star-fill"
                  class="shadow-lg shadow-primary-500/30 px-4 py-3"
                />
              </div>
            </Motion>

            <Motion
              :animate="{ y: [0, 10, 0], rotate: [0, -5, 0] }"
              :transition="{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }"
            >
              <div class="absolute -bottom-4 -left-4">
                <UBadge
                  color="neutral"
                  variant="outline"
                  size="lg"
                  class="glass border-white/10"
                >
                  ✨ Limited Edition
                </UBadge>
              </div>
            </Motion>
          </div>
        </Motion>
      </div>
    </Motion>

    <!-- Bottom slot: Scroll indicator -->
    <template #bottom>
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 2 }"
      >
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Motion
            :animate="{ y: [0, 10, 0] }"
            :transition="{ duration: 1.5, repeat: Infinity }"
          >
            <div class="flex flex-col items-center gap-2 text-muted">
              <span class="text-xs uppercase tracking-wider">Scroll</span>
              <UIcon name="i-ph-caret-down" class="w-5 h-5" />
            </div>
          </Motion>
        </div>
      </Motion>
    </template>
  </UPageHero>
</template>
