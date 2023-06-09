module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",

    [
      "postcss-custom-properties",
      {
        files: [ "./styles/theme.css" ],
        preserve: false,
      },
    ],
    "postcss-flexbugs-fixes",
    "postcss-nesting",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
}
