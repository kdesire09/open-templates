<script setup lang="ts">
/**
 * Open Graph card rendered by Takumi (1200×630).
 * Inline styles only: the renderer does not read the app's Tailwind CSS.
 */
withDefaults(defineProps<{
  name?: string
  tagline?: string
  description?: string
  meta?: string[]
}>(), {
  name: 'Lunet',
  tagline: 'Time, in a new light.',
  description: '',
  meta: () => [],
})

const ink = '#14120f'
const muted = '#6b655b'
const signal = '#ff5a1f'
</script>

<template>
  <div
    :style="{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#f4f1ea', fontFamily: 'Archivo', padding: '56px', color: ink }"
  >
    <div :style="{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(28, 25, 20, 0.12)', padding: '40px 48px' }">
      <div :style="{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Geist Mono', fontSize: '20px', color: muted }">
        <span>{{ meta[0] }}</span>
        <span>{{ meta[3] }}</span>
      </div>

      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }">
        <div :style="{ display: 'flex', flexDirection: 'column', maxWidth: '620px' }">
          <div :style="{ fontSize: '150px', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', textTransform: 'uppercase', display: 'flex' }">
            {{ name }}
          </div>
          <div :style="{ fontSize: '44px', fontWeight: 600, marginTop: '28px', display: 'flex' }">
            {{ tagline }}
          </div>
          <div :style="{ fontSize: '24px', lineHeight: 1.4, color: muted, marginTop: '16px', display: 'flex' }">
            {{ description }}
          </div>
        </div>

        <!-- The halo: the product's signature ring of light around a dark face -->
        <div :style="{ width: '300px', height: '300px', borderRadius: '50%', backgroundColor: '#3f3f46', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.45)' }">
          <div :style="{ width: '252px', height: '252px', borderRadius: '50%', border: `8px solid ${signal}`, boxShadow: `0 0 36px ${signal}`, backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
            <div :style="{ fontFamily: 'Archivo', fontSize: '22px', fontWeight: 600, letterSpacing: '0.35em', color: '#f2eee6', display: 'flex' }">
              LUNET
            </div>
          </div>
        </div>
      </div>

      <div :style="{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Geist Mono', fontSize: '20px', color: muted }">
        <span>{{ meta[2] }}</span>
        <span>{{ meta[1] }}</span>
      </div>
    </div>
  </div>
</template>
