import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './docs',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    },
  },
});
