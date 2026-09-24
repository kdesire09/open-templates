<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

withDefaults(defineProps<{
  /** Use light-on-dark input styling, for use on dark backgrounds. */
  inverted?: boolean
}>(), {
  inverted: false,
})

const emit = defineEmits<{
  subscribed: [email: string]
}>()

const EMAIL_REGEX = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/

interface NewsletterState {
  email: string | undefined
}

const state = reactive<NewsletterState>({
  email: undefined,
})

function validate(state: Partial<NewsletterState>): FormError[] {
  const errors: FormError[] = []
  if (!state.email)
    errors.push({ name: 'email', message: 'Please enter your email' })
  else if (!EMAIL_REGEX.test(state.email))
    errors.push({ name: 'email', message: 'Please enter a valid email' })
  return errors
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  const email = event.data.email!
  toast.add({
    title: 'Subscribed',
    description: `We'll send our weekly digest to ${email}.`,
    color: 'success',
  })
  state.email = undefined
  emit('subscribed', email)
}
</script>

<template>
  <UForm
    :state="state"
    :validate="validate"
    class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 max-w-md mx-auto"
    @submit="onSubmit"
  >
    <UFormField
      name="email"
      class="flex-1 w-full"
      :ui="inverted ? { error: 'text-red-400' } : undefined"
    >
      <UInput
        v-model="state.email"
        type="email"
        placeholder="Your email address"
        size="lg"
        class="w-full"
        :ui="inverted ? {
          root: 'border-white/30 focus-within:border-white',
          base: 'bg-transparent text-white placeholder:text-white/60',
        } : undefined"
      />
    </UFormField>
    <UButton
      type="submit"
      label="Subscribe"
      color="primary"
      size="lg"
      class="bg-brand-terracotta hover:bg-terracotta-600 text-white justify-center shrink-0"
    />
  </UForm>
</template>
