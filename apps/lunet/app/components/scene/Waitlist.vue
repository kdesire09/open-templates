<script setup lang="ts">
const { launch } = useAppConfig()
const { waitlist, product } = launch
const toast = useToast()

// Same result on server and client: the date only matters at page load
const upcoming = new Date(product.launchDate).getTime() > Date.now()

const email = ref('')
const isSubmitting = ref(false)

async function handleSubmit() {
  if (!email.value)
    return

  isSubmitting.value = true
  // Replace with your API call
  await new Promise(resolve => setTimeout(resolve, 1200))
  isSubmitting.value = false

  toast.add({
    title: 'You\'re on the list!',
    description: `We'll keep ${email.value} posted about ${product.name}.`,
    icon: 'i-ph-confetti',
    color: 'success',
  })
  email.value = ''
}

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ desktop, q }) => {
  // Own attribute: `[data-rise]` would also match the SceneHeading children and double-tween them
  riseIn(q('[data-card-item]'), q('[data-card]')[0]!, 0.1)
  if (desktop)
    return magnetic(q('[data-magnetic]')[0]!)
})
</script>

<template>
  <section id="waitlist" ref="root" class="relative overflow-hidden py-24 sm:py-32">
    <UContainer class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <SceneHeading
        :eyebrow="waitlist.eyebrow"
        :title="waitlist.title"
        :description="waitlist.description"
      />

      <div data-card class="flex flex-col gap-8 border border-default bg-default p-6 sm:p-8">
        <div data-card-item class="flex items-baseline justify-between">
          <span class="font-display text-xl font-semibold text-highlighted">{{ product.name }}</span>
          <span class="text-muted">{{ product.price }}</span>
        </div>

        <LaunchCountdown v-if="upcoming" data-card-item :date="product.launchDate" />

        <form data-card-item class="flex flex-col gap-3 sm:flex-row" @submit.prevent="handleSubmit">
          <UInput
            v-model="email"
            type="email"
            required
            autocomplete="email"
            placeholder="you@example.com"
            aria-label="Email address"
            size="xl"
            class="flex-1"
          />
          <div data-magnetic>
            <UButton
              type="submit"
              size="xl"
              block
              :loading="isSubmitting"
              trailing-icon="i-ph-arrow-right"
            >
              {{ product.cta }}
            </UButton>
          </div>
        </form>
      </div>
    </UContainer>
  </section>
</template>
