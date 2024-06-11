<template>
  <div class="absolute flex flex-col gap-8 text-clear-inverse" :class="positionClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
    placement: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'left'
})

const positionClasses = computed(() => {
  const map = {
    'bottom left': 'bottom-8 left-4 2xl:left-1/2 2xl:-translate-x-[88%]',
    left: '-translate-y-1/2 top-1/2 left-4 2xl:left-1/2 2xl:-translate-x-[83%]',
    center: '-translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 justify-center items-center text-center',
    right: '-translate-y-1/2 top-1/2 right-12 text-end items-end'
  }

  return map[props.placement]
})
</script>
