import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#6b7280",
        background: "#ffffff",
        foreground: "#1f2937",
        primary: {
          DEFAULT: "#1f2937",
          foreground: "#f9fafb",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f9fafb",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937",
        },
        card: {
          DEFAULT: "transparent",
          foreground: "#1f2937",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'Noto Sans JP', 'sans-serif'],
      },
      maxWidth: {
        '350': '350px',
        '500': '500px',
        '960': '960px',
        '1120': '1120px',
        '1440': '1440px',
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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
  },
  plugins: [],
  darkMode: ["class"],
}

export default config