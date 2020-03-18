@jsdevtools/stylelint-config
===================

[![NPM](https://img.shields.io/npm/l/@jsdevtools/stylelint-config)](LICENSE)

[@jsdevtools/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config) is a shareable config for [stylelint](https://stylelint.io/).

Motivation
----------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same stylelint configurations across projects.

2. Enforce a consistent style amongst contributors to a project.

Installation
------------

[Stylelint](https://stylelint.io/) and the [@jsdevtools/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config) will be used in the development of other projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install stylelint @jsdevtools/stylelint-config --save-dev
```

or

```bash
yarn add -D stylelint @jsdevtools/stylelint-config
```

Configuration
-------------

Simply [add a stylelint key to your package.json file](https://stylelint.io/user-guide/configure), like so:

```json
  "stylelint": {
    "extends": "@jsdevtools/stylelint-config"
  },
```

Extend with additonal configurations:

```json
  "stylelint": {
    "extends": [
      "stylelint-config-standard",
      "@jsdevtools/stylelint-config"
    ]
  },
```

Override specific rules:

```json
  "stylelint": {
    "extends": "@jsdevtools/stylelint-config",
    "rules": {
     "indentation": "tab",
      "number-leading-zero": null
   }
  }
```

Related Projects
----------------

[@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)

[@jsdevtools/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)

[@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config)

[@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdevtools/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/prettier-config)
