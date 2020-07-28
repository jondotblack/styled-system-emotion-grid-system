const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias.src = path.resolve(__dirname, '../src');
    config.resolve.alias.components = path.resolve(__dirname, '../src/components');
    config.resolve.alias.styles = path.resolve(__dirname, '../src/styles');

    return config;
  },
};
