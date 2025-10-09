import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import strip from "@rollup/plugin-strip";
import {visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  base: process.env.PUBLIC_URL, // Adjust this for GitHub Pages
  server: {  
    port: 3000, // Change the dev server port if needed
    host: '127.0.0.1', // use localhost or api address
    historyApiFallback: true, // for SPA routing
  },
  build: {
    outDir: 'dist', // Output directory
  },
  plugins: [visualizer({open: true}), // analyze bundle size
    react(), tailwindcss(),
    strip({
      include: '**/*.(js|jsx|ts|tsx)', // the files to strip
      functions: ['console.*', 'assert.*']

    })
  ]
});