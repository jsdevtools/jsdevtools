import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Input } from '@jsdt/input';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [withA11y],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const labeled = () => <Input id="test1" label={text('Label', 'Username')} />;
export const labeledAndTyped = () => (
  <Input id="test2" label={text('Label', 'Username')} type={text('Type', 'password')} />
);

labeled.story = { name: 'Default Input' };
labeledAndTyped.story = { name: 'Input w/ Type' };
