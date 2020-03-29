import React, { useContext } from 'react';
import { Alert, Text, Input } from '@jsdevtools/tuneable-fluentui';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { withA11y } from '@storybook/addon-a11y';
import { actions, useDispatch } from '@jsdevtools/tuneable';

export default {
  title: 'Components/Tuneable/Alert',
  component: Alert,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const DefaultAlert = () => (
  <Overlays content="Default" target={['defaultAlert']}>
    <Alert instance="defaultAlert" content="This is a default alert" />
  </Overlays>
);

export const InfoAlert = () => (
  <Overlays content="Info" target={['infoAlert']}>
    <Alert instance="infoAlert" info content="This is an informational alert" />
  </Overlays>
);

export const DangerAlert = () => (
  <Overlays content="Danger" target={['dangerAlert']}>
    <Alert instance="dangerAlert" danger content="This is a danger alert" />
  </Overlays>
);

export const WarningAlert = () => (
  <Overlays content="Warning" target={['warningAlert']}>
    <Alert instance="warningAlert" warning content="This is a warning alert" />
  </Overlays>
);

export const SuccessAlert = () => (
  <Overlays content="Success" target={['successAlert']}>
    <Alert instance="successAlert" success content="This is a success alert" />
  </Overlays>
);

export const OofAlert = () => (
  <Overlays content="Oof" target={['oofAlert']}>
    <Alert
      instance="oofAlert"
      variables={{
        oof: true,
      }}
      action={{
        icon: 'close',
      }}
      content="This is an OOF alert"
    />
  </Overlays>
);

export const ActionAlert = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Action" target={['actionAlert']}>
      <Alert
        instance="actionAlert"
        content="This is a closable alert"
        dismissible
        onDismiss={() => {
          dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }));
          dispatch(actions.chg('actionAlert', { visible: false }));
        }}
      />
    </Overlays>
  );
};

export const AttachedAlert = () => (
  <Overlays content="Attached" target={['attachedAlert']}>
    <>
      <Alert instance="attachedAlert" attached content="This is a top attached alert" />
      <Input fluid placeholder="Name..." />
      <br /> <br />
      <Input fluid placeholder="Surname..." />
      <Alert attached="bottom" content="This is a bottom attached alert" />
    </>
  </Overlays>
);

DefaultAlert.story = { name: 'Default' };
InfoAlert.story = { name: 'Info' };
DangerAlert.story = { name: 'Danger' };
WarningAlert.story = { name: 'Warning' };
SuccessAlert.story = { name: 'Success' };
OofAlert.story = { name: 'Oof' };
ActionAlert.story = { name: 'Action' };
AttachedAlert.story = { name: 'Attached' };
