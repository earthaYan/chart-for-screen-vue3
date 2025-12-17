import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      deleteOriginFile: false,
      threshold: 10240, //体积大于10k才进行压缩
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      deleteOriginFile: false,
      threshold: 10240, //体积大于10k才进行压缩
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    visualizer({ open: true }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ["echarts"],
          vue: ["vue"],
          dataV: ["@kjgl77/datav-vue3"],
        },
      },
    },
  },
});
