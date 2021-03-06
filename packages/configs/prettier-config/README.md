@jsdevtools/prettier-config
=====================
[@jsdevtools/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/prettier-config) is a shareable config for [Prettier](https://prettier.io/).

Motivation
------------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same eslint configurations across projects.

2. Enforce a consistent style amongst contributors to a project.

Installation
------------

[Prettier](https://prettier.io/) and the [@jsdevtools/prettier-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config) will be used in the development of other projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install prettier @jsdevtools/prettier-config --save-dev
```

or

```bash
yarn add -D prettier @jsdevtools/prettier-config
```

Configuration
-------------

Simply [add a prettier key to your package.json file](https://prettier.io/docs/en/configuration.html), like so:

```json
    "prettier": "@jsdevtools/prettier-config"
  },
```

Related Projects
----------------

[@jsdevtools/babel-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config)

[@jsdevtools/babel-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/babel-config-ts)

[@jsdevtools/eslint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config)

[@jsdevtools/eslint-config-ts](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/eslint-config-ts)

[@jsdevtools/stylelint-config](https://github.com/jsdevtools/jsdevtools/tree/master/packages/configs/stylelint-config)
