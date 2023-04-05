import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/fidoapplication/",
  build: {
    chunkSizeWarningLimit: 1000 // establece el límite de advertencia en 1000 kBs
  }
});