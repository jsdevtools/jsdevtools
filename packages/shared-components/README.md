# Shared Components
React components that we want to be able to share between projects.

Two examples are provided, one in `javascript` the other in `typescript`. 

These examples are demonstrated in isolation in `styleguide-storybook`.

See how configurations for eslint, stylelint, prettier, and babel are shared across packges by defining in `packages/configs/` and then referencing / overriding them in the `package.json`.

The `typescript` version `input-ts` first gets compile from `typescript` to `javascript` with the output written to the `lib/` folder. Compilation is performed using `tsc` and it's configuration is located in `tsconfig.json`.

For both packages the `javascript` gets compiled down using `babel` for greater backward compatibilty with javacript engines.

Finally, the javascript and other assets are packaged up using `webpack` and written to the `dist/` folder. The configuration for webpack is located in `webpack.config.json`.

The components can be shared by importing `@jsdt/input` or `@jsdt/input-ts`.

During development you can add your shared components as dependencies to your project(s). However, if you are going to publish a package that utilizes your shared components you will need to publish the components as well. TODO: describe how to publish a component.

