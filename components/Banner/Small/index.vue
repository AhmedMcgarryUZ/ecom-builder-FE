<template>
  <div class="flex items-center justify-center py-2 text-xs tracking-widest uppercase font-secondary bg-slate-900 text-subtle-inverse">
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    content: string
}

defineProps<Props>()
</script>
