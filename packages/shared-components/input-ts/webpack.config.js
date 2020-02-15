module.exports = {
  entry: './lib/index.js',
  output: {
    library: '@jsdt/input-ts',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-typescript',
            '@babel/preset-env',
            '@babel/preset-react'
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
  mode: 'development',
};
