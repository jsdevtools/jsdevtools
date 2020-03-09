import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Spacer from 'react-add-space';

import PropTypes from 'prop-types';

import { Provider, Button, Flex, Icon, Layout, themes, Table } from '@fluentui/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { transformIconColectionToIconMap } from '@jsdt/fluentui-font-awesome';

// Impport explicitly to reduce size
import { faAws as fabAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faAngry as farAngry } from '@fortawesome/free-regular-svg-icons/faAngry';
import { faCalendar as fasCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faStroopwafel as fasStroopwafel } from '@fortawesome/free-solid-svg-icons/faStroopwafel';

import * as fab from '@fortawesome/free-brands-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';

Icon.propTypes.size = PropTypes.oneOf([
  'smallest',
  'smaller',
  'small',
  'medium',
  'large',
  'larger',
  'largest',
  'huge',
  'huger',
  'hugest',
  'enormous',
  'giant',
  'ginormous',
  'titanic',
]);

//console.log(fab);
//console.log(far);
//console.log(fas);
//console.log(themes);
//themes.fontAwesome.icons.x.icon.fontFamily
const fontAwesomeIconNames = Object.keys(themes.fontAwesome.icons);
const teamsIconNames = Object.keys(themes.teams.icons);
const teamsDarkIconNames = Object.keys(themes.teamsDark.icons);
const teamsHighContrastIconNames = Object.keys(themes.teamsHighContrast.icons);

library.add(...Object.values(fab.fab), ...Object.values(far.far), ...Object.values(fas.fas));
//console.log(library);

const faIcons = transformIconColectionToIconMap({ iconCollection: library });
//console.log(faIcons);

themes.teams.icons = { ...themes.teams.icons, ...faIcons };
themes.teamsDark.icons = { ...themes.teamsDark.icons, ...faIcons };
themes.teamsHighContrast.icons = { ...themes.teamsHighContrast.icons, ...faIcons };

export default {
  title: 'Components/fui-fa-Icons',
  component: Icon,
  decorators: [withA11y],
};
//  parameters: {
//    viewport: { defaultViewport: 'kindleFireHD' },
//  },
//};

export const fluentTeamsIcons = () => (
  <Provider theme={themes.teams}>
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
  </Provider>
);

export const fluentTeamsDarkIcons = () => (
  <Provider theme={themes.teamsDark}>
    {teamsDarkIconNames.map(fuiIconName => (
      <React.Fragment key={`td-${fuiIconName}`}>
        <Layout
          key={`l-td-${fuiIconName}`}
          reducing
          gap="16px"
          start={<Icon key={`i-td-${fuiIconName}`} size="larger" name={`${fuiIconName}`} />}
          main={`${fuiIconName}`}
        />
      </React.Fragment>
    ))}
  </Provider>
);

export const fluentTeamsHighContrastIcons = () => (
  <Provider theme={themes.teamsHighContrast}>
    {teamsHighContrastIconNames.map(fuiIconName => (
      <React.Fragment key={`thc-${fuiIconName}`}>
        <Layout
          key={`l-thc-${fuiIconName}`}
          reducing
          gap="16px"
          start={<Icon key={`i-thc-${fuiIconName}`} size="larger" name={`${fuiIconName}`} />}
          main={`${fuiIconName}`}
        />
      </React.Fragment>
    ))}
  </Provider>
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
    return (
      <Provider theme={themes.teams}>
        <Table header={header} rows={rows} />
      </Provider>
    );
  };
  return fn;
};

export const fabStory = faStoryFn(fab.fab);
export const farStory = faStoryFn(far.far);
export const fasStory = faStoryFn(fas.fas);

fluentTeamsIcons.story = { name: 'Teams' };
fluentTeamsDarkIcons.story = { name: 'Teams Dark' };
fluentTeamsHighContrastIcons.story = { name: 'Teams High Contrast' };
fabStory.story = { name: 'FA Brands' };
farStory.story = { name: 'FA Regular' };
fasStory.story = { name: 'FA Solid' };
