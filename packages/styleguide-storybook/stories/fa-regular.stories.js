import { withA11y } from '@storybook/addon-a11y';

import { Icon } from '@jsdevtools/tuneable-fluentui';

import { GlobalStateDecorator, ThemeProvider } from './shared';
import { faStoryFn } from './fa-icons-table';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as far from '@fortawesome/free-regular-svg-icons';
library.add(...Object.values(far.far));

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

export const farStory = faStoryFn(far.far);

farStory.story = { name: 'FA Regular' };
