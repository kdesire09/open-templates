<script setup lang="ts">
const isScrolled = ref(false)

const items = [
  [
    {
      label: 'Features',
      to: '#features',
      icon: 'i-ph-star-fill',
      description: 'Discover the powerful capabilities of MotionLaunch.',
    },
    {
      label: 'Showcase',
      to: '#showcase',
      icon: 'i-ph-layout-fill',
      description: 'See what you can build with our animated components.',
    },
    {
      label: 'Waitlist',
      to: '#waitlist',
      icon: 'i-ph-envelope-simple-fill',
      description: 'Join the community and get early access.',
    },
  ],
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <UHeader
    title="MotionLaunch"
    :ui="{
      root: 'fixed top-2 left-1/2 -translate-x-1/2 z-50 glass rounded-2xl px-4 py-1.5 shadow-lg min-w-[90vw] sm:min-w-max flex items-center border-none transition-shadow duration-300',
      container: 'mx-0 px-0',
      left: 'flex-none mr-4',
      center: 'flex-1',
      right: 'flex-none ml-4',
    }"
    :class="isScrolled ? 'shadow-black/20' : ''"
  >
    <template #title>
      <div class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center group-hover:scale-105 transition-transform">
          <UIcon
            name="i-ph-rocket-launch-fill"
            class="w-5 h-5 text-white"
          />
        </div>
        <span class="font-display font-bold text-lg text-highlighted tracking-tight hidden sm:inline">MotionLaunch</span>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      highlight
      :ui="{
        linkLeadingIcon: 'hidden',
      }"
    />

    <template #right>
      <UButton
        to="#waitlist"
        color="primary"
        size="sm"
        trailing-icon="i-ph-arrow-right"
        class="font-semibold"
      >
        Join Waitlist
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="w-full"
      />
    </template>
  </UHeader>
</template>
