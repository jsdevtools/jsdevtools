import React from 'react';
import PropTypes from 'prop-types';
import { actions, useDispatch } from '@jsdevtools/tuneable';
import { Provider } from '@jsdevtools/tuneable-fluentui';

export const ThemeProvider = storyFn => <TuneableProvider>{storyFn()}</TuneableProvider>;

const TuneableProvider = props => {
  const dispatch = useDispatch();
  return (
    <Provider
      instance="themer"
      theme="teams"
      onChange={(_first, selection) => {
        //console.log(`1st: ${JSON.stringify_first}`);
        //console.log(`2nd: ${selection}`);
        //console.log(`3rd: ${third}`);
        if (selection !== undefined) dispatch(actions.chg('suirdropdown', { value: selection.value }));
      }}
    >
      {props.children}
    </Provider>
  );
};

TuneableProvider.propTypes = {
  children: PropTypes.element,
};
