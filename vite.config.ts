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
  },
});
