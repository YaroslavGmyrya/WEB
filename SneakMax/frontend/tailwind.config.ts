import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'opacity-0', 
    'opacity-100', 
    'transition-opacity', 
    'duration-1000', 
    'ease-in-out',
    'visible', 
    'invisible'
  ],
  theme: {
    extend: {
      colors: {
  
        gray_border: "rgba(217, 217, 217, 1)",
        input_bg:"rgba(246, 246, 246, 1)",
        border_gray:"rgba(178, 181, 187, 1)",
        contact_bg: "rgba(243, 246, 246, 1)",
        custom_answer_text:"rgba(36, 36, 36, 0.5)",
        custom_question_text: "rgba(36, 36, 36, 1)",
        choice_gray: "rgba(128, 128, 128, 1)",
        custom_beige_border: "rgba(219, 187, 169, 1)",
        custom_gray_text: "rgba(68, 75, 88, 1)",
        custom_beige: "rgba(255, 244, 238, 1)",
        custom_purple: "rgba(72, 66, 131, 1)",
        custom_bg_text: "rgba(255, 255, 255, 0.3)",
        custom_coral: "rgba(241, 79, 79, 1)",
        white: "rgba(255,255,255,1)",
        white_0_5: "rgba(255,255,255,0.5)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        CustomGreyOp0: "rgba(11, 29, 38, 0)",
        CustomGreyOp1: "rgba(11, 29, 38, 0.85)",
      },
    },
  },
  plugins: [],
} satisfies Config;
