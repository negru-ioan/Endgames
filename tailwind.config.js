/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        'special-gray': '#202020',
        'violet-light': "rgb(200, 133, 229)",
        'base': '#262626',
        'base-semilight': '#1a1a1a',
        'base-light': '#303030'
      }
    },
  },
  plugins: [],
}

