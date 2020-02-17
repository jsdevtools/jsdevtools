@jsdt/eslint-config
===================

[![NPM](https://img.shields.io/npm/l/@jsdt/eslint-config)](LICENSE)

[@jsdt/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) is a set of [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/).

Motivation
------------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same eslint configurations across projects.

2. Enforce a consistent style amongst contributors to a project.

Installation
------------

[ESLint](https://eslint.org/) and the [@jsdt/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) will be used in the development of other projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install eslint @jsdt/eslint-config --save-dev
```

or

```bash
yarn add -D eslint @jsdt/eslint-config
```

Configuration
-------------

Simply [add an eslintConfig key to your package.json file](https://eslint.org/docs/user-guide/configuring), like so:

```json
  "eslintConfig": {
    "extends": "@jsdt/eslint-config"
  },
```

Extend with additonal configurations:

```json
  "eslintConfig": {
    "extends": [
      "@jsdt/eslint-config",
      "@jsdt/eslint-config/react"
    ]
  },
```

Override specific rules:

```json
  "eslintConfig": {
    "extends": "@jsdt/eslint-config",
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

[@jsdt/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)

[@jsdt/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)

[@jsdt/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdt/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/prettier-config)

[@jsdt/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config)
