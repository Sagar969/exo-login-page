/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'tab': {'raw': '(max-width: 650px)'},

      sm: '480px',
      // => @media (min-width: 480px) { ... }

      md: '650px',
      // => @media (min-width: 650px) { ... }

      lg: '900px',
      // => @media (min-width: 900px) { ... }

      xl: '1080px',
      // => @media (min-width: 1080px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        grayish: '#bfbfbf',
        petalGreen: '#08a593',
        lightGray: '#464660',
        lighterGray: '#667085',
        blackBg: '#020100',
      },
      fontFamily : {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};

