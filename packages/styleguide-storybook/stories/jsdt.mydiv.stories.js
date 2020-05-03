import React from 'react';
import { MyDiv } from '@jsdevtools/tuneable-jsdt';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { withA11y } from '@storybook/addon-a11y';
import { fullViewport } from '../.storybook/addons/fullViewport';

export default {
  title: 'Components/JSDT/MyDiv',
  component: MyDiv,
  decorators: [fullViewport, withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const Default = () => (
  <Overlays content="Default" subContent="MyDiv" target={['mydiv-target']}>
    <MyDiv instance="mydiv" target={['Hello World!']} />
  </Overlays>
);

Default.story = { name: 'Default' };
