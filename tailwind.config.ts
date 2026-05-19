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
    dark: '#007c8a',
    light: '#67d9e5',
  },

  // tons derivados do azul principal
  rose: '#c7eef2', // tom claro suave
  nude: '#e8f8fa', // fundo bem claro
  cream: '#f7fcfd', // quase branco azulado

  // texto principal
  ink: '#12343a', // azul petróleo escuro
},

      backgroundImage: {
  'gradient-gold':
    'linear-gradient(135deg, #67d9e5 0%, #007c8a 100%)',

  'gradient-soft':
    'linear-gradient(180deg, #f7fcfd 0%, #dff5f8 100%)',
},

boxShadow: {
  soft: '0 10px 30px -12px rgba(0, 174, 194, 0.18)',

  gold: '0 12px 32px -10px rgba(0, 174, 194, 0.40)',
},
    },
  },
  plugins: [],
} satisfies Config
