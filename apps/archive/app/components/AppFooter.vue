<script setup lang="ts">
const navItems = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
  { label: 'Newsletter', to: '#' },
  { label: 'RSS Feed', to: '#' }
]
</script>

<template>
  <UFooter class="bg-surface-container-low dark:bg-surface-container-lowest w-full pt-section-gap pb-stack-lg border-t border-outline-variant dark:border-outline flat no-shadows">
    <template #top>
      <div class="max-w-7xl mx-auto px-page-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div class="flex flex-col gap-stack-lg">
          <ArchiveLogo class="w-48 text-brand-charcoal dark:text-white" />
          <p class="font-body-md text-body-md text-brand-neutral max-w-sm">A platform for intellectual exploration, high-design, and the preservation of long-form editorial excellence in the digital age.</p>
          <div class="flex gap-6 mt-4">
            <UButton icon="i-material-symbols-public" color="neutral" variant="link" :padded="false" to="#" aria-label="public" class="text-brand-neutral hover:text-brand-charcoal dark:hover:text-white transition-colors" />
            <UButton icon="i-material-symbols-mail" color="neutral" variant="link" :padded="false" to="#" aria-label="mail" class="text-brand-neutral hover:text-brand-charcoal dark:hover:text-white transition-colors" />
            <UButton icon="i-material-symbols-share" color="neutral" variant="link" :padded="false" to="#" aria-label="share" class="text-brand-neutral hover:text-brand-charcoal dark:hover:text-white transition-colors" />
          </div>
        </div>
        <div class="flex flex-col justify-between items-start md:items-end gap-stack-lg">
          <UNavigationMenu
            :items="navItems"
            variant="link"
            class="justify-start md:justify-end w-full"
            :ui="{ root: 'gap-8 flex-wrap', link: 'font-label-caps text-label-caps text-brand-neutral hover:text-brand-charcoal dark:hover:text-white transition-colors px-0', linkLabel: 'font-label-caps text-label-caps' }"
          />
          <div class="font-bold uppercase text-neutral-500 mt-12">
            © 2026 ARCHIVE EDITORIAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </template>
  </UFooter>
</template>