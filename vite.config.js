import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import basicSsl from "@vitejs/plugin-basic-ssl";
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Offline_App_Test/',
  plugins: [VitePWA({
    registerType: 'prompt',
    strategies: "generateSW",

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'my-offline-app',
      short_name: 'my-offline-app',
      description: 'my-offline-app',
      theme_color: '#3C0000',
      display: 'standalone',      // Emulates a native app look
      orientation: 'portrait',
      start_url: '/Offline_App_Test/',
      scope: '/Offline_App_Test/',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      modifyURLPrefix: {
        '': '/Offline_App_Test',
      },
      navigateFallback: '/Offline_App_Test/index.html'
    },

    devOptions: {
      enabled: false,
      navigateFallback: '/Offline_App_Test/index.html',
      suppressWarnings: false,
      type: 'module',
    },
  }),
  basicSsl(),
  mkcert()
  ],
  server: {
    https: true
  }
})