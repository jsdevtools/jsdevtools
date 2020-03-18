import React from 'react';
import Float from '@jsdevtools/float';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Float',
  component: Float,
  decorators: [withA11y],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const topLeft = () => <Float placement="topLeft" zIndex={20} margin="10px" />;
export const topRight = () => <Float placement="topRight" zIndex={20} margin="10px" />;
export const top = () => <Float placement="top" zIndex={20} margin="10px" />;

topLeft.story = { name: 'Top Left' };
topRight.story = { name: 'Top Right' };
top.story = { name: 'Top' };
