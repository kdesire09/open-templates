<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const EMAIL_REGEX = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/

interface ContactState {
  name: string | undefined
  email: string | undefined
  message: string | undefined
}

const state = reactive<ContactState>({
  name: undefined,
  email: undefined,
  message: undefined,
})

function validate(state: Partial<ContactState>): FormError[] {
  const errors: FormError[] = []
  if (!state.name)
    errors.push({ name: 'name', message: 'Please enter your name' })
  if (!state.email)
    errors.push({ name: 'email', message: 'Please enter your email' })
  else if (!EMAIL_REGEX.test(state.email))
    errors.push({ name: 'email', message: 'Please enter a valid email' })
  if (!state.message)
    errors.push({ name: 'message', message: 'Please enter a message' })
  return errors
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({
    title: 'Message sent',
    description: `Thanks ${event.data.name}, the editorial office will be in touch.`,
    color: 'success',
  })
  state.name = undefined
  state.email = undefined
  state.message = undefined
}
</script>

<template>
  <UForm
    :state="state"
    :validate="validate"
    class="flex flex-col gap-stack-lg"
    @submit="onSubmit"
  >
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" placeholder="Your name" size="lg" class="w-full" />
    </UFormField>
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" type="email" placeholder="you@example.com" size="lg" class="w-full" />
    </UFormField>
    <UFormField label="Message" name="message">
      <UTextarea v-model="state.message" placeholder="What would you like to tell us?" :rows="4" size="lg" class="w-full" />
    </UFormField>
    <UButton
      type="submit"
      label="Send Message"
      size="lg"
      class="bg-brand-terracotta hover:bg-terracotta-600 text-white justify-center w-fit"
    />
  </UForm>
</template>
