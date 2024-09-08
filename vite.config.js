import { resolve } from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  server: { host: "0.0.0.0" },
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        quotation: resolve(__dirname, "quotation/index.html"),
      },
    },
  },
});
