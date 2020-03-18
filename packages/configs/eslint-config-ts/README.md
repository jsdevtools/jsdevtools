@jsdevtools/eslint-config-ts
===================
[![NPM](https://img.shields.io/npm/l/@jsdevtools/eslint-config-ts)](LICENSE)

[@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts) is a set of [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) and typescript.

Motivation
------------
1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same eslint configurations across typescript projects.
2. Enforce a consistent style amongst contributors to a project.

Installation
------------
[ESLint](https://eslint.org/) and the [@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) will be used in the development of other typescript projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install eslint @jsdevtools/eslint-config-ts --save-dev
```
or
```bash
yarn add -D eslint @jsdevtools/eslint-config-ts
```

Configuration
-------------
Simply [add an eslintConfig key to your package.json file](https://eslint.org/docs/user-guide/configuring), like so:
```json
  "eslintConfig": {
    "extends": "@jsdevtools/eslint-config-ts"
  },
```
Extend with additonal configurations:
```json
  "eslintConfig": {
    "extends": [
      "@jsdevtools/eslint-config-ts",
      "@jsdevtools/eslint-config-ts/react"
    ]
  },
```
Override specific rules:
```json
  "eslintConfig": {
    "extends": "@jsdevtools/eslint-config-ts",
    "rules": {
      "max-len": [
        "error",
        {
          "code": 80,
        }
      ]
    }
  }
```

Related Projects
----------------
[@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config)

[@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)

[@jsdevtools/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)
