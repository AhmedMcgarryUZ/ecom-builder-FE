<template>
  <div class="text-sm text-clear">
    <div class="flex justify-center py-4 mx-auto divide-x-2 border-y-[0.1px] border-subtle bg-surface-high">
      <div class="flex items-center justify-end flex-1 gap-8 pr-8">
        <BaseIcon name="logos:facebook" class="w-8 h-8" />
        <BaseIcon name="logos:instagram-icon" class="w-8 h-8" />
        <BaseIcon name="logos:pinterest" class="w-8 h-8" />
      </div>
      <div class="flex items-center justify-start flex-1 gap-8 pl-8">
        <BaseIcon name="logos:mastercard" class="w-8 h-8" />
        <BaseIcon name="logos:amex-digital" class="w-8 h-8" />
        <BaseIcon name="logos:visa" class="w-8 h-8" />
        <BaseIcon name="logos:apple-pay" class="w-8 h-8" />
        <BaseIcon name="logos:paypal" class="w-8 h-8" />
      </div>
    </div>

    <div class="bg-surface">
      <div class="container flex justify-start py-4 mx-auto">
        <ul class="flex flex-col flex-1 gap-2">
          <li class="text-base font-bold uppercase font-primary">
            Help & Information
          </li>
          <li v-for="item in 6" :key="item">
            Some Link
          </li>
        </ul>

        <ul class="flex flex-col flex-1 gap-2">
          <li class="text-base font-bold uppercase font-primary">
            About Us
          </li>
          <li v-for="item in 5" :key="item">
            Some Link
          </li>
        </ul>

        <ul class="flex flex-col flex-1 gap-2">
          <li class="text-base font-bold uppercase font-primary">
            More from us
          </li>
          <li v-for="item in 8" :key="item">
            Some Link
          </li>
        </ul>

        <ul class="flex flex-col flex-1 gap-2">
          <li class="text-base font-bold uppercase font-primary">
            Shipping From
          </li>
          <li v-for="item in 3" :key="item">
            Some Link
          </li>
        </ul>
      </div>
    </div>

    <div class="py-4 bg-surface-low">
      <div class="container flex justify-between mx-auto">
        <p class="font-primary">
          © 2024 aha
        </p>

        <div class="flex text-xs">
          <p class="mx-2">
            Privacy & Cookies
          </p>
          <p class="mx-2">
            T&C's
          </p>
          <p class="mx-2">
            Accessibility
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
