import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@storybook/react/demo';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withA11y],
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={linkTo('Components/Button', 'Text')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
