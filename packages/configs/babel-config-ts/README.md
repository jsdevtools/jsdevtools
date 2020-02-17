@jsdt/babel-config-ts
===================
[![NPM](https://img.shields.io/npm/l/@jsdt/babel-config-ts)](LICENSE)

[@jsdt/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts) is a shareable typescript config for [Babel](https://babeljs.io/).

Motivation
------------
1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same babel configuration across projects.
2. Enforce a consistent build configuration amongst contributors to a project.

Installation
------------
[@babel/cli](https://babeljs.io/docs/en/babel-cli) will be used to transpile typescript files to intermediate javascript and place it in ```./lib``` folder.

[Babel](https://babeljs.io/) and the [@jsdt/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config) will be used to transpile the intermediate javascript files in the ```./lib``` folder and place the end result it in the ```./dist``` folder. We're also going to include [babel-loader](https://webpack.js.org/loaders/babel-loader/) which will allow [webpack](https://webpack.js.org/) to use babel when building your project.

```
[src.ts -> intermediate.js]
@babel-cli 

[intermediate.js -> bundle.js]
webpack
  > babel-loader
    > @babel/core
      > @jsdt/babel-config
```

Often you will build your project and ship the transpiled code to be run on the server. In such cases, run the following [npm](https://docs.npmjs.com/about-npm/) command to install the dependencies as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install @babel/cli @babel/core babel-loader @jsdt/babel-config --save-dev
```
or
```bash
yarn add -D @babel/core babel-loader @jsdt/babel-config-ts
```

On the other hand, if you will be deploying your source code, you will need to make sure your build tools are available in the target enviornment. In this case, run the following [npm](https://docs.npmjs.com/about-npm/) command to install the dependencies as [dependencies](https://docs.npmjs.com/files/package.json#dependencies) of your project:

```bash
npm install @babel/cli @babel/core babel-loader @jsdt/babel-config-ts
```
or
```bash
yarn add @babel/cli @babel/core babel-loader @jsdt/babel-config-ts
```

Configuration
-------------
Simply [add a babel key to your package.json file](https://babeljs.io/docs/en/config-files), like so:
```json
  "babel": {
    "extends": "@jsdt/babel-config-ts"
  },
```

Scripts
-------
Tanspile typescript to intermediate javascript:
```bash
babel src --out-dir lib --extensions ".ts,.tsx" --source-maps inline
```

Transpile intermediate javascript during bundling:
```bash
webpack --config webpack.config.js
```

Related Projects
----------------
[@jsdt/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config)

[@jsdt/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdt/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)
