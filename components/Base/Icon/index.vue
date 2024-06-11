<template>
  <Icon :name="name" />
</template>

<script setup lang="ts">
interface Props {
    name: string
}

defineProps<Props>()
</script>
