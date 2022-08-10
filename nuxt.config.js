import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-dato',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-graphql-request',
    ['@nuxtjs/fontawesome', {
      component: 'FontAwesome',
      suffix: true,
      icons: {
        solid: [
          'faUserSecret',
          'faExclamationCircle',
          'faExclamationTriangle',
          'faChevronRight',
          'faStar',
          'faPen',
          'faClock',
          'faCalendarAlt',
          'faTimes',
          'faTimesCircle',
          'faChevronLeft',
          'faChevronCircleLeft',
          'faArrowLeft',
          'faUserCircle',
          'faUserAlt',
          'faCheckSquare',
          'faArrowRight',
          'faLock',
          'faChevronDown',
          'faChevronUp',
          'faCopy',
          'faPlus',
          'faBan',
          'faUpload',
          'faCopyright',
          'faMobileAlt',
          'faBars',
          'faInfoCircle',
          'faCheck',
          'faCheckCircle',
          'faDownload',
          'faTrash',
          'faHeart'
        ],
        brands: ['faFacebookF', 'faLinkedinIn', 'faGoogle', 'faApple']
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/strapi'
  ],

  strapi: {
    entities: ['homepage'],
    url: 'http://localhost:1337'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: process.env.VUE_APP_STRAPI_GRAPHQL_URL,
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {
          headers: {
            authorization: `Bearer ${process.env.VUE_APP_STRAPI_API_TOKEN}`
          }
        }
      }
      // ...your other clients
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {
      method: 'get', // Default to `POST`
    },

    /**
     * Optional
     * default: true (this includes cross-fetch/polyfill before creating the graphql client)
     */
    useFetchPolyfill: true,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: true,
  }
}
