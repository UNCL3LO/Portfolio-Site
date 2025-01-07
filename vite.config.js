import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries into separate chunks
          react: ['react', 'react-dom'],
          three: ['three'],
        },
      },
    },
    // Increase the chunk size warning limit (optional)
    chunkSizeWarningLimit: 1500,
  },
})
