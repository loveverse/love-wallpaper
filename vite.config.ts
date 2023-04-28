import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 9020,
    // 端口被占用不尝试使用下一个可用端口
    strictPort: false,
    // hmr: true,
  },
  build: {
    // 构建后是否生成source map文件
    sourcemap: false,
  },
});
