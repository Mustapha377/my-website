import { defineConfig } from 'vite';

export default defineConfig({
  base: '/full-stack-porfolio/', // Adjust this for GitHub Pages
  server: {
    port: 3000, // Change the dev server port if needed
  },
  build: {
    outDir: 'dist', // Output directory
  },
});
