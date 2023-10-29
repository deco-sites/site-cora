export const theme = {
  "primary": "hsl(180 100% 10%)",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",

  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    colors: {
      "base-400": "#fdcdd5",
      "base-500": "#fcc0ca",
      "base-600": "#fd7b94",
      "gray-100": "#f0f4f8",
      "gray-200": "#c7cbcf",
      "gray-300": "#6b7076",
      "black": "#000",
    },
    screens: {
      "sm": { "min": "639px" },
      // => @media (max-width: 639px) { ... }
      "md": { "min": "767px" },
      // => @media (max-width: 767px) { ... }
      "lg": { "min": "1023px" },
      // => @media (max-width: 1023px) { ... }
      "xl": { "min": "1279px" },
      // => @media (max-width: 1279px) { ... }
      "xl-5": { "min": "1360px" },
      // => @media (max-width: 1600px) { ... }
      "2xl": { "min": "1600px" },
      // => @media (max-width: 1600px) { ... }
    },
  },
};
