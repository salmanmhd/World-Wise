import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    proxy: {
      '/APIs/cities.json/cities': {
        target: 'https://salmanmhd.github.io',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/APIs\/cities.json\/cities/,
            '/APIs/cities.json/cities'
          ),
      },
    },
  },
});
