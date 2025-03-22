import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
