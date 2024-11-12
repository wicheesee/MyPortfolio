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
      },
      animation: {
        'vinyl-spin': 'vinylSpin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
