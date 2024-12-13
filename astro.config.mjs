import { defineConfig } from 'astro/config';

defineConfig({
    image: {
      endpoint: {
        route: "/image",
        entrypoint: "./src/image_endpoint.ts"
      }
    },
  })

// https://astro.build/config
export default defineConfig({});


