/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bluebm: {
          50: "#e6e6f8",
          100: "#cdccf1",
          200: "#9b99e3",
          300: "#6966d5",
          400: "#3733c7",
          500: "#0500b9",
          600: "#040094",
          700: "#03006f",
          800: "#02004a",
          900: "#010025",
        },
        redbm: {
          50: "#fde7e7",
          100: "#fbcece",
          200: "#f79d9d",
          300: "#f46d6d",
          400: "#f03c3c",
          500: "#ec0b0b",
          600: "#bd0909",
          700: "#8e0707",
          800: "#5e0404",
          900: "#2f0202",
        },
        greenbm: {
          50: "#e8faec",
          100: "#d0f4d9",
          200: "#a1eab3",
          300: "#72df8d",
          400: "#43d567",
          500: "#14ca41",
          600: "#10a234",
          700: "#0c7927",
          800: "#08511a",
          900: "#04280d",
        },
        amberbm: {
          50: "#fdfae6",
          100: "#fbf5cc",
          200: "#f6eb99",
          300: "#f2e266",
          400: "#edd833",
          500: "#e9ce00",
          600: "#baa500",
          700: "#8c7c00",
          800: "#5d5200",
          900: "#2f2900",
        },
        tealbm: {
          50: "#e8f3f6",
          100: "#d1e6ee",
          200: "#a4cedd",
          300: "#76b5cb",
          400: "#499dba",
          500: "#1b84a9",
          600: "#166a87",
          700: "#104f65",
          800: "#0b3544",
          900: "#051a22",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
});
