import {meta} from './data/meta'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: meta,

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
    { src: '~plugins/leaflet.ts', ssr: false },
    { src: '~plugins/moment-format.ts', ssr: true },
    {src: '~plugins/vee-validate.ts', ssr: false},
    {src: '~plugins/axios-accessor.ts', ssr: true}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    "@nuxt/image",
    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'moment',
    'bootstrap-vue/nuxt',
    "@nuxtjs/auth-next"
  ],
  axios: {
    proxy: true
  },

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
          login: {url: '/api/auth/login', method: 'post', property: 'Token'},
          logout: {url: '/api/auth/logout', method: 'post'},
          user: {url: '/api/auth/user', method: 'get'}
        }
      }
    }
  },

  proxy: {
    '/api/': {
      target: process.env.API_URL || 'http://localhost:3333',
      pathRewrite: { '^/api/': '/' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
