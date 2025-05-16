import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-router'] // ← prevents pre-bundling issues
  },
  ssr: {
    noExternal: ['react-router'] // ← prevents SSR resolution failures
  }
})
