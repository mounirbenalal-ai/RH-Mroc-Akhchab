import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // المسار الضروري لعمل الموقع على GitHub Pages
  base: '/RH-Mroc-Akhchab/', 
  
  plugins: [react()],
  
  server: {
    watch: {
      // تجاهل الملفات الضخمة لمنع أخطاء الذاكرة في الهاتف
      ignored: ['**/node_modules/**', '**/.cargo/**', '**/storage/**'],
    },
    host: true, 
  },
})

