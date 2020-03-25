import PropTypes from 'prop-types';
import { Icon } from '@fluentui/react';

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

Icon.propTypes.style = PropTypes.oneOfType([PropTypes.bool, PropTypes.func]);

export default Icon;
