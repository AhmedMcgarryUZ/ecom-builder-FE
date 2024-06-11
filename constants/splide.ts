// @ts-ignore
import type { Options } from '@splidejs/vue-splide'

export const BASE_CAROUSEL_OPTIONS: Options = {
  gap: 16,
  arrows: false,
  pagination: false,
  perMove: 1,
  type: 'slide',
  perPage: 4,
  trimSpace: true,
  breakpoints: {
    640: {
      perPage: 1,
      padding: {
        right: '40px'
      }
    },
    1020: {
      perPage: 2
    },
    1280: {
      perPage: 3
    }
  }
}

export const CATEGORY_CAROUSEL: Options = {
  ...BASE_CAROUSEL_OPTIONS,
  perPage: 3
}
