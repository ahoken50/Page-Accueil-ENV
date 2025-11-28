import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Page-Accueil-ENV/', // Update this to '/repo-name/' if deploying to https://<user>.github.io/<repo-name>/
})
