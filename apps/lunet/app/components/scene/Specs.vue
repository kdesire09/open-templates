<script setup lang="ts">
const { launch } = useAppConfig()
const { specs } = launch

const root = useTemplateRef<HTMLElement>('root')

useScrollScene(root, ({ q }) => {
  const [grid] = q('[data-grid]')
  const values = q('[data-value]')

  specs.items.forEach((spec, i) => {
    scrubCounter(values[i]!, spec.value, { trigger: grid })
  })
})
</script>

<template>
  <section id="specs" ref="root" class="py-24 sm:py-32">
    <UContainer>
      <SceneHeading :title="specs.title" />

      <dl data-grid class="mt-14 grid gap-x-8 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="spec in specs.items"
          :key="spec.label"
          class="flex flex-col-reverse gap-3 border-t border-default pt-6 pb-10"
        >
          <dt class="text-muted">
            {{ spec.label }}
          </dt>
          <dd class="font-display font-semibold tracking-tight text-highlighted">
            <span data-value class="text-5xl tabular-nums">{{ formatNumber(spec.value) }}</span>
            <span class="ml-1 text-lg font-normal text-muted">{{ spec.suffix.trim() }}</span>
          </dd>
        </div>
      </dl>
    </UContainer>
  </section>
</template>
