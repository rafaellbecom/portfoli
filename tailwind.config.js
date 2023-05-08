/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Archivo, sans-serif'
      }
    },
    fontFamily:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 48,
    },
    backgroundImage: {
      'bgHeader': "url('src/images/bgHeader.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    colors:{
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      blacklight: '#0F0F0F20', 
      blackdark: '#0F0F0F', 
      blackmedium: '#0F0F0F60', 
      whitelight: '#FFFFFF10', 
      whitedark: '#FFFFFF70', 
      whitemedium: '#FFFFFF40',
      redlight: '#E33B2620',
      redmedium: '#E33B2660',
      reddark: '#E33B26',
      purple: '#5B151A',
      lime: '#768842',
      sky: '#1F283F',
      amber: '#DFD2BA',
      grey: '#404040'
    },

    screens: {
      'celp': {'max': '375px'},
      // => @media (min-width: 640px) { ... }

      'celg': {'max': '480px'},
      // => @media (min-width: 768px) { ... }

      'tablet': {'max': '768px'},
      // => @media (min-width: 1024px) { ... }

      'deskp': {'max': '1024px'},
      // => @media (min-width: 1280px) { ... }

      'deskg': {'max': '1440px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
