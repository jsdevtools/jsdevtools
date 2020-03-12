import React from 'react';
import { Accordion, Image, List, Text } from '@jsdt/tuneable-fluentui';
import { GlobalStateDecorator, ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

import { Layout, Label, themes } from '@fluentui/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { transformIconColectionToIconMap } from '@jsdt/fluentui-font-awesome';

// Import explicitly to reduce size
//import * as fas from '@fortawesome/free-solid-svg-icons';
//console.log(fas);
import { faUserFriends } from '@fortawesome/free-solid-svg-icons/faUserFriends';
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw';

library.add(faUserFriends, faPaw);

const faIcons = transformIconColectionToIconMap({ iconCollection: library });

themes.teams.icons = { ...themes.teams.icons, ...faIcons };
themes.teamsHighContrast.icons = { ...themes.teamsHighContrast.icons, ...faIcons };

export default {
  title: 'Components/Tuneable/Accordion',
  component: Accordion,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

const petItems = [
  {
    key: 'irving',
    media: (
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/matt.jpg" avatar />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/steve.jpg" avatar />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/nom.jpg" avatar />
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
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/matt.jpg" avatar />
    ),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: (
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/steve.jpg" avatar />
    ),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application to input the multi-byte application!',
  },
  {
    key: 'dante',
    media: (
      <Image src="https://fluentsite.z22.web.core.windows.net/public/images/avatar/small/nom.jpg" avatar />
    ),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
];

const panels = [
  {
    title: (
      <Layout
        key="peopleTitle"
        start={<Label icon="fas user-friends" iconPosition="start" circular content="People" />}
      />
    ),
    content: {
      key: 'people',
      content: <List selectable defaultSelectedIndex={0} items={peopleItems} />,
    },
  },
  {
    title: (
      <Layout key="petsTitle" start={<Label icon="fas paw" iconPosition="start" circular content="Pets" />} />
    ),
    content: {
      key: 'pets',
      content: <List selectable defaultSelectedIndex={0} items={petItems} />,
    },
  },
];

export const DefaultAccordion = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Default" />
    <br />
    <Text size="small" content="A default Accordion." />
    <Accordion defaultActiveIndex={[0]} panels={panels} />
  </>
);

export const ExclusiveAccordion = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Exclusive" />
    <br />
    <Text size="small" content="An exclusive Accordion." />
    <Accordion panels={panels} exclusive />
  </>
);

export const ExclusiveAndExpandedAccordion = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Exclusive and Expanded" />
    <br />
    <Text size="small" content="An exclusive expanded Accordion." />
    <Accordion panels={panels} exclusive expanded />
  </>
);

DefaultAccordion.story = { name: 'Default' };
ExclusiveAccordion.story = { name: 'Exclusive' };
ExclusiveAndExpandedAccordion.story = { name: 'Exclusive and Expanded' };
