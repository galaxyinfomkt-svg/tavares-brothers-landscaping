import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2D5016', // verde escuro
        leaf: '#4A7C2F', // verde médio (accent)
        sage: '#8FBC5A', // verde claro / sage
        cream: '#F8FAF5', // branco suave
        earth: '#6B4C2A', // marrom terra
        charcoal: '#1E2A1A', // cinza escuro
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-texture':
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0c0 22-18 40-40 40 22 0 40 18 40 40 0-22 18-40 40-40-22 0-40-18-40-40z' fill='%234A7C2F' fill-opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
