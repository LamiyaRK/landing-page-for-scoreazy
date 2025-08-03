// tailwind.config.js
module.exports = {
  content: [
    "./index.html",      // for raw HTML
    "./*.html",          // all html files in root folder
    "./src/**/*.{js,jsx,ts,tsx}",  // if using React/Vite
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
