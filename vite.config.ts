import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: {
        ignored: [
          '**/.claude/**',
          '**/.agents/**',
          '**/.qwen/**',
          '**/node_modules/**',
          '**/.git/**',
          (path) => path.includes('.claude') || path.includes('.agents') || path.includes('.qwen')
        ]
      },
      proxy: {
        '/upload': 'http://127.0.0.1:5000',
        '/process': 'http://127.0.0.1:5000',
        '/download': 'http://127.0.0.1:5000',
      }
    },
  };
});
