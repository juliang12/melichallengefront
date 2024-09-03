import react from '@vitejs/plugin-react-swc'
// vite.config.ts
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Ajusta según tu configuración
    css: true,
  },
});
