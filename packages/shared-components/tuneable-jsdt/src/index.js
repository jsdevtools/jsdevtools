import React from 'react';
import PropTypes from 'prop-types';
import * as JSDT from './jsdt';
import { withGlobalState } from '@jsdt/tuneable';

const Tuneable = {
  MyDiv: withGlobalState(JSDT.MyDiv),
};

export default Tuneable;
