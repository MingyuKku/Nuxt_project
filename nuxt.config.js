export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // components: true,
  head: {
    title: 'learn-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    // 'swiper/dist/css/swiper.css',
    'spinkit/spinkit.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/tui-editor.js',
      ssr: false,
      mode: 'client',
    },
    {
      src: '@/plugins/vuejs-paginate.js',
      ssr: false,
      mode: 'client',
    },
    {
      src: '@/plugins/vue-awesome-swiper.js',
      mode: 'client',
    },
    {src: '@/plugins/uiball-loaders.js', mode: 'client',},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-gsap-module',
    '@nuxtjs/axios',
    '@tui-nuxt/editor',
    // 'vue-wait/nuxt',
  ],
  tui: {
    editor: {}
  },
  // wait: { useVuex: true },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: 'auth',
  },

  // ssr: false,

  // loading: '@/components/LoadingComponent.vue',
  // loadingIndicator: {
  //   name: 'chasing-dots',
  //   color: 'purple',
  //   background: 'green'
  // },
  // loading: {
  //   color: 'blue',
  //   height: '5px',
  //   throttle: 0,
  // },

  // server
  server: {
    port: 5000,
  },
}
