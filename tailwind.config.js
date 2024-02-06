/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/footer.jsx'
  ],
  theme: {
    extend: {
      grayscale: {
        70: '70%',
      } ,
      screens: {
        'tablet': '640px',
        'laptop': '992px',
        // => @media (min-width: 640px) { ... }
      }
      
    },
    
  },
  plugins: [],
}

