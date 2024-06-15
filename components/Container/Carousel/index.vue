<template>
  <GenericContainer :full-bleed="fullBleed">
    <template #subtitle>
      {{ subtitle }}
    </template>
    <template #title>
      {{ title }}
    </template>
    <template #action>
      <!-- <BaseButton type="label" class="text-sm font-bold capitalize font-secondary">
        View All
      </BaseButton> -->
    </template>

    <BaseCarousel :options="computedOptions" :show-arrows="showArrows">
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
import { BASE_CAROUSEL_OPTIONS } from '@/constants/splide'

interface Props {
    title: string,
    subtitle?: string,
    options?: any,
    showArrows?: boolean,
    fullBleed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: undefined,
  options: undefined,
  fullBleed: false
})

const computedOptions = computed(() => {
  if (!props.options) return BASE_CAROUSEL_OPTIONS

  return {
    ...BASE_CAROUSEL_OPTIONS,
    ...props.options
  }
})
</script>

<style lang="css">
.hero {
    padding: 0px;
}
</style>
