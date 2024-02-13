// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import eslint from 'vite-plugin-eslint2';

export default defineNuxtConfig({
  //...

  buildModules: ["@nuxtjs/vuetify"],
  vuetify: {
    // Vuetify configuration
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com",
      },
    ],
  },
  css: ["@fortawesome/fontawesome-free/css/all.css", "/assets/styles.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Marhey: true,
          download: true,
          inject: true,
        },
      },
    ],
    //...
  ],

  vite: {
    plugins:[eslint()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
