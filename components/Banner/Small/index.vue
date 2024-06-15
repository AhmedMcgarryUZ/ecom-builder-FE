<template>
  <div class="flex items-center justify-center py-2 text-xs font-bold tracking-widest text-white uppercase font-secondary bg-primary">
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    content: string
}

defineProps<Props>()
</script>
