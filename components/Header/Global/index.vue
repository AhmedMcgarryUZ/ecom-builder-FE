<template>
  <div class="bg-surface-high">
    <div class="container flex items-center justify-end w-full mx-auto text-xs lg:text-sm">
      <NuxtLink
        v-for="link in links"
        :key="link.slug"
        :to="link.slug"
        class="flex items-center gap-1 px-2 py-1 tracking-tighter border-r lg:px-4 first:border-x text-subtle border-subtle/70 font-secondary last:pr-0 last:border-r-0"
      >
        <BaseIcon v-if="link.icon" :name="link.icon" class="text-lg" />
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Help',
    icon: 'material-symbols:help-outline',
    slug: ''
  },
  {
    label: 'Blog',
    icon: 'material-symbols:ink-pen-outline',
    slug: ''
  },
  {
    label: 'Sign up',
    icon: 'material-symbols:account-circle',
    slug: ''
  },
  {
    label: 'UK',
    icon: 'flag:gb-4x3',
    slug: ''
  }
]
</script>
