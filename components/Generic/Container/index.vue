<template>
  <div class="container relative flex flex-col gap-2 py-12 mx-auto font-primary">
    <h3 class="text-lg tracking-widest uppercase">
      <slot name="subtitle" />
    </h3>
    <div class="flex items-center gap-12">
      <h2 class="text-2xl">
        <slot name="title" />
      </h2>
      <BaseButton type="label" class="text-sm font-bold capitalize font-secondary">
        View All
      </BaseButton>
    </div>

    <slot />
  </div>
</template>
