const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Main', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
