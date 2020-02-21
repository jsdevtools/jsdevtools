import React, { useContext } from 'react';
import Tuneable from '@jsdt/tuneable-stardust-ui-plugin';
// import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';
import { actions, StateContext } from '@jsdt/tuneable';

export default {
  title: 'Components/Tuneable/Dialog',
  component: Tuneable.Dialog,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

const DefaultDialog = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Dialog
        instance="dialog1"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        onCancel={() => dispatch(actions.chg('dialog1', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog1', { open: false }))}
      />
      <Tuneable.Text size="large" weight="bold" content="Default" />
      <br />
      <Tuneable.Button
        instance="button1"
        onClick={() => dispatch(actions.chg('dialog1', { open: true }))}
        content="Open a dialog"
      />
    </>
  );
};

const ContentDialog = () => {
  const [, dispatch] = useContext(StateContext);
  return (
    <>
      <ThemeSelector />
      <Tuneable.Dialog
        instance="dialog2"
        cancelButton="Cancel"
        confirmButton="Confirm"
        header="Action confirmation"
        content="Are you sure you want to confirm this action?"
        onCancel={() => dispatch(actions.chg('dialog2', { open: false }))}
        onConfirm={() => dispatch(actions.chg('dialog2', { open: false }))}
      />
      <Tuneable.Text size="large" weight="bold" content="Default" />
      <br />
      <Tuneable.Button
        instance="button2"
        onClick={() => dispatch(actions.chg('dialog2', { open: true }))}
        content="Open a dialog"
      />
    </>
  );
};

DefaultDialog.story = { name: 'Default' };
ContentDialog.story = { name: 'Content' };
