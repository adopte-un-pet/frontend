export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    titleTemplate: '%s - Adopte un pet',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Simplifier la gestions des interventions de votre entreprise grâce à Easy Tpe.'
      },
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {
    color: '#8050E2',
    continuous: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/style/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/leaflet.ts', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    "@nuxt/image",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/proxy",
    "@nuxtjs/sitemap",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
  ],

  auth: {
    strategies: {
      local: {
        user: {
          property: ''
        },
        token: {
          property: 'token',
          name: "Authorization"
        },
        endpoints: {
          login: {url: '/api/account/login', method: 'post', property: 'Token',},
          logout: {url: '/api/account/logout', method: 'post'},
          user: {url: '/api/account/user', method: 'post'}
        }
      }
    }
  },

  proxy: {
    '/api/': {
      target: process.env.API_URL || 'http://localhost:3333',
      pathRewrite: { '^/api/': 'api/' }
    }
  },
  axios: {
    proxy: true
  },
  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
