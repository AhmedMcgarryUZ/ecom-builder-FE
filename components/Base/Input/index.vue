<template>
  <div class="flex items-center justify-start gap-1 p-2 border rounded bg-surface-high border-surface-high focus-within:border focus-within:border-primary">
    <BaseIcon v-if="icon" :name="icon" class="text-lg" />
    <Input class="bg-transparent focus:outline-none focus:border-none" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
interface Props {
    icon?: string,
}

defineProps<Props>()
</script>
