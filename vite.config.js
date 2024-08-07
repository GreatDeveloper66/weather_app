// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     sourcemap: false
//   },
//   test: {
//     testMatch: ['**/*.spec.ts'],
//     testOptions: {
//       files: ['**/*.spec.ts'],
//       require: ['esbuild-register'],
//       verbose: true,
//     },
//   },
// })


// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     sourcemap: false,
//   },
//   optimizeDeps: {
//     include: ['vue3-leaflet', 'leaflet']
//   }
// });


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


