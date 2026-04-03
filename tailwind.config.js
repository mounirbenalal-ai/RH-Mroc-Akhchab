/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        akhchab: {
          green: '#2D5A27',
          creme: '#F5F1E9',
        }
      },
      fontFamily: {
        noto: ['"Noto Kufi Arabic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
