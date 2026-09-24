<script setup lang="ts">
const { launch } = useAppConfig()
const { statement } = launch

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ root, q }) => {
  scrubWords(q('[data-statement]')[0]!)
  riseIn(q('[data-rise]'), root)
})
</script>

<template>
  <section ref="root" class="border-y border-default py-32 sm:py-48">
    <UContainer class="text-center">
      <p
        data-statement
        class="font-display text-5xl leading-none font-semibold tracking-tight text-balance text-highlighted sm:text-7xl"
      >
        {{ statement.title }}
      </p>
      <p data-rise class="mx-auto mt-8 max-w-md text-lg text-pretty text-muted">
        {{ statement.body }}
      </p>
    </UContainer>
  </section>
</template>
