/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Neucha: ['Neucha', 'cursive'],
      },
      colors: {
        backgroundBlue: '#1fb6ff',
      },
    },
  },
  plugins: [],
};
