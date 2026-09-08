import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        adamas: {
          black: '#0a0a0b',
          charcoal: '#161618',
          diamond: '#e5e7eb',
          red: '#c81e2c',
          gold: '#c9a227'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
