import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      'slate',
      'slate-react',
      'uploadthing/client',
    ],
  },
  root: path.resolve(__dirname, '.'),
  publicDir: 'public',
  server: {
    port: 7070,
    host: 'localhost',
    strictPort: true,
  },
  build: {
    outDir: 'demo-dist',
  },
});
