import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@fluentui/react';
import { withGlobalState } from '@jsdevtools/tuneable';

const ModifiedAlert = props => {
  const { open, ...rest } = { open: true, ...props };
  return open === false ? null : <Alert {...rest} />;
};

ModifiedAlert.propTypes = {
  open: PropTypes.bool,
};

export default ModifiedAlert;
