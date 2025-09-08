/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "SimpleUI",
      fileName: "simple-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts(),
    storybookTest({
      configDir: path.join(dirname, ".storybook"),
    }),
  ],
  test: {
    
    globals: true,
  environment: "jsdom", // optional, Storybook plugin overrides this
  setupFiles: [path.resolve(__dirname, ".storybook/vitest.setup.ts")],
  browser: {
    enabled: true,
    headless: true, // or false if you want to see the browser
    provider: "playwright", // can also use "puppeteer"
    instances: [
      {
        browser: "chromium", // or "firefox", "webkit"
      },
    ],
  },
  },
});
