/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /^col-span-/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /^row-span-/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /^order-/,
      variants: ['sm', 'md', 'lg'],
    },
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#6A46F5',
      secondary: '#FF6771',
      tertiary: '#535353',
      cream: '#FFF7E8',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        hurricane: ['Hurricane', 'serif'],
      },
      order: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
