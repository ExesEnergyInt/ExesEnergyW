/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        exyellow: {
          DEFAULT: "#FFCC00",
        },
        exblack: {
          DEFAULT: "#231F20",
        },
        exwhite: {
          DEFAULT: "#F9F4E8",
        },
        exgreen: {
          DEFAULT: "#006633",
        },
      },

      breakpoints: {
        sm: "30em", // ~480px (small devices like older iPhones)
        md: "48em", // ~768px (tablets like iPad)
        lg: "62em", // ~992px (small laptops and desktops)
        xl: "80em", // ~1280px (large desktops)
        "2xl": "96em", // ~1536px (larger screens)
      },
    },
  },
  plugins: [],
};
