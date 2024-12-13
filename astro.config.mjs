import { defineConfig } from 'astro/config';
import decapCmsOauth from "astro-decap-cms-oauth";


defineConfig({
    image: {
      endpoint: {
        route: "/image",
        entrypoint: "./src/image_endpoint.ts"
      }
    },
    integrations: [decapCmsOauth()],
  })

// https://astro.build/config
export default defineConfig({});


