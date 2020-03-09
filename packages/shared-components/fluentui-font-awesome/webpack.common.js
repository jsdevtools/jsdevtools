module.exports = {
  entry: './src/index.js',
  output: {
    library: 'fluentui-font-awesome',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  externals: {
    react: 'react',
    '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
  },
};
