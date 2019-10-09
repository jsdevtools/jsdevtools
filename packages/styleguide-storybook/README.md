# Storybook Component Testing
Test react components in isolation using storybook.

Storybook will search the directories specified in `./.storybook/config.js`. Any filenames ending in `.story.js` or `.story.jsx` will have their stories included in the storybook.

In order for a component to be included in the storybook it must be added to the list of dependencies in `package.json`.