<script setup lang="ts">
const { launch } = useAppConfig()

const items = [
  { label: 'Design', to: '#design' },
  { label: 'Halo', to: '#halo' },
  { label: 'Features', to: '#features' },
  { label: 'Specs', to: '#specs' },
  { label: 'Finishes', to: '#colors' },
]
</script>

<template>
  <UHeader
    :ui="{
      root: 'fixed inset-x-0 top-0 z-50 h-16 border-b border-default bg-default',
      left: 'lg:flex-none',
      center: 'flex-1 justify-center',
      right: 'lg:flex-none gap-4',
    }"
  >
    <template #title>
      <span class="font-display text-lg font-extrabold tracking-[0.25em] text-highlighted uppercase">
        {{ launch.product.shortName }}
      </span>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      :ui="{ link: 'text-sm' }"
    />

    <template #right>
      <LiveClock class="hidden sm:inline" />
      <UColorModeButton />
      <UButton to="#waitlist" size="sm" trailing-icon="i-ph-arrow-right">
        {{ launch.product.cta }}
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
