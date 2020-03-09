import React, { useContext } from 'react';
import Tuneable from '@jsdt/tuneable-fluentui';
import JSDT from '../../shared-components/tuneable-jsdt/src/index.js';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';
import Float from '@jsdt/float';

export default {
  title: 'Components/JSDT/MyDiv',
  component: JSDT.MyDiv,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const Default = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Default" />
    <br />
    <br />
    <Float>
      <JSDT.MyDiv height={400} width={300} boxShadow="-8px 16px 8px   #292929">
        Hello World!
      </JSDT.MyDiv>
    </Float>
  </>
);

Default.story = { name: 'Default' };
