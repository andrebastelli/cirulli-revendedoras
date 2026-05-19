import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a24c',
          dark: '#9a7a2e',
          light: '#e6c878',
        },
        rose: '#e8c8c0',
        nude: '#f1e6d8',
        cream: '#fbf7f0',
        ink: '#2a221a',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #e6c878 0%, #9a7a2e 100%)',
        'gradient-soft': 'linear-gradient(180deg, #fbf7f0 0%, #f1e0d4 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(154,122,46,0.25)',
        gold: '0 12px 32px -10px rgba(201,162,76,0.55)',
      },
    },
  },
  plugins: [],
} satisfies Config
