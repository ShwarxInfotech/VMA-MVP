import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dcff',
          300: '#86c2ff',
          400: '#4aa1ff',
          500: '#1e7fff',
          600: '#0a60db',
          700: '#084bb0',
          800: '#093f8f',
          900: '#0a366f',
        }
      }
    },
  },
  plugins: [],
} satisfies Config
