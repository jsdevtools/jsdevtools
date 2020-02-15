const DependenciesPlugin = require('storybook-dep-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    library: '@jsdt/input',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  plugins: [
    new DependenciesPlugin({
      filter: resource => /\.[tj]sx?$/.test(resource),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['babel-plugin-react-docgen'],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
  mode: 'development',
};
