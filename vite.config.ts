import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Build for Netlify (server functions + static assets)
  nitro: { preset: "netlify" },
});
