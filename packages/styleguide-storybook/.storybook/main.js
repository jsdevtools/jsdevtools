const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const DependenciesPlugin = require('storybook-dep-webpack-plugin');

module.exports = {
  //  presets: ['storybook-addon-deps', '@storybook/addon-docs/preset'],
  stories: ['../stories/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],

  webpackFinal: async config => {
    config.plugins = [
      ...config.plugins,
      new DependenciesPlugin({
        filter: resource => /\.stories\.[tj]sx?$/.test(resource),
      }),
    ];

    config.plugins = [
      ...config.plugins,
      new DependenciesPlugin({
        filter: resource => /\.stories\.[tj]sx?$/.test(resource),
      }),
    ];

    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
        },
      ],
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    config.module.rules.push({
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      ],
    });

    return config;
  },
};
