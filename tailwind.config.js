/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-500': '500px',
        'md-300': '300px',
        'md-250': '250px',
      },
    },
  },
  plugins: [],
}