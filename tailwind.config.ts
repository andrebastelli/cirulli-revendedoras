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
          DEFAULT: '#00aec2',
          dark: '#008fa0',
          light: '#5fd3df',
        },

        rose: '#e8c8c0',
        nude: '#f1e6d8',
        cream: '#fbf7f0',
        ink: '#2a221a',
      },

      backgroundImage: {
        'gradient-gold':
          'linear-gradient(135deg, #5fd3df 0%, #008fa0 100%)',

        'gradient-soft':
          'linear-gradient(180deg, #fbf7f0 0%, #f1e0d4 100%)',
      },

      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,174,194,0.18)',

        gold: '0 12px 32px -10px rgba(0,174,194,0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config
