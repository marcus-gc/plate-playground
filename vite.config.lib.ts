import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LightEditor',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@radix-ui/,
        /^@udecode/,
        /^@ariakit/,
        /^@react-email/,
        /^@emoji-mart/,
        /^slate/,
        /^next/,
        'lucide-react',
        'sonner',
        'ai',
        'date-fns',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
        'cmdk',
        'react-dnd',
        'react-dnd-html5-backend',
        'react-day-picker',
        'react-textarea-autosize',
        'zod',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
