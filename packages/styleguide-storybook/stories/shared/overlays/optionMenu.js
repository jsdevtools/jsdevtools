import React from 'react';
import PropTypes from 'prop-types';
import { MyDiv } from '@jsdevtools/tuneable-jsdt';

export const OptionMenu = props => {
  return (
    <aside style={{ position: 'fixed', padding: '0px 1px 0px 0px' }}>
      <MyDiv target={props.target} />
    </aside>
  );
};

OptionMenu.propTypes = {
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
