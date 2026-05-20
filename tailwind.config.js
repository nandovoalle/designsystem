/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#13283C',
          700: '#304A64',
          300: '#BFD8F3',
          100: '#9CB1C8',
        },
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
