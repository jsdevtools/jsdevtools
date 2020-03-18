@jsdevtools/eslint-config
===================

[![NPM](https://img.shields.io/npm/l/@jsdevtools/eslint-config)](LICENSE)

[@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) is a set of [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/).

Motivation
------------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same eslint configurations across projects.

2. Enforce a consistent style amongst contributors to a project.

Installation
------------

[ESLint](https://eslint.org/) and the [@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) will be used in the development of other projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install eslint @jsdevtools/eslint-config --save-dev
```

or

```bash
yarn add -D eslint @jsdevtools/eslint-config
```

Configuration
-------------

Simply [add an eslintConfig key to your package.json file](https://eslint.org/docs/user-guide/configuring), like so:

```json
  "eslintConfig": {
    "extends": "@jsdevtools/eslint-config"
  },
```

Extend with additonal configurations:

```json
  "eslintConfig": {
    "extends": [
      "@jsdevtools/eslint-config",
      "@jsdevtools/eslint-config/react"
    ]
  },
```

Override specific rules:

```json
  "eslintConfig": {
    "extends": "@jsdevtools/eslint-config",
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

[@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)

[@jsdevtools/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)

[@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdevtools/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/prettier-config)

[@jsdevtools/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config)
