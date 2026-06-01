<script setup lang="ts">
const { headerLinks } = useHeaderLinks()
</script>

<template>
  <UHeader :ui="{ left: 'flex items-center gap-6' }">
    <template #left>
      <NuxtLink to="/" aria-label="Back to home">
        <ArchiveLogo />
      </NuxtLink>
      <UNavigationMenu
        variant="link" :ui="{
          link: 'text-sm font-medium',
        }" :items="headerLinks" class="hidden lg:flex"
      />
    </template>
    <template #body>
      <UNavigationMenu highlight :items="headerLinks" orientation="horizontal" />
    </template>
    <template #right>
      <UTooltip text="Search" :kbds="['meta', 'K']" ignore-non-keyboard-focus>
        <UContentSearchButton />
      </UTooltip>
      <UButton label="Subscribe" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>
