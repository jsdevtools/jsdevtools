import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const convertSize = size => {
  switch (size) {
    case 'smallest':
      return 'xs';
    case 'smaller':
      return 'xs';
    case 'small':
      return 'sm';
    case 'medium':
      return '1x';
    case 'large':
      return 'lg';
    case 'larger':
      return '2x';
    case 'largest':
      return '3x';
    case 'huge':
      return '4x';
    case 'huger':
      return '5x';
    case 'hugest':
      return '6x';
    case 'enormous':
      return '7x';
    case 'giant':
      return '8x';
    case 'ginormous':
      return '9x';
    case 'titanic':
      return '10x';
  }
  return '1x';
};

const transformObjectToFontAwesomeIcon = ({ prefix, iconName, icon }) => {
  const createIcon = args => {
    const { size, bordered, spin, pulse, rotate, accessibility, ...rest } = args.props;
    const optionals = {};
    if (bordered && bordered === 'true') optionals.bordered = true;
    if (spin && spin === 'true') optionals.spin = true;
    if (pulse && pulse === 'true') optionals.pulse = true;
    if (rotate) optionals.rotation = rotate;
    return (
      <FontAwesomeIcon icon={{ prefix, iconName, icon }} size={convertSize(size)} {...optionals} {...rest} />
    );
  };
  return {
    [`${prefix} ${iconName}`]: {
      isSvg: true,
      icon: createIcon,
    },
  };
};

const transformFontAwesomeLibraryToObjectList = ({ iconCollection }) => {
  return Object.keys(iconCollection.definitions).reduce((acc, prefix) => {
    return [
      ...acc,
      ...Object.keys(iconCollection.definitions[prefix]).reduce((acc2, iconName) => {
        return [...acc2, { prefix, iconName, icon: iconCollection.definitions[prefix][iconName] }];
      }, []),
    ];
  }, []);
};

const transformIconColectionToIconMap = ({
  iconCollection,
  transformIconCollectionToObjectList = transformFontAwesomeLibraryToObjectList,
  transformObjectToIcon = transformObjectToFontAwesomeIcon,
}) =>
  transformIconCollectionToObjectList({ iconCollection }).reduce(
    (acc, iconObject) => ({
      ...acc,
      ...transformObjectToIcon(iconObject),
    }),
    {},
  );

export { transformIconColectionToIconMap };
