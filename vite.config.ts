import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/mdgabx-portfolio',
  plugins: [

  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
