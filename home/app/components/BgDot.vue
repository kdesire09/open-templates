<template>
  <div class="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
    <div
      class="
        absolute
        inset-0
        bg-[linear-gradient(var(--color-zinc-50)_0%,transparent_20%),radial-gradient(var(--color-zinc-300)_var(--dot-size),transparent_var(--dot-size)),radial-gradient(var(--color-zinc-300)_var(--dot-size),transparent_var(--dot-size))]
        dark:bg-[linear-gradient(var(--color-zinc-900)_0%,transparent_20%),radial-gradient(var(--accent-transparent)_var(--dot-size),transparent_var(--dot-size)),radial-gradient(var(--accent-transparent)_var(--dot-size),transparent_var(--dot-size))]
        bg-position-[0_0,0_0,var(--offset)_var(--offset)]
        bg-size-[100%_100%,var(--gap-size)_var(--gap-size),var(--gap-size)_var(--gap-size)]
        bg-zinc-50 dark:bg-zinc-900
        "
    />
  </div>
</template>
