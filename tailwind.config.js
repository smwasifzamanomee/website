/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFDB58',
        secondary: '#6E3DED',
        info: '#FFC6B5',
        light: '#ffffff',
        dark: '#000000',
        
      },
      screens: {
        'sm': {'min': '370px','max': '600px'},
        'md': {'min': '601px', 'max': '820px'},
        'lg': {'min': '821px' },
        'xl': { 'min': '1200px'},
      }
    },
  },
  plugins: [],
}