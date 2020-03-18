import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Layout, themes, Table } from '@fluentui/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { transformIconColectionToIconMap } from '@jsdevtools/fluentui-font-awesome';
import { Icon } from '@jsdevtools/tuneable-fluentui';

import * as fab from '@fortawesome/free-brands-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';

const teamsIconNames = Object.keys(themes.teams.icons);
const teamsDarkIconNames = Object.keys(themes.teamsDark.icons);
const teamsHighContrastIconNames = Object.keys(themes.teamsHighContrast.icons);

library.add(...Object.values(fab.fab), ...Object.values(far.far), ...Object.values(fas.fas));

const faIcons = transformIconColectionToIconMap({ iconCollection: library });

themes.teams.icons = { ...themes.teams.icons, ...faIcons };
themes.teamsDark.icons = { ...themes.teamsDark.icons, ...faIcons };
themes.teamsHighContrast.icons = { ...themes.teamsHighContrast.icons, ...faIcons };

export default {
  title: 'Components/fui-fa-Icons',
  component: Icon,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const fluentTeamsIcons = () => (
  <Overlays content="Fluent-UI Teams Icons">
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

const faStoryFn = faTypeDefinitions => {
  const fn = () => {
    const header = {
      items: [
        'name',
        'smaller bordered',
        'small flip-v',
        'medium flip-h',
        'large flip-b',
        'larger pulse',
        'largest spin',
        'huger rotate-90',
        'enormous',
        'titanic',
      ],
    };
    const rows = Object.values(faTypeDefinitions).map((definition, i) =>
      i
        ? {
            key: `${i}`,
            items: [
              <React.Fragment key={`${i}0`}>
                {definition.prefix} {definition.iconName}
              </React.Fragment>,
              <Icon key={`${i}1`} bordered name={`${definition.prefix} ${definition.iconName}`} />,
              <Icon
                key={`${i}2`}
                flip="vertical"
                color="grey"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}3`}
                flip="horizontal"
                color="orange"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}4`}
                flip="both"
                color="pink"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}5`}
                pulse="true"
                color="red"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}6`}
                spin="true"
                color="green"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}7`}
                rotate={90}
                color="yellow"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon key={`${i}8`} color="blue" name={`${definition.prefix} ${definition.iconName}`} />,
              <Icon key={`${i}9`} color="purple" name={`${definition.prefix} ${definition.iconName}`} />,
            ],
          }
        : {
            styles: { height: 'auto' },
            key: `${i}`,
            items: [
              <React.Fragment key={`${i}0`}>
                {definition.prefix} {definition.iconName}
              </React.Fragment>,
              <Icon key={`${i}1`} size="smaller" name={`${definition.prefix} ${definition.iconName}`} />,
              <Icon
                key={`${i}2`}
                flip="vertical"
                color="grey"
                size="small"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}3`}
                flip="horizontal"
                color="orange"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}4`}
                flip="both"
                color="pink"
                size="large"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}5`}
                pulse="true"
                color="red"
                size="larger"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}6`}
                spin="true"
                color="green"
                size="largest"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}7`}
                rotate={90}
                color="yellow"
                size="huger"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}8`}
                color="blue"
                size="enormous"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
              <Icon
                key={`${i}9`}
                color="purple"
                size="titanic"
                name={`${definition.prefix} ${definition.iconName}`}
              />,
            ],
          },
    );
    const prefix = faTypeDefinitions[Object.keys(faTypeDefinitions)[0]].prefix;
    return (
      <Overlays
        content={`${prefix === 'fas' ? 'Solid' : prefix === 'far' ? 'Regular' : 'Brands'}`}
        subContent="Font Awesome Icons"
      >
        <Table header={header} rows={rows} />
      </Overlays>
    );
  };
  return fn;
};

export const fabStory = faStoryFn(fab.fab);
export const farStory = faStoryFn(far.far);
export const fasStory = faStoryFn(fas.fas);

fluentTeamsIcons.story = { name: 'Teams' };
fabStory.story = { name: 'FA Brands' };
farStory.story = { name: 'FA Regular' };
fasStory.story = { name: 'FA Solid' };
