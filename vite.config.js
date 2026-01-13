import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',  // Necessary to allow external access
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: 'dist', // Vite will output your production build here
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Optimize larger libraries
        },
      },
    },
  },
  base: '/',
  preview: {
    allowedHosts: ['joaomramaral.com'],
  },  

});


