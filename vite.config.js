import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",

  root: resolve(__dirname, "src"),

  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: resolve(__dirname, "src/index.html"),
    },
  },
});
