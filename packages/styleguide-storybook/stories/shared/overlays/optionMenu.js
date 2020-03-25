import React from 'react';
import PropTypes from 'prop-types';
import { MyDiv } from '@jsdevtools/tuneable-jsdt';

export const OptionMenu = props => (
  <aside style={{ position: 'fixed', padding: '0px 1px 0px 0px' }}>
    <MyDiv
      height={400}
      width={300}
      boxShadow="-8px 16px 8px #292929"
      target={props.target}
      margin="0px 0px 20px 14px"
    />
  </aside>
);

OptionMenu.propTypes = {
  target: PropTypes.string.isRequired,
};
