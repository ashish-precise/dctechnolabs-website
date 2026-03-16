import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dctechnolabs.in',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  }
});
