// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@hebilicious/vue-query-nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  devtools: {enabled: true},
  app: {
    head: {
      htmlAttrs: {
        lang: "ko",
      },
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
