import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base '/' perché la repo si chiama mattiaalessi.github.io (user site → radice).
// Se sposti il sito in una repo chiamata "portfolio", cambia in '/portfolio/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
