import React from 'react';
import { Accordion, Image, List, Text } from '@jsdevtools/tuneable-fluentui';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdevtools/tuneable';

import { Layout, Label, themes } from '@fluentui/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { transformIconColectionToIconMap } from '@jsdevtools/fluentui-font-awesome';

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
    viewport: { defaultViewport: 'default' },
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
  <Overlays content="Default" subContent="A default Accordion." target="defaultAccordion">
    <Accordion instance="defaultAccordion" defaultActiveIndex={[0]} panels={panels} />
  </Overlays>
);

export const ExclusiveAccordion = () => (
  <Overlays content="Exclusive" subContent="An exclusive Accordion." target="exclusiveAccordion">
    <Accordion instance="exclusiveAccordion" panels={panels} exclusive />
  </Overlays>
);

export const ExclusiveAndExpandedAccordion = () => (
  <Overlays
    content="Exclusive and Expanded"
    subContent="An exclusive expanded Accordion."
    target="exclusiveAndExpandedAccordion"
  >
    <Accordion instance="exclusiveAndExpandedAccordion" panels={panels} exclusive expanded />
  </Overlays>
);

DefaultAccordion.story = { name: 'Default' };
ExclusiveAccordion.story = { name: 'Exclusive' };
ExclusiveAndExpandedAccordion.story = { name: 'Exclusive and Expanded' };
