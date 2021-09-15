import tailwindTypography from '@tailwindcss/typography'

export default {
  env: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'WoSSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Workshop on Sustainable Software Sustainability (WoSSS), is a series of international workshops on the topic of software sustainability; it has a particular focus on bringing together different research communities and provisions for the long term.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Work+Sans:ital,wght@0,700;1,400,1,500&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/animate.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/materialdesignicons.min.css',
    '~/assets/lib/slick/slick.css',
    '~/assets/lib/slick/slick-theme.css',
    '~/assets/css/light-color.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
    '~/assets/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/gtag'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    ['vue-scrollto/nuxt', { duration: 2000 }]
  ],
  generate: {
    fallback: '404.html' // for Netlify
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
}
