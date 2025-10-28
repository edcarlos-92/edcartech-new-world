const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],

  theme: {
    typography: (theme) => ({
      dark: {
        css: {
          color: 'white',
        },
      },
    }),

    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        //trebuchet: ['"Trebuchet MS"'],
        trebuchet: ['Roboto'],
      },
      colors: {
        'warm-gray': colors.stone,
        teal: colors.teal,
      },
    },

    colors: {
      transparent: 'transparent',
      black: '#111827', //'#000',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/*
{
  // Won't work:
  'sans': ['Exo 2', ...],

  // Add quotes:
  'sans': ['"Exo 2"', ...],

  // ...or escape the space:
  'sans': ['Exo\\ 2', ...],
}
*/
