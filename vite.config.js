import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // Указываем базовый путь
  resolve: {
    alias: {
      '@': '/src', // Для удобного импорта
    },
  },
  build: {
    ssr: false, // Отключаем SSR, чтобы Vite корректно работал на Vercel
  },
});

