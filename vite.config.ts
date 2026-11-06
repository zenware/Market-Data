import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',
  plugins: [react()],
  server: {
    port: 3000,
    proxy: { '/v1': 'http://localhost:8080' }
  },
  build: { outDir: '../static', emptyOutDir: true }
})
