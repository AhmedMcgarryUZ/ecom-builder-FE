<template>
  <div class="flex items-center justify-start gap-1 p-2 border rounded bg-surface-low border-surface-low focus-within:border focus-within:border-primary">
    <BaseIcon v-if="icon" :name="icon" />
    <Input v-bind="$attrs" class="bg-transparent focus:outline-none focus:border-none" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

interface Props {
    icon?: string,
}

defineProps<Props>()
</script>
