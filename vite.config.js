import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-website/', // Adjust this for GitHub Pages
  server: {  
    port: 3000, // Change the dev server port if needed
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      // Remove the external configuration if not necessary
      external: ['react-simple-typewriter'],
    }
  },
  plugins: [react()],
});