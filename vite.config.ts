import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base relativo: pronto para GitHub Pages (ajuste na etapa de publicação/PWA)
export default defineConfig({ plugins: [react()], base: './' })
