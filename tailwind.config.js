/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // check
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    }
  ],
}

