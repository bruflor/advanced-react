import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
 
// https://vitejs.dev/config/
export default defineConfig ({
  plugins: [react ()],
  server: {
    proxy: {
      // Forward all requests starting with '/api' to your backend server
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        rewrite: path => path.replace (/^\/api/, ''),
      },
    },
  },
});
