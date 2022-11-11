const {defineConfig} = require('@vue/cli-service')

const vueBaseConfig = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? process.env.APP_BASE_PATH : "/",
    // pwa: {
    //   workboxPluginMode: "InjectManifest",
    //   workboxOptions: {
    //     swSrc: "./src/service-worker.js",
    //   },
    //   short_name: "Solid PWA",
    //   name: "Solid PWA",
    //   start_url: "./", // This matters
    //   display: "standalone", // This also matters
    //   themeColor: "#1f2d40",
    //   msTileColor: "#81c784",
    //   manifestOptions: {
    //     // theme_color: "#1f2d40", // is the same as themeColor (injected)
    //     background_color: "#1f2d40",
    //   },
    //   icons: [
    //     {
    //       src: "./img/icons/android-chrome-192x192.png",
    //       sizes: "192x192",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/android-chrome-512x512.png",
    //       sizes: "512x512",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/android-chrome-maskable-192x192.png",
    //       sizes: "192x192",
    //       type: "image/png",
    //       purpose: "maskable",
    //     },
    //     {
    //       src: "./img/icons/android-chrome-maskable-512x512.png",
    //       sizes: "512x512",
    //       type: "image/png",
    //       purpose: "maskable",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon-60x60.png",
    //       sizes: "60x60",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon-76x76.png",
    //       sizes: "76x76",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon-120x120.png",
    //       sizes: "120x120",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon-152x152.png",
    //       sizes: "152x152",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon-180x180.png",
    //       sizes: "180x180",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/apple-touch-icon.png",
    //       sizes: "180x180",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/favicon-16x16.png",
    //       sizes: "16x16",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/favicon-32x32.png",
    //       sizes: "32x32",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/msapplication-icon-144x144.png",
    //       sizes: "144x144",
    //       type: "image/png",
    //     },
    //     {
    //       src: "./img/icons/mstile-150x150.png",
    //       sizes: "150x150",
    //       type: "image/png",
    //     },
    //   ],
    // },
});

module.exports = {
    vueBaseConfig
}

