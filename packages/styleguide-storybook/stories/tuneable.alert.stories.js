import React, { useContext } from 'react';
import Tuneable from '@jsdt/tuneable-stardust-ui-plugin';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

export default {
  title: 'Components/Tuneable/Alert',
  component: Tuneable.Alert,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const DefaultAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Default" />
    <br />
    <br />
    <Tuneable.Alert content="This is a default alert" />
  </>
);

export const InfoAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Info" />
    <br />
    <br />
    <Tuneable.Alert info content="This is an informational alert" />
  </>
);

export const DangerAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Danger" />
    <br />
    <br />
    <Tuneable.Alert danger content="This is a danger alert" />
  </>
);

export const WarningAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Warning" />
    <br />
    <br />
    <Tuneable.Alert warning content="This is a warning alert" />
  </>
);

export const SuccessAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Success" />
    <br />
    <br />
    <Tuneable.Alert success content="This is a success alert" />
  </>
);

export const OofAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="OOF" />
    <br />
    <br />
    <Tuneable.Alert
      variables={{
        oof: true,
      }}
      action={{
        icon: 'close',
      }}
      content="This is an OOF alert"
    />
  </>
);

export const ActionAlert = () => {
  const [, dispatch] = StateContext && useContext(StateContext)
    ? useContext(StateContext)
    : [null, () => console.log(`dispatch undefined`)];

  console.log(`StateContext ${JSON.stringify(StateContext.Provider._context._currentValue)}`);
  console.log(`useContext ${JSON.stringify(useContext(StateContext))}`);

  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Action" />
      <br />
      <br />
      <Tuneable.Alert
        instance="alert1"
        content="This is a closable alert"
        action={{
          icon: 'close',
          onClick: () => {
            dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }));
            dispatch(actions.chg('alert1', { open: false }));
          },
        }}
      />
    </>
  );
};

export const AttachedAlert = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Attached" />
    <br />
    <br />
    <Tuneable.Alert attached content="This is a top attached alert" />
    <Tuneable.Input fluid placeholder="Name..." />
    <br /> <br />
    <Tuneable.Input fluid placeholder="Surname..." />
    <Tuneable.Alert attached="bottom" content="This is a bottom attached alert" />
  </>
);

DefaultAlert.story = { name: 'Default' };
InfoAlert.story = { name: 'Info' };
DangerAlert.story = { name: 'Danger' };
WarningAlert.story = { name: 'Warning' };
SuccessAlert.story = { name: 'Success' };
OofAlert.story = { name: 'Oof' };
ActionAlert.story = { name: 'Action' };
AttachedAlert.story = { name: 'Attached' };
