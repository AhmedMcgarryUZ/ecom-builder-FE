<template>
  <GenericContainer>
    <template #subtitle>
      {{ subtitle }}
    </template>
    <template #title>
      {{ title }}
    </template>

    <BaseCarousel :options="options">
      <SplideSlide v-for="item in 5" :key="item">
        <slot item="item" />
      </SplideSlide>
    </BaseCarousel>
  </GenericContainer>
</template>

<script setup lang="ts">
// @ts-ignore
import { SplideSlide } from '@splidejs/vue-splide'

interface Props {
    title: string,
    subtitle?: string,
    options: any,
}

defineProps<Props>()
</script>
