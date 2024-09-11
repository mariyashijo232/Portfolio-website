/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ['"Yeseva One"', 'serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      },
    },
  },
  plugins: [],
}
