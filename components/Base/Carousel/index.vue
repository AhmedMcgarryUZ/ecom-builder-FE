<template>
  <Splide ref="carousel" :options="options">
    <slot />
  </Splide>

  <BaseCarouselActions @slide-left="slideLeft" @slide-right="slideRight" />
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { BASE_CAROUSEL_OPTIONS } from '@/constants/splide'

interface Props {
    options: any
}

withDefaults(defineProps<Props>(), {
  options: () => BASE_CAROUSEL_OPTIONS
})

const carousel = ref()

const slideLeft = () => {
  carousel?.value?.go('<')
}

const slideRight = () => {
  carousel?.value?.go('>')
}
</script>
