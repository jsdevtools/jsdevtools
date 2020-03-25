import React, { useContext } from 'react';
import { Text, Flex } from '@jsdevtools/tuneable-fluentui';
import { MyDiv } from '@jsdevtools/tuneable-jsdt';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdevtools/tuneable';
import Float from '@jsdevtools/float';
import { Flex as FFlex } from '@fluentui/react';
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
  <Overlays content="Default" subContent="MyDiv" target="mydiv-target">
    <MyDiv
      instance="mydiv"
      height={400}
      width={300}
      boxShadow="-8px 16px 8px   #292929"
      target="Hello World!"
      margin="0px 0px 20px 14px"
    />
  </Overlays>
);

Default.story = { name: 'Default' };
