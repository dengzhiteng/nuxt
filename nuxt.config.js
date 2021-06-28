export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SSR",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "以最终用户为主要对象，提供华为手机、无线上网设备、平板电脑、配件等系列终端产品和服务；"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style/initialize.css"],
  loading: { color: "#3B8070" },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/mock.js"],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  // 避免重复打包  Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["axios", "mockjs"]
  }
  // axios: {
  //   // 是否允许跨域
  //   proxy: true
  // },
  // proxy: {}
};
