import React from 'react';
import PropTypes from 'prop-types';
import { OptionMenu } from './optionMenu';
import { HeaderBar } from './headerBar';
import { HeaderSpacer } from './headerSpacer';

export const DisplayArea = props => (
  <>
    <HeaderBar height={props.headerHeight} opacity={0}>
      {props.headerHeight ? null : <HeaderSpacer content={props.content} subContent={props.subContent} />}
    </HeaderBar>
    <main style={{ flex: '1', display: 'flex', padding: '10px 10px 10px 10px' }}>
      <div style={{ flex: '1' }}>{props.children}</div>
      <div style={{ flex: '0 0 auto', width: '10px' }} />
      <div style={{ flex: '0 0 auto', width: '300px' }}>
        <OptionMenu target={props.target} />
      </div>
    </main>
  </>
);

DisplayArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  target: PropTypes.arrayOf(PropTypes.string).isRequired,
  headerHeight: PropTypes.number.isRequired,
  content: PropTypes.string,
  subContent: PropTypes.string,
};

DisplayArea.defaultProps = {
  headerHeight: 0,
};
