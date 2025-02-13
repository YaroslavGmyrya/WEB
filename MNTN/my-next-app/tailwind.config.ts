import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        CustomGreyOp0: "rgba(11, 29, 38, 0)",
        CustomGreyOp1: "rgba(11, 29, 38, 0.85)",
        CustomLightText: "rgba(251, 215, 132, 1)",
        blackBlue: "rgba(11, 29, 38, 1)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
