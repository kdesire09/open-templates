<script setup lang="ts">
/**
 * Lunet One — a fictional watch drawn in CSS/SVG, built from stacked layers so scenes can take it apart.
 * Size it with the `--w` custom property (e.g. `class="[--w:220px]"`).
 * Layers expose `data-layer` (glass, halo, display, chip, battery, sensor), straps `data-strap`.
 * Swap this component for an <img>/<video>/3D canvas to showcase your own product.
 */
const props = withDefaults(defineProps<{
  colorway: Colorway
  brand?: string
  date?: string
  chip?: string
  battery?: string
}>(), {
  brand: 'LUNET',
  date: 'THU 3',
  chip: 'L1',
  battery: '10D',
})

const style = computed(() => ({
  '--case': props.colorway.case,
  '--strap': props.colorway.strap,
  '--accent': props.colorway.accent,
}))

// Hands frozen at 10:09, the classic watch-photography pose
const hourAngle = (10 + 9 / 60) * 30
const minuteAngle = 9 * 6
const ticks = Array.from({ length: 60 }, (_, i) => i * 6)
</script>

<template>
  <div class="watch" :style="style" aria-hidden="true">
    <div data-strap class="strap strap-top" />
    <div data-strap class="strap strap-bottom" />

    <div data-layer="sensor" class="layer sensor" style="transform: translateZ(1px)">
      <div class="sensor-lens" />
    </div>

    <div data-layer="battery" class="layer battery" style="transform: translateZ(2px)">
      <span>{{ battery }}</span>
    </div>

    <div data-layer="chip" class="layer chip" style="transform: translateZ(3px)">
      <div class="chip-die">
        {{ chip }}
      </div>
    </div>

    <div data-case class="case" style="transform: translateZ(4px)">
      <div class="crown" />
      <div class="action" />
    </div>

    <div data-layer="display" class="layer display" style="transform: translateZ(5px)">
      <svg viewBox="0 0 100 100" class="face">
        <!-- Minute track: long ticks every 5 minutes -->
        <line
          v-for="angle in ticks"
          :key="angle"
          x1="50"
          :y1="angle % 30 === 0 ? 5 : 5.5"
          x2="50"
          :y2="angle % 30 === 0 ? 11 : 8"
          :class="angle % 30 === 0 ? 'tick-major' : 'tick-minor'"
          :transform="`rotate(${angle} 50 50)`"
        />
        <!-- Orbit: the accent arc and its moving dot -->
        <circle cx="50" cy="50" r="33" class="orbit" pathLength="100" stroke-dasharray="68 100" />
        <circle cx="50" cy="17" r="2.2" class="orbit-dot" transform="rotate(245 50 50)" />

        <text x="50" y="34" class="brand">{{ brand }}</text>
        <text x="50" y="72" class="date">{{ date }}</text>

        <line x1="50" y1="50" x2="50" y2="28" class="hand hand-hour" :transform="`rotate(${hourAngle} 50 50)`" />
        <line x1="50" y1="50" x2="50" y2="16" class="hand hand-minute" :transform="`rotate(${minuteAngle} 50 50)`" />
        <circle cx="50" cy="50" r="2.4" class="cap" />
      </svg>
    </div>

    <div data-layer="halo" class="layer halo" style="transform: translateZ(6px)" />

    <div data-layer="glass" class="layer crystal" style="transform: translateZ(7px)" />
  </div>
</template>

<style scoped>
.watch {
  /* Parent sets --w; a local default here would out-rank the parent's utility class */
  --size: var(--w, 220px);
  position: relative;
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
}

/* Integrated straps that flow out of the round case */
.strap {
  position: absolute;
  left: 27%;
  right: 27%;
  /* Overridable per placement: the hero uses short straps so they never run under its copy */
  height: calc(var(--size) * var(--strap-length, 0.62));
  background:
    repeating-linear-gradient(0deg, transparent 0 9px, rgb(0 0 0 / 0.2) 9px 10px),
    linear-gradient(
      90deg,
      color-mix(in oklab, var(--strap), black 35%),
      var(--strap) 25% 75%,
      color-mix(in oklab, var(--strap), black 35%)
    );
  transform: translateZ(-1px);
}

.strap-top {
  bottom: 88%;
  border-radius: 40% 40% 0 0 / 12% 12% 0 0;
  mask-image: linear-gradient(to top, black 35%, transparent);
}

.strap-bottom {
  top: 88%;
  border-radius: 0 0 40% 40% / 0 0 12% 12%;
  mask-image: linear-gradient(to bottom, black 35%, transparent);
}

/* Brushed titanium case */
.case {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, transparent 58%, rgb(255 255 255 / 0.08) 66%, transparent 70%),
    conic-gradient(
      from 30deg,
      color-mix(in oklab, var(--case), white 40%),
      var(--case) 20%,
      color-mix(in oklab, var(--case), black 40%) 45%,
      var(--case) 65%,
      color-mix(in oklab, var(--case), white 30%) 85%,
      color-mix(in oklab, var(--case), white 40%)
    );
  box-shadow:
    inset 0 1px 2px rgb(255 255 255 / 0.4),
    inset 0 -2px 4px rgb(0 0 0 / 0.35),
    0 30px 60px -20px rgb(0 0 0 / 0.8);
}

/* Crown at 2 o'clock */
.crown {
  position: absolute;
  right: 6%;
  top: 9%;
  width: 7%;
  height: 12%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--case), color-mix(in oklab, var(--case), white 35%));
  transform: rotate(45deg) translateX(40%);
}

/* Accent action button at 4 o'clock */
.action {
  position: absolute;
  right: 6%;
  bottom: 12%;
  width: 5%;
  height: 9%;
  border-radius: 999px;
  background: var(--accent);
  transform: rotate(-45deg) translateX(45%);
}

.layer {
  position: absolute;
  inset: 9%;
  border-radius: 50%;
}

.sensor {
  background: radial-gradient(circle, #1f1f23, #0c0c0f 70%);
  border: 1px solid rgb(255 255 255 / 0.08);
  display: grid;
  place-items: center;
}

.sensor-lens {
  width: 46%;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 50%, #22c55e 0 6%, transparent 7%),
    radial-gradient(circle at 70% 50%, #22c55e 0 6%, transparent 7%),
    radial-gradient(circle at 50% 30%, #ef4444 0 5%, transparent 6%), radial-gradient(circle, #27272a, #09090b);
  box-shadow: inset 0 0 0 2px rgb(255 255 255 / 0.1);
}

.battery {
  background:
    repeating-conic-gradient(from 0deg, transparent 0 14deg, rgb(0 0 0 / 0.25) 14deg 15deg),
    radial-gradient(circle, #52525b, #27272a);
  border: 1px solid rgb(255 255 255 / 0.12);
  display: grid;
  place-items: center;
  font: 600 calc(var(--size) * 0.07) / 1 var(--font-display);
  letter-spacing: 0.1em;
  color: rgb(255 255 255 / 0.75);
}

.chip {
  background:
    repeating-linear-gradient(0deg, transparent 0 8px, color-mix(in oklab, var(--accent), transparent 80%) 8px 9px),
    repeating-linear-gradient(90deg, transparent 0 14px, color-mix(in oklab, var(--accent), transparent 85%) 14px 15px),
    #0b1f17;
  border: 1px solid rgb(255 255 255 / 0.1);
  display: grid;
  place-items: center;
}

.chip-die {
  width: 36%;
  aspect-ratio: 1;
  border-radius: 12%;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #3f3f46, #18181b);
  box-shadow:
    0 0 0 3px #0b1f17,
    0 0 0 4px rgb(255 255 255 / 0.2);
  font: 700 calc(var(--size) * 0.09) / 1 var(--font-display);
  color: rgb(255 255 255 / 0.85);
}

.display {
  inset: 11%;
  background: radial-gradient(circle at 50% 35%, #111114, #000 70%);
}

.face {
  width: 100%;
  height: 100%;
}

.tick-major {
  stroke: #fff;
  stroke-width: 1.4;
  stroke-linecap: round;
}

.tick-minor {
  stroke: rgb(255 255 255 / 0.3);
  stroke-width: 0.6;
}

.orbit {
  fill: none;
  stroke: color-mix(in oklab, var(--accent), transparent 55%);
  stroke-width: 1.2;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.orbit-dot {
  fill: var(--accent);
}

.brand {
  font: 600 6px var(--font-display);
  letter-spacing: 0.35em;
  text-anchor: middle;
  fill: rgb(255 255 255 / 0.85);
}

.date {
  font: 600 5px var(--font-body);
  letter-spacing: 0.2em;
  text-anchor: middle;
  fill: var(--accent);
}

.hand {
  stroke: #fff;
  stroke-linecap: round;
}

.hand-hour {
  stroke-width: 3.2;
}

.hand-minute {
  stroke-width: 2.2;
}

.cap {
  fill: var(--accent);
  stroke: #000;
  stroke-width: 1;
}

/* Signature halo: a ring of light between the display and the crystal */
.halo {
  inset: 8%;
  border: calc(var(--size) * 0.012) solid var(--accent);
  box-shadow:
    0 0 calc(var(--size) * 0.06) color-mix(in oklab, var(--accent), transparent 40%),
    inset 0 0 calc(var(--size) * 0.05) color-mix(in oklab, var(--accent), transparent 50%);
}

.crystal {
  inset: 7%;
  background:
    radial-gradient(circle at 30% 25%, rgb(255 255 255 / 0.22), transparent 35%),
    linear-gradient(135deg, rgb(255 255 255 / 0.08), transparent 50%, rgb(255 255 255 / 0.05));
  border: 1px solid rgb(255 255 255 / 0.2);
}
</style>
