import React from 'react';
import { GlobalStateProvider } from '@jsdevtools/tuneable';

export const GlobalStateDecorator = StoryFn => (
  <GlobalStateProvider>
    <StoryFn />
  </GlobalStateProvider>
);
