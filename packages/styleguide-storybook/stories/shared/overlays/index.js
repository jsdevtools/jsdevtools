import React, { useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { actions, useDispatch } from '@jsdevtools/tuneable';
import { Header } from './header';
import { DisplayArea } from './displayArea';
import { withGlobalState } from '@jsdevtools/tuneable';

export const withResizeObserver = WrappedComponent => {
  const wrapComponent = props => {
    const { target, ...rest } = props;
    const resizedRef = useRef();
    const dispatch = useDispatch();
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        console.log(`wRO tgt: ${target}`);
        //dispatch size
        console.log(`${JSON.stringify(entry.contentRect)}`);
        console.log(`e.c.w: ${entry.contentRect.width}`);
        console.log(`e.c.h: ${entry.contentRect.height}`);
        dispatch(actions.chg(target, { headerHeight: entry.contentRect.height }));
      }
    });
    useLayoutEffect(() => {
      resizeObserver.observe(resizedRef.current);
      return () => {
        resizeObserver.unobserve(resizedRef.current);
      };
    }, []);
    return <WrappedComponent {...{ resizedRef }} {...rest} />;
  };
  wrapComponent.propTypes = { target: PropTypes.string };
  return wrapComponent;
};

const BetterHeader = withResizeObserver(Header);

const BetterDisplayArea = withGlobalState(DisplayArea);

export const Overlays = props => (
  <>
    <BetterHeader content={props.content} subContent={props.subContent} target="betterDisplayArea" />
    <BetterDisplayArea
      instance="betterDisplayArea"
      content={props.content}
      subContent={props.subContent}
      target={props.target}
    >
      {props.children}
    </BetterDisplayArea>
  </>
);

Overlays.propTypes = {
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string,
  target: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};

Overlays.defaultProps = {
  subContent: '',
};
