import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withPlaceHolder, {
  PlaceHolderBorder,
  PlaceHolderMsg,
  childrenNotFound,
} from '@jsdevtools/place-holder';
import { withGlobalState } from '@jsdevtools/tuneable';

const StyledFloatAbsolute = styled.div`
  z-index: ${props => props.zIndex};
  position: ${props => props.position};
  pointer-events: none;
`;

const TopFloat = styled(StyledFloatAbsolute)`
  width: 100%;
  text-align: center;
  top: ${props => props.top};
`;

const TopLeftFloat = styled(StyledFloatAbsolute)`
  top: ${props => props.top};
  left: ${props => props.left};
`;

const TopRightFloat = styled(StyledFloatAbsolute)`
  top: ${props => props.top};
  right: ${props => props.right};
`;

const Centered = styled.div`
  display: inline-block;
  pointer-events: none;
`;

class Float extends Component {
  render() {
    const { placement, margin, children, ...rest } = this.props;
    switch (placement) {
      case 'topRight':
        return (
          <TopRightFloat {...{ top: margin, right: margin, ...rest }}>
            <div style={{ pointerEvents: 'auto' }}>{children}</div>
          </TopRightFloat>
        );
      case 'topLeft':
        return (
          <TopLeftFloat {...{ top: margin, left: margin, ...rest }}>
            <div style={{ pointerEvents: 'auto' }}>{children}</div>
          </TopLeftFloat>
        );
      default:
        return (
          <TopFloat {...{ top: margin, ...rest }}>
            <Centered>
              <div style={{ pointerEvents: 'auto' }}>{children}</div>
            </Centered>
          </TopFloat>
        );
    }
  }
}

Float.propTypes = {
  placement: PropTypes.oneOf(['topRight', 'topLeft', 'top']).isRequired,
  zIndex: PropTypes.number.isRequired,
  margin: PropTypes.string.isRequired,
  children: PropTypes.element,
  position: PropTypes.oneOf(['absolute', 'relative']).isRequired,
  placeHolder: PropTypes.element,
};

Float.defaultProps = {
  placement: 'top',
  zIndex: 10,
  margin: '10px',
  hasError: false,
  position: 'absolute',
  placeHolder: (
    <PlaceHolderBorder>
      <PlaceHolderMsg>
        Warning: {childrenNotFound}
        <br />
        <br />
        Component is expected to contain children, displaying place holder instead.
      </PlaceHolderMsg>
    </PlaceHolderBorder>
  ),
};

export default withGlobalState(withPlaceHolder(Float));
