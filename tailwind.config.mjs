/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        grotesk: ["space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
      keyframes: {
        // Your existing animations
        'pull-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
        },
        'slideInRight': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shine': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        
        // New animations for improved portfolio
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slideDown': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scaleIn': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        // Your existing animations
        'pull-down': 'pull-down 0.5s ease-out forwards',
        'shake': 'shake 0.5s ease-in-out',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'scroll': 'scroll 25s linear infinite',
        'shine': 'shine 2s infinite linear',
        
        // New animations for improved portfolio
        'fadeIn': 'fadeIn 0.8s ease-out',
        'slideUp': 'slideUp 0.8s ease-out',
        'slideDown': 'slideDown 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'bounce': 'bounce 1s infinite',
      },
    },
  },
  plugins: [
    tailwindScrollbarHide
  ],
}