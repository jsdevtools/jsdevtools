import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Provider, Button, Flex, Icon, themes } from '@stardust-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { transformIconColectionToIconMap } from '@jsdt/stardust-ui-font-awesome-plugin';

// Impport explicitly to reduce size
import { faAws as fabAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faAngry as farAngry } from '@fortawesome/free-regular-svg-icons/faAngry';
import { faCalendar as fasCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faStroopwafel as fasStroopwafel } from '@fortawesome/free-solid-svg-icons/faStroopwafel';

library.add(fabAws, farAngry, fasCalendar, fasStroopwafel);

const faIcons = transformIconColectionToIconMap({ iconCollection: library });

themes.teams.icons = { ...themes.teams.icons, ...faIcons };
themes.teamsHighContrast.icons = { ...themes.teamsHighContrast.icons, ...faIcons };

export default {
  title: 'Components/sui-fa-Icons',
  component: Icon,
  decorators: [withA11y],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const suiFaPluginButton = () => (
  <Provider theme={themes.teams}>
    <div>
      <Button
        onClick={action('clicked')}
        content="Theming"
        icon="fas calendar"
        iconPosition="before"
        primary
      />
    </div>
    <Flex gap="gap.smaller">
      <Icon name="call-video" />
      <Icon name="fas stroopwafel" />
      <Icon name="far angry" />
      <Icon name="fab aws" />
    </Flex>
  </Provider>
);

suiFaPluginButton.story = { name: 'SUI fa Button' };
