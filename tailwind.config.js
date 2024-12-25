/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          400: "#3ab1d4",
          500: "#00bfd6",
          900: "#03b2c7",
        },
        searchBox: {
          300: "#f2f2f2",
          500: "#eee",
        },
        doctor: {
          800: "#004d6c",
        },
        address: {
          500: "#878787",
        },
        title: {
          800: "#044c6a",
        },
        mainLinks: {
          300: "#e5f9ff",
        },
        mainLinkColor: {
          500: "#598a98",
        },
        daysColor: {
          400: "#75950c",
          500: "#f9ffea",
        },
        customeGrey: {
          300: "#878787",
          600: "#f4f4f4",
          400: "#dbdbdb",
          900: "#6b6b6b",
        },
        city: {
          300: "#dff9ff",
          700: "#00677d",
        },
        customeGold: {
          400: "#e7e1ae",
        },
        buttonGrey: {
          500: "#efefef",
        },
        searchTitle: {
          500: "#a2a2a2",
        },
        grayContact: {
          400: "#f7f7f7",
        },
        greyBtn: {
          500: "#ccc",
          600: "#bcbcbc",
        },
        material: {
          400: "#BDBDBD",
          900: "#212121",
        },
        headerProfile: {
          500: "#00748e",
          300: "#0f9daf",
        },
        customeGreyBorder: {
          300: "#ececec",
        },
        hoverBlue: {
          400: "#42A5F5",
        },
        customePurple: {
          400: "#7272d8",
        },
        greyLine: {
          300: "#cdcdcd",
        },
        greenLink: {
          400: "#005761",
          500: "#88b200",
        },
      },
      boxShadow: {
        custome1: "0 2px 3px 0 #00000029",
        custome2: "0 0 15px #00000040",
        custome3: "0 3px 3px 0 #dedede",
        custome4: "0 3px 6px 0 #00000029",
      },

      screens: {
        custome1355: "1355px",
        smCustome: "530px",
        smSecondCustome: "690px",
      },
    },
  },
  plugins: [],
};
