import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [image()]
});