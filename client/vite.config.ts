import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// the images proxy might have to change when i deploy. ask Robert
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
      '/images': 'http://localhost:8080',
    },
  },
});
