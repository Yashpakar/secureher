/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      padding:{
        default:'15px'
      }
    },
    screens:{
       sm:'640px',
       md:'748px',
       lg:'960px',
       xl:'1330px'
    },
    extend: {
      colors:{
        primary:'#242a2b',
        secondary:'#808080',
        accent:{
          default:'#1cbccf',
          secondary:'#18abbc',
          ternary:'#90c6cd',

        },
        grey:'#e8f0f1',
      },
      fontFamily:{
        primary:'Poppins'
      },
      boxShadow:{
        custom1:'0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2:'0px 0px 30px 0px rgba(8,73,81,0.06)'
      },
      backgroundImage:{
             logo:'url(../../src/assets/header/logo.png)'        
      }
    },
  },
  plugins: [],
}