// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: '~/components' },
    { path: '~/ui', pathPrefix: false }
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
