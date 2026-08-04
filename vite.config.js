import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // WARNING: Must match your exact repository name case-sensitively
  base: '/Offline_App_Test/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Include any other PWA configuration properties here
    })
  ]
})

