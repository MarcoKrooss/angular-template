/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['Inter Medium'],
      'inter-black': ['Inter-Black'],
      'inter-bold': ['Inter-Bold'],
      'inter-semibold': ['Inter-SemiBold'],
      'inter-xbold': ['Inter-ExtraBold'],
      'inter-light': ['Inter-Light'],
      'inter-xlight': ['Inter-ExtraLight'],
      'inter-thin': ['Inter-Thin'],
      'inter-variablefont': ['Inter-VariableFont'],
      'inter-regular': ['Inter-Regular']
    }
  },
  plugins: [],
}