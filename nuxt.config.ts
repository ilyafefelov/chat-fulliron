import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      witAiAuthorization: 'Bearer 2FRBXS5WS2NETCO5MHTE6V7D3NKM55OS', // can be overridden by NUXT_API_SECRET environment variable
      witAiUrl: 'https://api.wit.ai/event?v=20240213&session_id=prodwbp&context_map=%7B%7D', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, './')}/`,
      },
    },
  }

  // css: ['~/assets/css/tailwind.css'],
})
