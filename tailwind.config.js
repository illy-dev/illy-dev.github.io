/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Source Code Pro',
      body: 'Fira Code',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      'text': '#091211',
      'background': '#f9fcfc',
      'primary': '#50b8aa',
      'secondary': '#9fdcd4',
      'accent': '#6dcfc2',
     },
    extend: {},
  },
  plugins: [],
}