// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  head: {
    // ...
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Changa&display=swap' },
    ],
    // ...
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
