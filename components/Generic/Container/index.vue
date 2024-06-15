<template>
  <div class="relative flex flex-col py-12 mx-auto font-primary" :class="{ container: !fullBleed }">
    <h3 v-if="slots['subtitle']" class="text-lg tracking-widest uppercase">
      <slot name="subtitle" />
    </h3>
    <div class="flex items-center gap-12">
      <h2 v-if="slots['title']" class="text-2xl">
        <slot name="title" />
      </h2>
      <slot v-if="slots['action']" name="action" />
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
    fullBleed: boolean
}

withDefaults(defineProps<Props>(), {
  fullBleed: false
})

const slots = useSlots()
</script>
