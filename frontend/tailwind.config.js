/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
        slideOut: 'slideOut 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)'}
        }
    },
  },
},
  plugins: [],
}

