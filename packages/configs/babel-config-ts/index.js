module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  env: {
    build: {
      ignore: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.story.tsx',
        '__snapshots__',
        '__tests__',
        '__stories__',
      ],
    },
  },
  ignore: ['node_modules'],
};
