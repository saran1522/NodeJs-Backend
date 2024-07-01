/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  // content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
