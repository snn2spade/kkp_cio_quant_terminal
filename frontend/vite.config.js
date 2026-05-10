import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    allowedHosts: ['ptsecwpcgc5010'],
    port: 3000,
    open: process.env.VITE_OPEN_BROWSER === 'true'
  }
})
