module.exports = {
  entry: './src/index.js',
  output: {
    library: '@jsdevtools/tuneable-jsdt',
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
    'styled-components': 'styled-components',
    '@jsdevtools/tuneable-fluentui': '@jsdevtools/tuneable-fluentui',
  },
  mode: 'development',
};
