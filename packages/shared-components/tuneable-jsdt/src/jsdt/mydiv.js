import React, { useEffect, Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Dropdown } from '@jsdevtools/tuneable-fluentui';
import { actions, useDispatch } from '@jsdevtools/tuneable';

const MyDiv = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height};
  width: ${props => props.width};
  opacity: ${props => props.opacity};
  border-top: ${props => props.borderTop};
  border-left: ${props => props.borderLeft};
  border-bottom: ${props => props.borderBottom};
  border-right: ${props => props.borderRight};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.boxShadow};
  padding: ${props => props.padding};
  z-index: ${props => props.zIndex};
  top: ${props => props.top};
  left: ${props => props.left};
  margin: ${props => props.margin};
`;

MyDiv.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  borderTop: PropTypes.string,
  borderRight: PropTypes.string,
  borderBottom: PropTypes.string,
  borderLeft: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  padding: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  top: PropTypes.string,
  left: PropTypes.string,
  margin: PropTypes.string,
};

MyDiv.defaultProps = {
  height: '400px',
  width: '300px',
  boxShadow: '2px 2px 2px #494949',
  backgroundColor: 'silver',
  opacity: 1,
  borderRadius: '0px 4px',
  borderTop: '3px solid purple',
  borderRight: '1px solid grey',
  borderBottom: '1px solid grey',
  borderLeft: '1px solid grey',
  padding: '16px',
  zIndex: 'auto',
  position: 'static',
  top: '0px',
  left: '0px',
  margin: '0px',
};

const MyDivWithContent = props => {
  const dispatch = useDispatch();
  const { target, ...rest } = props;
  console.log(`target ${target}`);
  useEffect(() => {
    dispatch(
      actions.chg('chgChildren', {
        onClick: () => dispatch(actions.chg(target[0], { children: <h1>Hello my friend.</h1> })),
      }),
    );
  });
  return (
    <MyDiv {...rest}>
      <Dropdown
        placeholder={'Colors'}
        items={target}
        fluid
        defaultValue={target[0]}
        onSelectedChange={(a, b) => {
          dispatch(
            actions.chg('chgChildren', {
              onClick: () =>
                dispatch(actions.chg(b.value, { children: <h1>Hello friend.</h1>, hasError: false })),
            }),
          );
        }}
      />
      <Button instance="chgChildren">Replace Children</Button>
    </MyDiv>
  );
};

MyDivWithContent.propTypes = {
  ...MyDiv.propTypes,
  target: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MyDivWithContent.defaultProps = {
  ...MyDiv.defaultProps,
};

export default MyDivWithContent;
