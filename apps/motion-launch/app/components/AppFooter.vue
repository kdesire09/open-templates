<script setup lang="ts">
const socialLinks = [
  { icon: 'i-ph-x-logo', href: '#', label: 'X (Twitter)' },
  { icon: 'i-ph-instagram-logo', href: '#', label: 'Instagram' },
  { icon: 'i-ph-linkedin-logo', href: '#', label: 'LinkedIn' },
  { icon: 'i-ph-github-logo', href: '#', label: 'GitHub' },
]

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '#features' },
      { label: 'Showcase', to: '#showcase' },
      { label: 'Pricing', to: '#' },
      { label: 'Changelog', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '#' },
      { label: 'Terms', to: '#' },
      { label: 'Cookies', to: '#' },
    ],
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-zinc-800/50 py-16">
    <UContainer>
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <UIcon name="i-ph-rocket-launch-fill" class="w-5 h-5 text-white" />
            </div>
            <span class="font-display font-semibold text-lg text-white">MotionLaunch</span>
          </NuxtLink>

          <p class="text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
            Crafting the future of product launches.
            Built with passion and precision.
          </p>

          <!-- Social Links -->
          <div class="flex gap-2">
            <UButton
              v-for="social in socialLinks"
              :key="social.icon"
              :to="social.href"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="ghost"
              size="sm"
            />
          </div>
        </div>

        <!-- Link Columns -->
        <div
          v-for="section in footerLinks"
          :key="section.title"
        >
          <h4 class="font-medium text-white mb-4">
            {{ section.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.label">
              <ULink
                :to="link.to"
                inactive-class="text-zinc-400 hover:text-white transition-colors"
              >
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <USeparator class="my-8" />
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-zinc-500">
          © {{ currentYear }} MotionLaunch. All rights reserved.
        </p>

        <div class="flex items-center gap-2 text-sm text-zinc-500">
          <span>Built with</span>
          <UIcon name="i-ph-heart-fill" class="w-4 h-4 text-red-500" />
          <span>using</span>
          <ULink to="https://nuxt.com" target="_blank" inactive-class="text-primary-400 hover:underline">
            Nuxt
          </ULink>
          <span>&</span>
          <ULink to="https://motion.dev" target="_blank" inactive-class="text-primary-400 hover:underline">
            Motion
          </ULink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
