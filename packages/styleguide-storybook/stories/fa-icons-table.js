import React from 'react';
import { Icon, Table } from '@jsdevtools/tuneable-fluentui';
import { Overlays } from './shared';

export const faStoryFn = faTypeDefinitions => {
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
                {i} {definition.prefix} {definition.iconName}
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
        target="fa-icons-table-target"
      >
        <Table header={header} rows={rows} />
      </Overlays>
    );
  };
  return fn;
};
