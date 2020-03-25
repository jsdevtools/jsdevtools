import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from './headerContent';
import { HeaderBar } from './headerBar';

export const Header = props => (
  <HeaderBar zIndex={50} position="fixed" resizedRef={props.resizedRef}>
    <HeaderContent content={`${props.content}`} subContent={`${props.subContent}`} />
  </HeaderBar>
);

Header.propTypes = {
  content: PropTypes.string,
  subContent: PropTypes.string,
  resizedRef: PropTypes.any,
};
