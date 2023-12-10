/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        dakBlue1: 'hsl(218, 28%, 13%)',
        dakBlue2: 'hsl(216, 53%, 9%)',
        dakBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('./images/logo-dark-mode.svg')",
        'logo-light-mode': "url('./images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('./images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('./images/bg-curvy-light-mode.svg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}
