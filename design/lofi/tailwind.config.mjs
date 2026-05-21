import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  content: [join(__dirname, 'src/**/*.{astro,html,js,ts}')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, ui-sans-serif, system-ui, sans-serif)'],
      },
    },
  },
  plugins: [],
};
