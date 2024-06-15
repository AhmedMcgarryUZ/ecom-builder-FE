<template>
  <GenericContainer>
    <template #subtitle>
      {{ subtitle }}
    </template>
    <template #title>
      {{ title }}
    </template>

    <BaseCarousel :options="computedOptions">
      <SplideSlide v-for="item in 5" :key="item">
        <slot item="item" />
      </SplideSlide>
    </BaseCarousel>
  </GenericContainer>
</template>

<script setup lang="ts">
// @ts-ignore
import { SplideSlide } from '@splidejs/vue-splide'
// @ts-ignore
import { BASE_CAROUSEL_OPTIONS } from '~/constants/splide'

interface Props {
    title: string,
    subtitle?: string,
    options?: any,
}

const props = defineProps<Props>()

const computedOptions = computed(() => {
  if (props.options) {
    return {
      ...BASE_CAROUSEL_OPTIONS,
      ...props.options
    }
  }

  return BASE_CAROUSEL_OPTIONS
})
</script>
