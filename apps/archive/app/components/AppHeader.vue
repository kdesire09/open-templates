<script setup lang="ts">
const { headerLinks } = useHeaderLinks()
</script>

<template>
  <UHeader :ui="{ left: 'flex items-center gap-6' }">
    <template #left>
      <div class="flex items-center gap-6">
        <ULink to="/" aria-label="Back to home" class="relative">
          <ArchiveLogo class="h-8 w-auto shrink-0" />
        </ULink>
        <UNavigationMenu
          variant="link" :ui="{
            link: 'text-sm font-medium',
          }" :items="headerLinks" class="hidden lg:flex"
        />
      </div>
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
