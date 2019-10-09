# monorepo-template
Monorepo skeleton.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Helpful Commands
`yarn run clean` - run clean command in all packages

`yarn run refresh` - build all packages from scratch

`yarn run semver` - check versions of all packages and synchronize versions without introducing breaking changes

### Notes
Any new subfolders added to `projects/` probably need to be added to `package.json` and `lerna.json`.

Most of our projects will be linted using `eslint`. However, we may need to add or remove some directories from being linted so we needed a `.eslintignore` file. In particular, we wanted to lint the `.js` files in the `.storybook` folder of `packages/styleguide-storybook/`.
