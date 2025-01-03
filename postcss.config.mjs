/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    "cssnano", // Minifies the CSS
  ],
};

export default config;
