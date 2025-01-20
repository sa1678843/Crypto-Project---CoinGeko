/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
  daisyui: {
    themes: ["forest"],
  }
}

