/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F1",
        ink: "#2E2A35",
        lavender: {
          DEFAULT: "#C9C2E8",
          dark: "#4A3F6B",
        },
        blush: {
          DEFAULT: "#F4C9D6",
          dark: "#5C3A45",
        },
        sage: {
          DEFAULT: "#B9CCB2",
          dark: "#33422E",
        },
        skyblue: {
          DEFAULT: "#B9D3E3",
          dark: "#2C3E4A",
        },
        plum: {
          DEFAULT: "#7C6A9C",
          light: "#9A8BB8",
        },
        nightbg: "#1B1723",
        nightcard: "#241E30",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
