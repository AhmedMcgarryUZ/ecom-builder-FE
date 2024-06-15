<template>
  <div class="shadow-inner bg-surface text-clear">
    <div class="container flex py-2 mx-auto">
      <div class="flex items-center flex-1">
        <BaseLogo class="text-6xl" />
      </div>
      <nav class="items-center justify-center flex-1 hidden lg:flex">
        <ul class="flex items-center justify-center gap-12">
          <li v-for="link in nav" :key="link.slug" class="py-4 text-xl font-bold uppercase font-primary">
            <NuxtLink>{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center justify-end flex-1 gap-12">
        <BaseInput class="hidden text-sm lg:flex" placeholder="Search for a Product" icon="material-symbols-light:search" />

        <div class="flex gap-6 text-3xl">
          <BaseIcon
            v-for="action in actions"
            :key="action.action"
            class="cursor-pointer"
            :name="action.icon"
            @click="emits(action.action as keyof typeof emits)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['viewAccount', 'viewFavourites', 'viewCart'])
const nav = [
  {
    label: 'Women',
    slug: '/women'
  },
  {
    label: 'Men',
    slug: '/men'
  },
  {
    label: 'Accessories',
    slug: '/accessories'
  }
]

const actions = [
  {
    icon: 'material-symbols-light:account-circle',
    action: 'viewAccount'
  },
  {
    icon: 'material-symbols-light:shopping-basket-outline',
    action: 'viewCart'
  },
  {
    icon: 'material-symbols-light:favorite-outline',
    action: 'viewFavourites'
  }
]
</script>
