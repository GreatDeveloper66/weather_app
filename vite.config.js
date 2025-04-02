import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['object-assign', 'vue3-leaflet', 'leaflet', 'concaveman', 'rbush','earcut']
  },
  build: {
    commonjsOptions: {
      sourcemap: false,
      include: [/node_modules/]
    }
  }
});


