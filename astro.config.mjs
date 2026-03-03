import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dctechnolabs.in',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
