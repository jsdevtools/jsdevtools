import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MyDiv = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  opacity: ${props => props.opacity};
  border: ${props => props.border};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius}px;
  border-width: ${props => props.borderWidth}px;
  box-shadow: ${props => props.boxShadow};
  padding: ${props => props.padding}px;
  z-index: ${props => props.zIndex};
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

MyDiv.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.color,
  opacity: PropTypes.number,
  border: PropTypes.oneOf([
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ]),
  borderColor: PropTypes.color,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  boxShadow: PropTypes.string,
  padding: PropTypes.number,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  top: PropTypes.number,
  left: PropTypes.number,
};

MyDiv.defaultProps = {
  height: 100,
  width: 150,
  backgroundColor: 'silver',
  opacity: 1,
  border: 'solid',
  borderColor: 'grey',
  borderRadius: 32,
  borderWidth: 1,
  boxShadow: 'none',
  padding: 16,
  zIndex: 'auto',
  position: 'static',
  top: 0,
  left: 0,
};

export default MyDiv;
