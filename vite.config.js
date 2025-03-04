import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['6867-2001-b011-3008-9d4c-bcc0-f8a7-3d6e-2252.ngrok-free.app'], 
    host: true, 
    port: 5173 
  }
})
