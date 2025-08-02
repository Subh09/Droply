// tailwind.config.js
// const {heroui} = require("@heroui/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./node_modules/@heroui/theme/dist/components/(card|ripple).js",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// };


// const { heroui } = require("@heroui/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}", // optional, but useful
//     "./node_modules/@heroui/theme/dist/components/(card|ripple).js", // keep this
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// };

// const { heroui } = require("@heroui/theme");

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@heroui/theme/dist/components/(card|ripple).js",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@heroui/theme")],
};
