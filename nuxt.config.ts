// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: "#e2e9f1",
          100: "#bed0e2",
          200: "#9ab7d4",
          300: "#769ec5",
          400: "#5285b6",
          500: "#365486",
          600: "#2d476e",
          700: "#243a56",
          800: "#1b2d3e",
          900: "#121f26",
          950: "#121f26",
        },
      },
      dark: {
        primary: {
          50: "#e2e9f1",
          100: "#bed0e2",
          200: "#9ab7d4",
          300: "#769ec5",
          400: "#5285b6",
          500: "#365486",
          600: "#2d476e",
          700: "#243a56",
          800: "#1b2d3e",
          900: "#121f26",
          950: "#121f26",
        },
      },
    },
  },
});

export default defineNuxtConfig({
  devtools: { enabled: true },

  // ========== START:: app CONFIGURATIONS ========== //
  app: {
    // or add to each page in definePgeMeta

    // pageTransition:false,
    // layoutTransition: false,
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    // head: {
    //   htmlAttrs: {
    //     // developer: "Mosbah Mohamed",
    //   },
    //   meta: [
    //     { charset: "utf-8" },
    //     {
    //       name: "viewport",
    //       content: "width=device-width, initial-scale=1",
    //     },
    //   ],
    //   link: [
    //     { rel: "icon", type: "image/x-icon", href: "/contact.png" },
    //     { rel: "stylesheet", href: "/css/style.css" },
    //     // Preconnect to Google's font services for faster loading
    //     { rel: "preconnect", href: "https://fonts.googleapis.com" },
    //     { rel: "preconnect", href: "https://fonts.gstatic.com" },

    //     // Link to Google Fonts for Noto Kufi Arabic font
    //     {
    //       href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap",
    //       rel: "stylesheet",
    //     },
    //   ],
    //   style: [],
    //   // script: [{ src: "/js/myscript.js", body: true }],
    //   noscript: [],
    // },
  },

  // ========== End:: app CONFIGURATIONS ========== //

  // ========== START:: Css ========== //
  css: ["primeicons/primeicons.css", "@/assets/style/tailwind.scss"],
  // ========== End:: Css ========== //

  // ========== start:: modules ========== //
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    // "@nuxtjs/axios",
    "@pinia/nuxt",
    "nuxt-aos",
    "@vee-validate/nuxt",
    "@element-plus/nuxt",
    "@primevue/nuxt-module",
    "nuxt-swiper",
    "@nuxtjs/html-validator",
    "@nuxtjs/fontaine",

    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي",
            code: "ar",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: "auto_website_lang",
          alwaysRedirect: true,
          // fallbackLocale: "en",
        },
        vueI18nLoader: true,
      },
    ],
  ],

  // ========== End:: modules ========== //

  // ========== START:: Plugins ========== //
  plugins: [
    { src: "~/plugins/vue-toastification.client" },
    { src: "~/plugins/vue-tel-input.client.ts" },
    // { src: "./plugins/axios" },
    { src: "~/plugins/pusher.client.ts" },
  ],

  // ========== End:: Plugins ========== //

  // ========== START:: primevue ========== //

  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          prefix: "p",
          darkModeSelector: null,
          // cssLayer: {
          //   name: "primevue",
          //   order: "tailwind-base, primevue, tailwind-utilities",
          // },
        },
      },
    },
  },

  htmlValidator: {
    usePrettier: true,
    failOnError: false,
    options: {
      rules: {
        // Allow Nuxt-specific IDs that start with underscore
        // "valid-id": [
        //   "error",
        //   {
        //     pattern: "^[a-zA-Z][a-zA-Z0-9_-]*$|^__nuxt$|^__NUXT_DATA__$",
        //   },
        // ],
        // Disable the title requirement as Nuxt handles this
        "element-required-content": "warn",
        // Make button type warning instead of error, or disable
        "no-implicit-button-type": "warn", // or 'off'
      },
    },
  },

  // ========== End:: primevue ========== //

  // :::::::::::::::::: start nuxt/image ::::::::
  // image: {
  //   dir: "assets/images/",
  //   imgix: {
  //     baseURL: "https://backend.samem.co",
  //   },
  // },
  // :::::::::::::::::: End nuxt/image ::::::::

  // :::::::::::::::::: Start Aos ::::::::
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  },

  // :::::::::::::::::: End Aos ::::::::

  // :::::::::::::::::: Start tailwind css ::::::::
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    cssPath: "~/assets/style/tailwind.scss",
  },

  // :::::::::::::::::: End tailwind css ::::::::

  // :::::::::::::::::: Start vee-validate ::::::
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  // :::::::::::::::::: End vee-validate ::::::::

  // :::::::::::::::::: Start import composables ::::::

  imports: {
    dirs: ["composables", "composables/*/cart.{js,ts}", "composables/**"],
  },

  // :::::::::::::::::: End import composables ::::::::

  // ========== START:: DEVELOPMENT SERVER CONFIGURATIONS ========== //

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    asyncContext: true,
    viewTransition: true,
    componentIslands: true,
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    timing: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  vite: {
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: {
            group1: ["./components/LazyImage.vue"],
            vendor: ["vue", "@vueuse/core"],
            components: ["./components/"],
            primevue: ["primevue"],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/style/variables.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      include: ["vue", "@vueuse/core",'pug', 'pug-plain-loader'],
    },
    plugins: [
      {
        name: "ssg-guard",
        enforce: "post",
        transform(code, id) {
          if (!id.includes("node_modules") && id.endsWith(".vue")) {
            return code.replace(
              /console\.(log|warn|error|debug|trace)/g,
              "// $&"
            );
          }
        },
      },
    ],
  },

  image: {
    provider: "ipx",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 80,
          height: 80,
        },
      },
    },
    domains: ["coffee-labapp.com"],
    format: ["webp", "avif"],
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Coffee Lab",
      short_name: "Coffee Lab",
      theme_color: "#365486",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: "https://coffee-labapp.com/api/",
    },
  },

  build: {
    transpile: ["primevue"],
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  // additionalData: `@import "~/assets/style/main.css";
  //                       @import "~/assets/style/abstracts/_mixins.scss";
  //                       @import "~/assets/style/component/_general.scss";
  //                       @import "~/assets/style/base/_typography.scss";
  //                       @import "~/assets/style/abstracts/_variables.scss";`,
  //       },
  //     },
  //   },
  // },

  // dev: true,
  // ssr: true,

  // ========== END:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
  devServer: {
    https: false,
    host: "localhost",
    port: 3000,
    // url: "https://localhost:3000",
  },

  compatibilityDate: "2024-11-20",
});