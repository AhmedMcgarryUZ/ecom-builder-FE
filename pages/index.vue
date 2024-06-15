<template>
  <Suspense>
    <template #default>
      <PageComponent v-for="widget in rootElements" :key="widget.id" :widget="widget" :page-data="data" />
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
  <!--
  TODO:
  <BannerLarge>
    <GenericOverlay placement="left" class="gap-4 px-12 py-8 rounded bg-slate-900/10 backdrop-blur-sm ">
      <div class="flex flex-col gap-2">
        <h1 class="text-8xl font-primary">
          New Month, New Drops
        </h1>

        <p class="text-lg font-thin font-secondary">
          And even more new reasons to go gym. See you there.
        </p>
      </div>

      <div class="flex gap-4 text-2xl">
        <BaseButton type="primary" class="min-w-[185px] tracking-wide">
          Shop Women
        </BaseButton>
        <BaseButton type="secondary" class="min-w-[185px] tracking-wide">
          Shop Men
        </BaseButton>
      </div>
    </GenericOverlay>
  </BannerLarge>
   -->
</template>

<script setup lang="ts">
import type { Page } from '@/types/page'

const { data } = await useService<Page>('/api/page')

const rootElements = computed(() => data.value?.attributes.widgets.filter(el => el.parentId === 'root'))
</script>
