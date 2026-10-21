// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Indie Flower",
      cssVariable: "--indie-flower",
    },
  ],
  site: "https://johnantz.github.io",
  base: "/christmas-2026",
});
