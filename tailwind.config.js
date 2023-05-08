/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightMode: {
          background: "#e0e0e0",
          txt: "#2D2D2D",
          component: "#fcfcfc",
          btn: "#0891b2",
          componentHead: "#f0f0f0",
        },
        darkMode: {
          background: "#202124",
          txt: "#f7f7f7",
          component: "#3c4043",
          btn: "#033e4d",
          componentHead: "#111111",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
