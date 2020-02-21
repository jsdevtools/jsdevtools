import React /*, { useContext }*/ from 'react';
// import Float from '@jsdt/float';
import Tuneable from '@jsdt/tuneable-stardust-ui-plugin';
//import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, /*TuneableProvider,*/ ThemeProvider, ThemeSelector } from './shared.js';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Tuneable/Divider',
  component: Tuneable.Divider,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

const DefaultDivider = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Default" />
      <br />
      <Tuneable.Text size="small" content="Some text followed by a divider." />
      <Tuneable.Divider />
    </>
  );
};

const DividerWithContent = () => {
  return (
    <>
      <ThemeSelector />
      <Tuneable.Text size="large" weight="bold" content="Divider with content:" />
      <br />
      <Tuneable.Text
        ssize="small"
        content="A Divider can contain text or other content displayed along with the line."
      />
      <Tuneable.Divider content="Some text" />
      <Tuneable.Divider>Children API</Tuneable.Divider>
    </>
  );
};

const ColoredDivider = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Color" />
    <br />
    <Tuneable.Text ssize="small" content="A divider can have different colors." />
    <Tuneable.ProviderConsumer
      render={({ siteVariables: { emphasisColors, naturalColors } }) =>
        _.map({ ...emphasisColors, ...naturalColors }, (variants, name) => (
          <Tuneable.Divider key={name} color={name} content={_.startCase(name)} />
        ))
      }
    />
  </>
);

const SizedDivider = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Size" />
    <br />
    <Tuneable.Text ssize="small" content="A divider can have different sizes." />
    {_.times(11, i => {
      const size = i;
      return <Tuneable.Divider key={size} size={size} content={`Size ${size}`} />;
    })}
  </>
);

const ImportantDivider = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Important" />
    <br />
    <Tuneable.Text
      ssize="small"
      content="A divider can appear more important and draw the user's attention."
    />
    <Tuneable.Divider important content="This is important" />
    <Tuneable.Divider important>So is this</Tuneable.Divider>
  </>
);

const FittedDivider = () => (
  <>
    <ThemeSelector />
    <Tuneable.Text size="large" weight="bold" content="Fitted" />
    <br />
    <Tuneable.Text ssize="small" content="There is no space between this text and the divider." />
    <Tuneable.Divider fitted />
    <Tuneable.Text ssize="small" content="There is no space between this text and the divider." />
  </>
);

DefaultDivider.story = { name: 'Default' };
DividerWithContent.story = { name: 'Content' };
ColoredDivider.story = { name: 'Color' };
SizedDivider.story = { name: 'Size' };
ImportantDivider.story = { name: 'Important' };
FittedDivider.story = { name: 'Fitted' };
