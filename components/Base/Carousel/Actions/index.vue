<template>
  <div
    class="absolute flex items-center justify-center gap-1 m-auto top-12 right-2"
  >
    <button
      aria-label="slide left"
      class="flex items-center justify-center rounded-full bg-surface text-subtle"
      @click="emit('slide-left')"
    >
      <base-icon
        name="material-symbols:chevron-left-rounded"
        class="mr-1 text-3xl"
      />
    </button>

    <button
      aria-label="slide right"
      class="flex items-center justify-center rounded-full bg-surface text-subtle"
      @click="emit('slide-right')"
    >
      <base-icon
        name="material-symbols:chevron-right"
        class="ml-1 text-3xl"
      />
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['slide-left', 'slide-right'])
</script>
