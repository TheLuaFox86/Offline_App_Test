import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or @vitejs/plugin-react depending on your stack
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // WARNING: Match your exact GitHub repository name case-sensitively
  base: '/your-repository-name/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Offline App',
        short_name: 'OfflineApp',
        theme_color: '#0070f3',
        // Ensure your manifest paths match your setup
      }
    })
  ]
})
