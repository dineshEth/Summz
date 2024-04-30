/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'scode': ['Source Code Pro', 'monospace'],
      'Inter' : ["Inter"]
    },
    extend: {},
    
  },
  plugins: [],
}