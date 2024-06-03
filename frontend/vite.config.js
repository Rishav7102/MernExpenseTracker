import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  app: {
    proxy: {
      '/api': 'https://mernexpensetracker.onrender.com',
    },
  },
  plugins: [react()],
})
