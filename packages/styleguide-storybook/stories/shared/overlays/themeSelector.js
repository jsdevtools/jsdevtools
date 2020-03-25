import React from 'react';
import { actions, useDispatch } from '@jsdevtools/tuneable';
import { Dropdown } from '@jsdevtools/tuneable-fluentui';

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  return (
    <Dropdown
      instance="suirdropdown"
      placeholder={'Make a selection...'}
      onSelectedChange={(a, b) => {
        dispatch(actions.chg('themer', { theme: b.value }));
      }}
      items={['teams', 'teamsDark', 'teamsHighContrast']}
    />
  );
};
