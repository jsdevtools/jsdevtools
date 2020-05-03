import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Layout, themes } from '@fluentui/react-northstar';
import { Icon } from '@jsdevtools/tuneable-fluentui';

import * as rin from '@fluentui/react-icons-northstar';
//const { ...rest } = require('@fluentui/react-icons-northstar');

const {
  createSvgIcon,
  svgIconClassName,
  svgIconDisplayName,
  svgIconHandledProps,
  iconClassNames,
  ...rest
} = rin;
//const restKeys = Object.keys(rest);

//const iconKeys = restKeys.filter(restKey => !rinKeys.includes(restKey));

//console.log(`rinKeys ${JSON.stringify(rinKeys)}`);
console.log(`restKeys ${JSON.stringify(Object.keys(rest))}`);
//console.log(`iconKeys ${JSON.stringify(iconKeys)}`);

import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';

console.log(`themes ${JSON.stringify(Object.keys(themes.teams))}`);
themes.teams.icons = rest;
const teamsIconNames = Object.keys(themes.teams.icons);

export default {
  title: 'Components/Teams Icons',
  component: Icon,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const fluentTeamsIcons = () => (
  <Overlays content="Fluent-UI Teams Icons" target={['fluentui-teams-icons-target']}>
    {teamsIconNames.map(fuiIconName => (
      <React.Fragment key={`t-${fuiIconName}`}>
        <Layout
          key={`l-t-${fuiIconName}`}
          reducing
          gap="16px"
          start={<Icon key={`i-t-${fuiIconName}`} size="larger" name={`${fuiIconName}`} />}
          main={`${fuiIconName}`}
        />
      </React.Fragment>
    ))}
  </Overlays>
);

fluentTeamsIcons.story = { name: 'Teams' };
