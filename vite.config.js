import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vike()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#pages': path.resolve(__dirname, './pages'),
      '#assets': path.resolve(__dirname, './assets')
    }
  }
})