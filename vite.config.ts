import { defineConfig } from 'vite'
// Install node types before calling below import
import { fileURLToPath } from 'url';
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      // Two methods available
      // Method 1: using fileURLToPath (keep adding other paths as needed)
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // Method 2: using path
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@core": path.resolve(__dirname, "src/core"),
    }
  }
})
