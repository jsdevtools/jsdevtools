import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@fluentui/react';
import { withGlobalState } from '@jsdevtools/tuneable';

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

export default Icon;
