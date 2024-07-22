import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    testMatch: ['**/*.spec.ts'],
    testOptions: {
      files: ['**/*.spec.ts'],
      require: ['esbuild-register'],
      verbose: true,
    },
  },
})
