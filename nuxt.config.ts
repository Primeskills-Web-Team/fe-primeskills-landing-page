// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head
    head: {
      title: 'Primeskills',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  css: ['~/assets/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-gtag'

  ],
  //GTag
  gtag: {
    id: 'G-79QHGCJ32B',
    config: {
      page_title: 'Primeskills'
    }
  },
  plugins: [
    // {src: '~/plugins/gdialog', mode: 'client'}
  ],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: [],
  },
})
