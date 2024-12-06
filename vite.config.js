import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/front-genza', // Si está en la raíz, base debe ser '/'
  plugins: [react()],
});