import React, { useContext } from 'react';
import { Dialog, Text, Button } from '@jsdt/tuneable-fluentui';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

export default {
  title: 'Components/Tuneable/Dialog',
  component: Dialog,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const DefaultDialog = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Dialog
        instance="dialog1"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        onCancel={() => dispatch(actions.chg('dialog1', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog1', { open: false }))}
      />
      <Text size="large" weight="bold" content="Default" />
      <br />
      <Button
        instance="button1"
        onClick={() => dispatch(actions.chg('dialog1', { open: true }))}
        content="Open a dialog"
      />
    </>
  );
};

export const ContentDialog = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Dialog
        instance="dialog2"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        content="Are you sure you want to confirm this action?"
        onCancel={() => dispatch(actions.chg('dialog2', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog2', { open: false }))}
      />
      <Text size="large" weight="bold" content="Default" />
      <br />
      <Button
        instance="button2"
        onClick={() => dispatch(actions.chg('dialog2', { open: true }))}
        content="Open a dialog"
      />
    </>
  );
};

DefaultDialog.story = { name: 'Default Dialog' };
ContentDialog.story = { name: 'Dialog with Content' };
