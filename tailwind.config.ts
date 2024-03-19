import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['14px', '17.19px'],
        sm: ['16px', '24px'],
        lg: ['18px', '22px'],
        'xl': ['20px', '24px'],
        '2xl': ['24px', '36px'],
        '3xl': ['40px', '56.52px'],
        '4xl': ['50px', '74px'],
        '5xl': ['65px', '87.94px']
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('/background.png')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          default: "#0F1D45",
          primary: "#68CFA3",
          content1: "#181D29",
          content2: "#F1F1F1",
          content3: '#212327',
          content4: "#808080",
          secondary: "#F1F1F1",
          danger: "#FF3636",
          focus : '#EDEDED',
          overlay : '#E8E8E8',
        }
      },
      dark: {
        colors: {
          default: "#0F1D45",
          primary: "#68CFA3",
          content1: "#FFFFFF",
          content2: "#16181A",
          content3: '#212327',
          content4: '#B7B7B7',
          secondary: "#212327",
          danger: "#FF3636",
          focus : '#222528',
          overlay : '#212327',
        }
      },
    }
  })]
} satisfies Config;