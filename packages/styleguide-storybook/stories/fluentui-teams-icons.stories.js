import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Layout, themes } from '@fluentui/react';
import { Icon } from '@jsdevtools/tuneable-fluentui';

import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';

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
  <Overlays content="Fluent-UI Teams Icons" target="fluentui-teams-icons-target">
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
