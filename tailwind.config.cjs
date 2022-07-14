/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
  [
    "./public/index.html"
  ],
  theme: {
    extend:
    {
      gridTemplateRows:
      {
        '8': 'repeat(8,minmax(0,1fr))'
      },
      gridRowEnd:
      {
        '8': '8',
        '9': '9'
      }
    }
  },
  plugins: [],
}
