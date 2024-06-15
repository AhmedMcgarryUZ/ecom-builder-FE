<template>
  <Suspense>
    <template #default>
      <PageComponent v-for="widget in rootElements" :key="widget.id" :widget="widget" :page-data="data" />
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import type { Page } from '@/types/page'

const { data } = await useService<Page>('/api/page')

const rootElements = computed(() => data.value?.attributes.widgets.filter(el => el.parentId === 'root'))
</script>
