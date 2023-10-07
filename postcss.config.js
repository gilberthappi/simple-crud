/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// .eslintrc.js

module.exports = {
  // Your other ESLint configurations...
  plugins: [
    require('postcss-normalize')(),
    // Add any other PostCSS plugins you need here.
  ],
  // Add an "overrides" section to exclude the specific file.
  overrides: [
    {
      files: ['postcss.config.js'], // Replace with your actual file name
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
      },
    },
  ],
};
