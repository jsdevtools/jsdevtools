import React /*, { useContext }*/ from 'react';
// import Float from '@jsdevtools/float';
import { Text, Divider, ProviderConsumer } from '@jsdevtools/tuneable-fluentui';
//import { storiesOf } from '@storybook/react';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { withA11y } from '@storybook/addon-a11y';
import { fullViewport } from '../.storybook/addons/fullViewport';
import _ from 'lodash';

export default {
  title: 'Components/Tuneable/Divider',
  component: Divider,
  decorators: [fullViewport, withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const DefaultDivider = () => {
  return (
    <Overlays content="Default" target={['defaultDivider']}>
      <Text size="small" content="Some text followed by a divider." />
      <Divider instance="defaultDivider" />
    </Overlays>
  );
};

export const DividerWithContent = () => {
  return (
    <Overlays
      content="With Content"
      subContent="A Divider can contain text or other content displayed along with the line."
      target={['dividerWithContent']}
    >
      <Divider instance="dividerWithConent" content="Some text" />
      <Divider>Children API</Divider>
    </Overlays>
  );
};

export const ColoredDivider = foo => (
  <Overlays
    content="Color"
    subContent="A divider can have different colors."
    target={[`coloredDivider-grey`, `coloredDivider-orange`, `coloredDivider-pink`]}
  >
    <ProviderConsumer
      render={({ siteVariables: { contextualColors, naturalColors } }) =>
        _.map({ ...contextualColors, ...naturalColors }, (variants, name) => (
          <Divider instance={`coloredDivider-${name}`} key={name} color={name} content={_.startCase(name)} />
        ))
      }
    />
    <Divider instance={`coloredDivider-pink`} key={`pink`} color={`pink`} content={`pink`} />
  </Overlays>
);

export const SizedDivider = () => (
  <Overlays content="Size" subContent="A divider can have different sizes." target={['sizedDivider']}>
    {_.times(11, i => {
      const size = i;
      return <Divider instance={`sizedDivider${size}x`} key={size} size={size} content={`Size ${size}`} />;
    })}
  </Overlays>
);

export const ImportantDivider = () => (
  <Overlays
    content="Important"
    subContent="A divider can appear more important and draw the user's attention."
    target={['importantDivider']}
  >
    <Divider instance="importantDivider" important content="This is important" />
    <Divider important>So is this</Divider>
  </Overlays>
);

export const FittedDivider = () => (
  <Overlays content="Fitted" target={['fittedDivider']}>
    <Text size="small" content="There is no space between this text and the divider." />
    <Divider instance="fittedDivider" fitted />
    <Text size="small" content="There is no space between this text and the divider." />
  </Overlays>
);

DefaultDivider.story = { name: 'Default' };
DividerWithContent.story = { name: 'With Content' };
ColoredDivider.story = { name: 'Color' };
SizedDivider.story = { name: 'Size' };
ImportantDivider.story = { name: 'Important' };
FittedDivider.story = { name: 'Fitted' };
