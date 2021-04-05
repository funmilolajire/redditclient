const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/*.tsx', './src/app/*.tsx', './src/scss/*.scss', './public/index.html', './public/**/*'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      purple: colors.violet,
      pink: colors.pink,
      //custom colors
      ogColor: "#f80"
    },
    extend: {},
    screens: {
      '2xl': { 'max': '1640px' },
      'xl': { 'max': '1366px' },
      'lg': { 'max': '1040px' },
      'md': { 'max': '780px' },
      'sm': { 'max': '700px' },
      'xs': { 'max': '100px' },
      'print': { 'raw': 'print' }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
  future: {
    purgeLayersByDefault: true
  }
}
