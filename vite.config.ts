import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// إعدادات النشر لـ GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/RH-Mroc-Akhchab/', 
});
