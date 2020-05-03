module.exports = {
  entry: './src/index.js',
  output: {
    library: '@jsdevtools/tuneable-fluentui',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  externals: {
    react: 'react',
    '@fluentui/react-northstar': '@fluentui/react-northstar',
    '@fluentui/react-icons-northstar': '@fluentui/react-icons-northstar',
  },
  mode: 'development',
};
