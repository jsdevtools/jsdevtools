import React from 'react';
import Float from '@jsdevtools/float';
import { withA11y } from '@storybook/addon-a11y';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { fullViewport } from '../.storybook/addons/fullViewport';

export default {
  title: 'Components/Float',
  component: Float,
  decorators: [fullViewport, withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const topLeft = () => (
  <Overlays content="Float" subContent="topLeft" target={['topLeftFloat']}>
    <Float instance="topLeftFloat" placement="topLeft" zIndex={20} margin="100px"></Float>
  </Overlays>
);

export const topRight = () => (
  <Overlays content="Float" subContent="topRight" target={['topRightFloat']}>
    <Float instance="topRightFloat" placement="topRight" zIndex={20} margin="10px" />
  </Overlays>
);
export const top = () => (
  <Overlays content="Float" subContent="top" target={['topFloat']}>
    <Float instance="topFloat" placement="top" zIndex={20} margin="10px" />
  </Overlays>
);

topLeft.story = { name: 'Top Left' };
topRight.story = { name: 'Top Right' };
top.story = { name: 'Top' };
