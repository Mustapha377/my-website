import { plugin } from "postcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
          inter:["inter", "sans-serif"],
          poppins:["poppins", "sans-serif"],
          grotesk: ["space Grotesk", "sans-serif"],
          manrope: ["Manrope", "sans-serif"]
          },
      keyframes: {
        'pull-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
        },
        'slideInRight':{
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'scroll':{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shine':{
          '0%': { backgroundPosition: '-200 center' },
          '100%': { backgroundPosition: '200 center' },
        }
        

      },
      animation: {
        'pull-down': 'pull-down 0.5s ease-out forwards',
        'shake': 'shake 0.5s ease-in-out',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'scroll':'scroll 25s linear infinite',
        'shine': 'shine 2s infinite linear'

      },
    },
  },
 
plugin:[
   require("tailwind-scrollbar-hide")
]
};