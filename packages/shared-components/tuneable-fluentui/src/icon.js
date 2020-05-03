import React from 'react';
import PropTypes from 'prop-types';
import * as rin from '@fluentui/react-icons-northstar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@fluentui/react-northstar';

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

const {
  createSvgIcon,
  svgIconClassName,
  svgIconDisplayName,
  svgIconHandledProps,
  iconClassNames,
  ...icons
} = rin;

const Icon = props => {
  const { name, ...restOfProps } = props;
  console.log(`name ${name}`);
  if (icons[name]) {
    const Foo = icons[name];
    return <Foo {...restOfProps} />;
  }
  const {
    color,
    size,
    bordered,
    spin,
    pulse,
    rotate,
    accessibility,
    style,
    styles,
    xSpacing,
    ...rest
  } = restOfProps;
  const optionals = {};
  if (spin && spin === 'true') optionals.spin = true;
  if (pulse && pulse === 'true') optionals.pulse = true;
  if (rotate) optionals.rotation = rotate;
  if (style) optionals.style = style;
  return bordered && bordered === 'true' ? (
    <Box
      styles={{
        border: `1px solid #ccc`,
      }}
    >
      <FontAwesomeIcon icon={name} size={convertSize(size)} color={color} {...optionals} {...rest} />
    </Box>
  ) : (
    <FontAwesomeIcon icon={name} size={convertSize(size)} color={color} {...optionals} {...rest} />
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf([
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
  ]),
  style: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  name: PropTypes.string.isRequired,
};

export default Icon;
