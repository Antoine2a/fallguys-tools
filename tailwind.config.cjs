/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'fallGuys': ["Titan One", "sans-serif"]
      },
      colors: {
        'fg-pink': '#F75BB1',
        'fg-cyan': '#4DDDE2',
      },
      backgroundImage: {
        'pattern-home': "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/src/assets/misc/Icon_TipToeFinale.webp')",
        'pattern-speedrun': "linear-gradient(to bottom, rgba(200, 140, 20, 0.9), rgba(170, 100, 20, 0.9)), url('/src/assets/misc/UI_currency_crowns_1080p.webp')",
        'pattern-factory': "url('/src/assets/bg-patterns/map_creator_pattern_idea.png')",
        'footer-banner': "url('/src/assets/images/bannerBackgroundFooter.png')",
      },
      textShadow: {
        'logo-shadow': '3px 3px #021017',
        'border-black': '1px 0 black, -1px 0 black, 0 1px black, 0 -1px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;'
      },
      backdropBlur: {
        'xs': '2px',
        'xxs': '1px',
      }
    },
    screens: {
      'xsm': "425px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('flowbite/plugin')
  ],

}
