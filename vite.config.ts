import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      mock: '/src/mock',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
