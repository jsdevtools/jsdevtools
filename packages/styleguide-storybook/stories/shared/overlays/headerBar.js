import React from 'react';
import PropTypes from 'prop-types';

export const HeaderBar = props => {
  const topPadding = 10;
  const bottomBorder = 1;
  const bottomPadding = 10 - bottomBorder;
  return (
    <div
      {...(props.resizedRef ? { ref: props.resizedRef } : {})}
      style={{
        background: 'rgba(180, 180, 180, .5)',
        backdropFilter: 'blur(8px)',
        padding: `${topPadding}px 10px ${bottomPadding}px 10px`,
        width: '100%',
        borderBottom: `${bottomBorder}px solid rgba(0, 0, 0, .1)`,
        ...(props.opacity !== undefined ? { opacity: props.opacity } : {}),
        ...(props.zIndex ? { zIndex: props.zIndex } : {}),
        ...(props.position ? { position: props.position } : {}),
        ...(props.height ? { height: `${props.height + topPadding + bottomBorder + bottomPadding}px` } : {}),
      }}
    >
      {props.children}
    </div>
  );
};

HeaderBar.propTypes = {
  resizedRef: PropTypes.any,
  opacity: PropTypes.number,
  zIndex: PropTypes.number,
  children: PropTypes.element,
  position: PropTypes.string,
  height: PropTypes.number,
};
