export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeflex/primeflex.css',
    "primevue/resources/primevue.min.css",
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primeicons/primeicons.css"

  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    '@nuxtjs/axios',
    'primevue/nuxt',

  ],
  axios: {
    proxy: true, // Used as fallback if no runtime config is provided
  },
  proxy: {
    '/api1/': {
      target: 'https://docs.gitlab.com/ee/topics/gitlab_flow.html',
      pathRewrite: { '^/api1/': '' }
    },
    '/api2/': {
      target: 'https://jsonplaceholder.typicode.com',
      pathRewrite: { '^/api2/': '' }
    },
    '/api3/': {
      target: 'https://www.youtube.com',
      pathRewrite: { '^/api3/': '' }
    },

  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  }
}
