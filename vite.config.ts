import { defineConfig } from "vite";
// import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from "path";

import type { UserConfigExport } from 'vitest/config';

const vitestConfig: UserConfigExport = {
  test: {
    globals: true,
    environment: "jsdom",
  }
};

export default defineConfig({
  ...vitestConfig,
  server: {
    port: 4000,
  },
  plugins: [
    // laravel({
    //   input: ['resources/css/app.css', 'resources/src/app.ts'],
    //   refresh: true,
    // }),
    vue({
      template: {
        transformAssetUrls: {
          // The Vue plugin will re-write asset URLs, when referenced
          // in Single File Components, to point to the Laravel web
          // server. Setting this to `null` allows the Laravel plugin
          // to instead re-write asset URLs to point to the Vite
          // server instead.
          base: null,

          // The Vue plugin will parse absolute URLs and treat them
          // as absolute paths to files on disk. Setting this to
          // `false` will leave absolute URLs un-touched so they can
          // reference assets in the public directly as expected.
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
});
