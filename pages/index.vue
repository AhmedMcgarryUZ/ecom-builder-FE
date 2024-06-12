<template>
  <div>
    <BannerSmall content="Free standard delivery when you spend £45 or more!" />
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

    <ContainerCarousel title="Shop Latest Drops" subtitle="Mens">
      <CardSimple v-slot="{ item }" v-bind="item" />
    </ContainerCarousel>

    <ContainerCarousel title="Shop By Category" subtitle="Mens" :options="CATEGORY_CAROUSEL">
      <CardSimple v-slot="{ item }" v-bind="item" />
    </ContainerCarousel>

    <BannerSmall content="25% Off womens when you spend £199 or more!" />
    <BannerLarge>
      <GenericOverlay placement="left" class="gap-4 px-12 py-8 rounded bg-slate-900/10 backdrop-blur-sm ">
        <div class="flex flex-col gap-2">
          <h1 class="text-8xl font-primary">
            Gifts from you, to her
          </h1>

          <p class="text-lg font-thin font-secondary">
            The best gifts for Dads who lift, Dads who run, or Dads who want to.
          </p>
        </div>

        <div class="flex gap-4 text-2xl">
          <BaseButton type="primary" class="min-w-[185px] tracking-wide">
            Shop Now
          </BaseButton>
        </div>
      </GenericOverlay>
    </BannerLarge>

    <ContainerCarousel title="Shop Latest Drops" subtitle="Women">
      <CardSimple v-slot="{ item }" v-bind="item" />
    </ContainerCarousel>

    <ContainerCarousel title="Shop By Category" subtitle="Women" :options="CATEGORY_CAROUSEL">
      <CardSimple v-slot="{ item }" v-bind="item" />
    </ContainerCarousel>

    <BannerLarge class="backdrop-brightness-50">
      <GenericOverlay placement="center" class="gap-2 px-12 py-8 rounded">
        <div class="flex flex-col gap-2">
          <h1 class="text-5xl uppercase font-primary">
            The collegiate collection
          </h1>

          <p class="font-thin font-secondary">
            Premium heavyweight fabric, oversized fits and a vintage washed finish. Sick. And it’s heading to The Dropset. Download the Gymshark app now to shop the collection 48-hours early.
          </p>
        </div>

        <div class="flex gap-4 text-lg">
          <BaseButton type="primary" class="min-w-[185px] tracking-wide">
            Shop on the App
          </BaseButton>
          <BaseButton type="secondary" class="min-w-[185px] tracking-wide">
            Preview Collection
          </BaseButton>
        </div>
      </GenericOverlay>
    </BannerLarge>
  </div>
</template>

<script setup>
import { CATEGORY_CAROUSEL } from '~/constants/splide'
</script>
