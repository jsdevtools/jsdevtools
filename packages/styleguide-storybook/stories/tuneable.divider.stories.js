import React /*, { useContext }*/ from 'react';
// import Float from '@jsdt/float';
import { Text, Divider, ProviderConsumer } from '@jsdt/tuneable-fluentui';
//import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Tuneable/Divider',
  component: Divider,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'kindleFireHD' },
  },
};

export const DefaultDivider = () => {
  return (
    <>
      <ThemeSelector />
      <Text size="large" weight="bold" content="Default" />
      <br />
      <Text size="small" content="Some text followed by a divider." />
      <Divider />
    </>
  );
};

export const DividerWithContent = () => {
  return (
    <>
      <ThemeSelector />
      <Text size="large" weight="bold" content="Divider with content:" />
      <br />
      <Text
        ssize="small"
        content="A Divider can contain text or other content displayed along with the line."
      />
      <Divider content="Some text" />
      <Divider>Children API</Divider>
    </>
  );
};

export const ColoredDivider = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Color" />
    <br />
    <Text ssize="small" content="A divider can have different colors." />
    <ProviderConsumer
      render={({ siteVariables: { emphasisColors, naturalColors } }) =>
        _.map({ ...emphasisColors, ...naturalColors }, (variants, name) => (
          <Divider key={name} color={name} content={_.startCase(name)} />
        ))
      }
    />
  </>
);

export const SizedDivider = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Size" />
    <br />
    <Text ssize="small" content="A divider can have different sizes." />
    {_.times(11, i => {
      const size = i;
      return <Divider key={size} size={size} content={`Size ${size}`} />;
    })}
  </>
);

export const ImportantDivider = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Important" />
    <br />
    <Text ssize="small" content="A divider can appear more important and draw the user's attention." />
    <Divider important content="This is important" />
    <Divider important>So is this</Divider>
  </>
);

export const FittedDivider = () => (
  <>
    <ThemeSelector />
    <Text size="large" weight="bold" content="Fitted" />
    <br />
    <Text ssize="small" content="There is no space between this text and the divider." />
    <Divider fitted />
    <Text ssize="small" content="There is no space between this text and the divider." />
  </>
);

DefaultDivider.story = { name: 'Default' };
DividerWithContent.story = { name: 'Content' };
ColoredDivider.story = { name: 'Color' };
SizedDivider.story = { name: 'Size' };
ImportantDivider.story = { name: 'Important' };
FittedDivider.story = { name: 'Fitted' };
