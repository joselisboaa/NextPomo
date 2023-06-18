/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1B",
        secondary: "#4DCBD3",
        tertiary: "#0F0F0F",
        "rest-primary": "#F21616",
        "hover-primary": "#2E2E2F",
      },
      width: {
        8.75: "8.75rem",
      },
      height: {
        3.5: "3.5rem",
      },
    },
  },
  plugins: [],
};
