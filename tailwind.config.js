/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#86469C",
        secondary: "#BC7FCD",
        accent: "#FB9AD1 ",
        dark: "#3a3b36",
        mygray: "#3e4040",
        textcolor: "#FFCDEA",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0px)" },
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        shake: "shake .2s ease-in-out ",
        loading: "loading 1.5s ease-in infinite",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
