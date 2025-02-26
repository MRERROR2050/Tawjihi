/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       main: '#0c623d',
       hover: '#2a7d57',  // تخصيص اللون الأزرق المخصص
      },
    },
  },
  plugins: [],
}
