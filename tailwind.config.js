/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      backgroundBlue: '#1fb6ff',
    },
    extend: {
      fontFamily: {
        Neucha: ['Neucha', 'cursive'],
      },
    },
  },
  plugins: [],
};
