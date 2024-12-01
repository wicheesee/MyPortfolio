/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.indigo.400'), 0 0 20px theme('colors.indigo.950')"
      },
      colors: {
        primary: '#818CF8',
        secondary: '#9ca3af',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        vinylSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        'vinyl-spin': 'vinylSpin 3s linear infinite',
        blob: "blob 5s infinite",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
