import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStateProvider, actions, StateContext } from '@jsdt/tuneable';
import { Provider, Dropdown } from '@jsdt/tuneable-fluentui';
import Float from '@jsdt/float';

export const GlobalStateDecorator = StoryFn => (
  <GlobalStateProvider>
    <StoryFn />
  </GlobalStateProvider>
);

const TuneableProvider = props => {
  const [, dispatch] = useContext(StateContext);
  return (
    <Provider
      instance="themer"
      theme="teams"
      onChange={(_first, selection) => {
        dispatch(actions.chg('suirdropdown', { value: selection.value }));
      }}
    >
      {props.children}
    </Provider>
  );
};

TuneableProvider.propTypes = {
  children: PropTypes.element,
};

export const ThemeProvider = storyFn => <TuneableProvider>{storyFn()}</TuneableProvider>;

export const ThemeSelector = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <Float placement="topRight" zIndex={20} margin="10px">
      <Dropdown
        instance="suirdropdown"
        placeholder={'Make a selection...'}
        onSelectedChange={(a, b) => {
          dispatch(actions.chg('themer', { theme: b.value }));
        }}
        items={['teams', 'teamsDark', 'teamsHighContrast']}
      />
    </Float>
  );
};
