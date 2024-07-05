/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'theme': '#ec1c24',
        'color-1': '#636363',
        'color-2': '#e7e6e6',
        'color-3': '#3d3e3f',
        'color-4': '#a1a1a1',
        'placeholder-gray': '#a1a1a1',
      },

      backgroundColor: {
        'theme': '#ec1c24',
        'theme-hover': '#cb0c12',
        'light-dark': '#333333',
        
      },

      fontSize: {
        '22': '22px',
        '28': '28px'
      },

      width: {
        'mw-10': '10px'
      },

      inset: {
        '7': '7px',
        '8': '8px',
        '10': '10px',
        '15': '15px',
        '23': '23px',
        '130': '130px'
      },

      boxShadow: {
        'theme': '0px 5px 0px 0px rgba(113, 42, 46, 1)',
        'footer': '0px 5px 5px 0px rgba(113, 42, 46, 1)',
      },

      borderWidth: {
        'filter': '0.31px',
        'links': '0.5px'
      },

      borderRadius: {
        'radius-left': '5px 0 0 5px',
      },

      borderColor: theme => ({
        'filter': "#5e5e5e",
        'links':'#989b9c',
      }),

      placeholderColor: theme => theme('colors')['placeholder-gray'],
      
    },
  },
  plugins: [],
}