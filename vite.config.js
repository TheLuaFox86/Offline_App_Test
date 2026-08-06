import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Offline_App_Test/',
  plugins: [VitePWA({
    registerType: 'prompt',
    injectRegister: false,

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
      scope: '/Offline_App_Test/'
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})