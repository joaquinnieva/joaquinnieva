/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#c4c4c4',
        primary: {
          500: '#33383c',
          700: '#2a2e31',
          800: '#272b2f',
          900: '#222629',
        },
      },
    },
  },
  plugins: [],
}
