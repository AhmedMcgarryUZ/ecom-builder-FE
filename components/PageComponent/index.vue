<template>
  <div v-if="widget">
    <component v-bind="widget" :is="widget.is" v-if="widget.slots.length">
      <PageComponent
        v-for="child in childWidgets"
        :key="child.id"
        :widget="child"
        :page-data="pageData"
      />
    </component>
    <component v-bind="widget" :is="widget.is" v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Page } from '~/types/page'
import type { Widget } from '~/types/widget'

interface Props {
  widget: Widget;
  pageData: Page;
}

const props = defineProps<Props>()

const childWidgets = computed(() => {
  return props.widget.slots.map(id =>
    props.pageData.attributes.widgets.find(widget => widget.id === id)
  ).filter(Boolean)
})
</script>
