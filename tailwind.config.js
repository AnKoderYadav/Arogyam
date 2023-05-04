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
          txt: "#030303",
          component: "#fcfcfc",
          btn: "#0891b2",
          componentHead: "#f0f0f0",
        },
        darkMode: {
          background: "#000000",
          txt: "#f7f7f7",
          component: "#1e1e1e",
          btn: "#033e4d",
          componentHead: "#111111",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
