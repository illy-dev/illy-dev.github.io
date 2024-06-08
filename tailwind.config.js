import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030706'
      },
      fontFamily: {
        sans: ['Inconsolata']
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        swipe: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        typing: 'typing 1.5s steps(40, end)',
        swipe: 'swipe 5s linear infinite',
      },
    },
  },
  plugins: [],
}

