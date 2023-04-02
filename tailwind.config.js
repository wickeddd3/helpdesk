/** @type {import('tailwindcss').Config} */

import tailwindcssforms from '@tailwindcss/forms';

export default {
  // Specify the file formats where tailwind should work
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssforms,
  ],
}

