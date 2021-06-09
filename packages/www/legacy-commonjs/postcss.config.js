module.exports = {
  plugins: [
    require("tailwindcss")("./legacy-commonjs/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
