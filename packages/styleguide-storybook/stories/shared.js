import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStateProvider } from '@jsdt/tuneable';
import { actions, StateContext } from '@jsdt/tuneable';
import Tuneable from '@jsdt/tuneable-stardust-ui-plugin';
import Float from '@jsdt/float';

export const GlobalStateDecorator = StoryFn => (
  <GlobalStateProvider>
    <StoryFn />
  </GlobalStateProvider>
);

export const TuneableProvider = props => {
  const [, dispatch] = useContext(StateContext);
  return (
    <Tuneable.Provider
      instance="themer"
      theme="teams"
      onChange={(_first, selection) => {
        dispatch(actions.chg('suirdropdown', { value: selection.value }));
      }}
    >
      <div style={{ padding: '15px', background: '#bbb' }}>{props.children}</div>
    </Tuneable.Provider>
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
      <Tuneable.Dropdown
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
