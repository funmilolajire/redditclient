const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/*.tsx', './src/app/*.tsx', './src/scss/*.scss', './public/index.html'],
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
    extend: {
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'autoFitMin': 'repeat(auto-fit, minmax(250px, 1fr))',
        'autoFitSkillSet': 'repeat(auto-fit, minmax(200px, 1fr))',
        'autoFitSkillSetMin': 'repeat(auto-fit, minmax(150px, 1fr))',
        'autoFitSkillSetSm': 'repeat(auto-fit, minmax(100px, 1fr))',
      }
    },
    screens: {
      '2xl': { 'max': '1640px' },
      'xl': { 'max': '1366px' },
      'lg': { 'max': '1040px' },
      'md': { 'max': '780px' },
      'sm': { 'max': '590px' },
      'xs': { 'max': '100px' },
      'print': { 'raw': 'print' }
    }
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/aspect-ratio')],
}
