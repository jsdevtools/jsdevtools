import React, { useContext } from 'react';
import { Dialog, Text, Button } from '@jsdevtools/tuneable-fluentui';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, useDispatch } from '@jsdevtools/tuneable';

export default {
  title: 'Components/Tuneable/Dialog',
  component: Dialog,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const DefaultDialog = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Default" target="dialog1">
      <Dialog
        instance="dialog1"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        onCancel={() => dispatch(actions.chg('dialog1', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog1', { open: false }))}
      />
      <Button
        instance="button1"
        onClick={() => dispatch(actions.chg('dialog1', { open: true }))}
        content="Open a dialog"
      />
    </Overlays>
  );
};

export const ContentDialog = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="With Content" target="dialog2">
      <Dialog
        instance="dialog2"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        content="Are you sure you want to confirm this action?"
        onCancel={() => dispatch(actions.chg('dialog2', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog2', { open: false }))}
      />
      <Button
        instance="button2"
        onClick={() => dispatch(actions.chg('dialog2', { open: true }))}
        content="Open a dialog"
      />
    </Overlays>
  );
};

DefaultDialog.story = { name: 'Default Dialog' };
ContentDialog.story = { name: 'Dialog with Content' };
