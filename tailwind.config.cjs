/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#88e881",
        
"secondary": "#c12311",
        
"accent": "#b753ed",
        
"neutral": "#2E3338",
        
"base-100": "#DDE2EE",
        
"info": "#A4BDE5",
        
"success": "#4DE096",
        
"warning": "#A08208",
        
"error": "#F1225A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
