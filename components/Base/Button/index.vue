<template>
  <button class="uppercase rounded-full font-primary" :class="styles">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
    type: 'primary' | 'secondary' | 'ghost' | 'label'
}

const props = defineProps<Props>()

const styles = computed(() => {
  const map = {
    primary: 'px-4 py-2 bg-primary',
    secondary: 'px-4 py-2 bg-secondary',
    ghost: '',
    label: 'underline'
  }

  return map[props.type]
})
</script>
