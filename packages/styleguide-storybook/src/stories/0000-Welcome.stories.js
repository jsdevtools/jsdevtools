import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Styleguide/Welcome',
  component: Welcome,
  decorators: [withA11y],
};

export const ToStorybook = () => <Welcome showApp={linkTo('Components/Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        title: 'MDX',
      },
      canvas: {
        hidden: true,
      },
    },
  },
};
