@jsdevtools/babel-config
===================
[@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config) is a shareable config for [Babel](https://babeljs.io/).

Motivation
------------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same babel configuration across projects.

2. Enforce a consistent build configuration amongst contributors to a project.

Installation
------------

[Babel](https://babeljs.io/) and the [@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config) will be used to transpile source code of other projects. We're also going to include [babel-loader](https://webpack.js.org/loaders/babel-loader/) which will allow [webpack](https://webpack.js.org/) to use babel when building your project.

```
[src.js -> bundle.js]
webpack
  > babel-loader
    > @babel/core
      > @jsdevtools/babel-config
```

Often you will build your project and ship the transpiled code to be run on the server. In such cases, run the following [npm](https://docs.npmjs.com/about-npm/) command to install the dependencies as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install @babel/core babel-loader @jsdevtools/babel-config --save-dev
```

or

```bash
yarn add -D @babel/core babel-loader @jsdevtools/babel-config
```

On the other hand, if you will be deploying your source code, you will need to make sure your build tools are available in the target enviornment. In this case, run the following [npm](https://docs.npmjs.com/about-npm/) command to install the dependencies as [dependencies](https://docs.npmjs.com/files/package.json#dependencies) of your project:

```bash
npm install @babel/core babel-loader @jsdevtools/babel-config
```

or

```bash
yarn add @babel/core babel-loader @jsdevtools/babel-config
```

Configuration
-------------

Simply [add a babel key to your package.json file](https://babeljs.io/docs/en/config-files), like so:

```json
  "babel": {
    "extends": "@jsdevtools/babel-config"
  },
```

Related Projects
----------------

[@jsdevtools/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)

[@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config)

[@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdevtools/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/prettier-config)

[@jsdevtools/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config)
