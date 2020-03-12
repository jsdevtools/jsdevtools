import React, { useContext } from 'react';
import { Alert, Text, Input } from '@jsdt/tuneable-fluentui';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

export default {
  title: 'Components/Tuneable/Alert',
  component: Alert,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const DefaultAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Default" />
    <br />
    <br />
    <Alert content="This is a default alert" />
  </>
);

export const InfoAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Info" />
    <br />
    <br />
    <Alert info content="This is an informational alert" />
  </>
);

export const DangerAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Danger" />
    <br />
    <br />
    <Alert danger content="This is a danger alert" />
  </>
);

export const WarningAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Warning" />
    <br />
    <br />
    <Alert warning content="This is a warning alert" />
  </>
);

export const SuccessAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Success" />
    <br />
    <br />
    <Alert success content="This is a success alert" />
  </>
);

export const OofAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="OOF" />
    <br />
    <br />
    <Alert
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
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Text size="large" weight="bold" content="Action" />
      <br />
      <br />
      <Alert
        instance="alert1"
        content="This is a closable alert"
        dismissible
        onDismiss={() => {
          dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }));
          dispatch(actions.chg('alert1', { visible: false }));
        }}
      />
    </>
  );
};

export const AttachedAlert = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Attached" />
    <br />
    <br />
    <Alert attached content="This is a top attached alert" />
    <Input fluid placeholder="Name..." />
    <br /> <br />
    <Input fluid placeholder="Surname..." />
    <Alert attached="bottom" content="This is a bottom attached alert" />
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
