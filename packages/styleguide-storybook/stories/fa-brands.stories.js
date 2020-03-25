import { withA11y } from '@storybook/addon-a11y';

import { Icon } from '@jsdevtools/tuneable-fluentui';

import { GlobalStateDecorator, ThemeProvider } from './shared';
import { faStoryFn } from './fa-icons-table';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as fab from '@fortawesome/free-brands-svg-icons';
library.add(...Object.values(fab.fab));

// import { transformIconColectionToIconMap } from '@jsdevtools/fluentui-font-awesome';
// const faIcons = transformIconColectionToIconMap({ iconCollection: library });

export default {
  title: 'Components/fui-fa-Icons',
  component: Icon,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const fabStory = faStoryFn(fab.fab);

fabStory.story = { name: 'FA Brands' };
