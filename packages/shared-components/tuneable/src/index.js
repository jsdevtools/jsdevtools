import React, { createContext, useLayoutEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { action as actionAddon } from '@storybook/addon-actions';
import { Provider, createStoreHook, createDispatchHook, createSelectorHook, shallowEqual } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createSelector } from 'reselect';

const INIT = 'INIT';
const CLR = 'CLR';
const CHG = 'CHG';
const OVERLAY = 'OVERLAY';

export const types = {
  INIT,
  CLR,
  CHG,
  OVERLAY,
};

const init = (instance, initProps) => ({
  type: types.INIT,
  payload: {
    instance,
    initProps,
  },
});

const clr = instance => ({
  type: types.CLR,
  payload: { instance },
});

const chg = (instance, newProps) => ({
  type: types.CHG,
  payload: { instance, newProps },
});

const overlay = (instance, newProps) => ({
  type: types.OVERLAY,
  payload: { instance, newProps },
});

export const actions = {
  init,
  clr,
  chg,
  overlay,
};

const reducer1 = (state, action) => {
  if (!state) return {};
  switch (action.type) {
    case types.INIT: {
      // console.log(`Reached ${action.type}`, action);
      const { instance, initProps } = action.payload;
      const retVal = state;
      Object.keys(initProps)
        .filter(propName => state[`${instance}/${propName}`] === undefined)
        .forEach(undefPropName => {
          retVal[`${instance}/${undefPropName}`] = initProps[undefPropName];
        });
      //console.log(`${action.type} retVal`, retVal);
      return retVal;
    }
    case types.CLR: {
      const { instance } = action.payload;
      const retVal = state;
      Object.keys(state)
        .filter(key => key.includes(`${instance}`))
        .forEach(match => {
          delete retVal[match];
        });
      //console.log(`${action.type} retVal`, retVal);
      return retVal;
    }
    case types.CHG: {
      //console.log(`Reached ${action.type}`, action);
      return {
        ...state,
        ...Object.keys(action.payload.newProps).reduce(
          (acc, propName) => ({
            ...acc,
            [`${action.payload.instance}/${propName}`]: action.payload.newProps[propName],
          }),
          {},
        ),
      };
    }
    case types.OVERLAY: {
      console.log(`Reached ${action.type}, warning! not implemented.`, action);
      return state;
    }
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  if (!state) return {};
  switch (action.type) {
    case types.INIT:
      return state;
    case types.CLR:
      return state;
    default:
      switch (action.type.slice(0, 2)) {
        case '@@':
          return state;
        default:
          actionAddon(action.type)(action.payload.instance, action.payload);
          return state;
      }
  }
};

const rootReducer = combineReducers({
  reducer1,
  reducer2,
});

export const store = (() => {
  if (window.store === undefined) {
    window.store = createStore(rootReducer);
  }
  return window.store;
})();

export const TuneableContext = (() => {
  if (window.TuneableContext === undefined) {
    window.TuneableContext = createContext();
  }
  return window.TuneableContext;
})();

export const useStore = createStoreHook(TuneableContext);
export const useDispatch = createDispatchHook(TuneableContext);
export const useSelector = createSelectorHook(TuneableContext);

export const GlobalStateProvider = props => (
  <Provider store={store} context={TuneableContext}>
    {props.children}
  </Provider>
);

GlobalStateProvider.propTypes = {
  children: PropTypes.element,
};

const makeMapStateToPropsSelector = () =>
  createSelector(
    (state, instance) => {
      // console.log(`mSTP: ${JSON.stringify(instance)} ${JSON.stringify(Object.keys(state))}`);
      if (instance === 'ignore') return {};
      const wholeState = Object.entries(state).reduce((acc, [, val]) => ({ ...acc, ...val }), {});
      return Object.keys(wholeState)
        .filter(key => key.includes(`${instance}`))
        .reduce(
          (acc, cur) => ({
            ...acc,
            [cur.split('/').slice(-1)[0]]: wholeState[cur],
          }),
          {},
        );
    },
    newProps => newProps,
  );

export const withGlobalState = WrappedComponent => {
  const wrapComponent = props => {
    const { instance, ...rest } = props;
    const dispatch = useDispatch();
    useLayoutEffect(() => {
      if (instance) {
        dispatch(actions.init(instance, rest));
      }
      return () => {
        dispatch(actions.clr(props.instance));
      };
    }, []);
    const mapStateToProps = useMemo(makeMapStateToPropsSelector, []);
    const newProps = useSelector(state => mapStateToProps(state, instance), shallowEqual);
    //console.log(`wGS: ${JSON.stringify(Object.keys(newProps).map(key => `${key} ${newProps[key]}`))}`);
    return <WrappedComponent {...{ ...rest, ...newProps }} />;
  };
  wrapComponent.propTypes = { instance: PropTypes.string };
  return wrapComponent;
};
