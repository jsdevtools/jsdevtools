import React from 'react';
import Tuneable from '@jsdt/tuneable-stardust-ui-plugin';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

export default {
  title: 'Components/Tuneable/Accordian',
  component: Tuneable.Accordian,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

const petItems = [
  {
    key: 'irving',
    media: (
      <Tuneable.Image
        src="https://microsoft.github.io/fluent-ui-react/public/images/avatar/small/matt.jpg"
        avatar
      />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Tuneable.Image
        src="https://microsoft.github.io/fluent-ui-react/public/images/avatar/small/steve.jpg"
        avatar
      />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Tuneable.Image src="https://stardust-ui.github.io/react/public/images/avatar/small/nom.jpg" avatar />
    ),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
];

const peopleItems = [
  {
    key: 'irving',
    media: (
      <Tuneable.Image
        src="https://microsoft.github.io/fluent-ui-react/public/images/avatar/small/matt.jpg"
        avatar
      />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Tuneable.Image
        src="https://microsoft.github.io/fluent-ui-react/public/images/avatar/small/steve.jpg"
        avatar
      />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Tuneable.Image
        src="https://microsoft.github.io/fluent-ui-react/public/images/avatar/small/nom.jpg"
        avatar
      />
    ),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
];

const panels = [
  {
    title: 'People',
    content: {
      key: 'people',
      content: <Tuneable.List selectable defaultSelectedIndex={0} items={peopleItems} />,
    },
  },
  {
    title: 'Pets',
    content: {
      key: 'pets',
      content: <Tuneable.List selectable defaultSelectedIndex={0} items={petItems} />,
    },
  },
];

export const AccordianExample = () => (
  <>
    <ThemeSelector />
    <Tuneable.Accordion defaultActiveIndex={[0]} panels={panels} exclusive />
  </>
);

AccordianExample.story = { name: 'Accordian' };
