import React from 'react';
import PropTypes from 'prop-types';
import * as JSDT from './jsdt';
import { withGlobalState } from '@jsdevtools/tuneable';

export const MyDiv = withGlobalState(JSDT.MyDiv);
