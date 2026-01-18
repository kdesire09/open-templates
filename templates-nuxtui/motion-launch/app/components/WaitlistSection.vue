<script setup lang="ts">
const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)

async function handleSubmit() {
  if (!email.value)
    return

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSuccess.value = true

  // Reset after showing success
  setTimeout(() => {
    email.value = ''
    isSuccess.value = false
  }, 3000)
}
</script>

<template>
  <UPageSection
    id="waitlist"
    icon="i-ph-envelope-simple-fill"
    title="Be the First to Know"
    description="Join our exclusive waitlist and get early access before anyone else. Limited spots available."
    orientation="horizontal"
    :ui="{
      root: 'relative',
      container: 'gap-12 lg:gap-16',
      wrapper: 'text-center lg:text-left',
      leading: 'justify-center lg:justify-start',
      leadingIcon: 'size-14 p-3 rounded-2xl bg-linear-to-br from-primary-400 to-primary-600 text-white',
      title: 'font-display text-highlighted',
      description: 'text-muted max-w-lg',
    }"
  >
    <!-- Background gradient -->
    <template #top>
      <div class="absolute inset-0 bg-linear-to-t from-primary-500/5 via-transparent to-transparent pointer-events-none" />
    </template>

    <!-- Trust indicators -->
    <template #footer>
      <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted mt-8">
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-shield-check" class="w-4 h-4 text-primary-400" />
          <span>No spam, ever</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-lock-simple" class="w-4 h-4 text-primary-400" />
          <span>Your data is safe</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-bell-ringing" class="w-4 h-4 text-primary-400" />
          <span>Early access perks</span>
        </div>
      </div>
    </template>

    <!-- Default slot: Form -->
    <UCard
      class="bg-zinc-800/30 border-zinc-700/50"
      :ui="{
        body: 'p-6 sm:p-8',
        rounded: 'rounded-2xl',
      }"
    >
      <h3 class="font-display text-xl font-semibold text-highlighted mb-2">
        Join the Waitlist
      </h3>
      <p class="text-sm text-muted mb-6">
        Enter your email to reserve your spot.
      </p>

      <!-- Form -->
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <UInput
          v-model="email"
          type="email"
          placeholder="you@example.com"
          size="xl"
          :disabled="isSubmitting || isSuccess"
          class="w-full"
        />
        <UButton
          type="submit"
          size="xl"
          color="primary"
          :loading="isSubmitting"
          :disabled="!email || isSuccess"
          block
        >
          <template v-if="isSuccess">
            <UIcon name="i-ph-check-circle-fill" class="w-5 h-5 mr-2" />
            You're on the list!
          </template>
          <template v-else>
            Get Early Access
            <UIcon name="i-ph-arrow-right" class="w-5 h-5 ml-2" />
          </template>
        </UButton>
      </form>

      <!-- Success Alert -->
      <UAlert
        v-if="isSuccess"
        color="success"
        variant="subtle"
        icon="i-ph-confetti"
        title="Welcome aboard!"
        description="Check your email for confirmation."
        class="mt-4"
      />

      <!-- Counter -->
      <USeparator class="my-6" />
      <div class="flex items-center justify-between text-sm">
        <span class="text-muted">Already joined</span>
        <UBadge color="neutral" variant="subtle">
          1,247 people
        </UBadge>
      </div>
    </UCard>
  </UPageSection>
</template>
