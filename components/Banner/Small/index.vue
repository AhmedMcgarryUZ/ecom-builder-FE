<template>
  <div class="flex items-center justify-center py-2 text-xs font-bold tracking-widest uppercase font-secondary bg-surface-high text-clear">
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    content: string
}

defineProps<Props>()
</script>
