// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: [300, 400, 700],
        'Fjalla One': [400]
      }
    }],
    'nuxt-icon',
    '@nuxt/image'
  ],
  pinia: {
    storesDirs: ['stores']
  },
  runtimeConfig: {
    public: {
      CMS_BASE_URL: process.env.CMS_BASE_URL
    }
  }
})
