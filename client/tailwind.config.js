/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeftToRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-90px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        fadeInLeftToRight: 'fadeInLeftToRight 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}

