import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStateProvider, actions, useDispatch } from '@jsdevtools/tuneable';
import { Provider, Dropdown, Flex, Text } from '@jsdevtools/tuneable-fluentui';
import Float from '@jsdevtools/float';
import { MyDiv } from '@jsdevtools/tuneable-jsdt';
import { radioGroupBehavior } from '@fluentui/react';

export const GlobalStateDecorator = StoryFn => (
  <GlobalStateProvider>
    <StoryFn />
  </GlobalStateProvider>
);

const TuneableProvider = props => {
  const dispatch = useDispatch();
  return (
    <Provider
      instance="themer"
      theme="teams"
      onChange={(_first, selection) => {
        dispatch(actions.chg('suirdropdown', { value: selection.value }));
      }}
    >
      {props.children}
    </Provider>
  );
};

TuneableProvider.propTypes = {
  children: PropTypes.element,
};

export const ThemeProvider = storyFn => <TuneableProvider>{storyFn()}</TuneableProvider>;

export const Overlays = props => {
  return (
    <>
      <ThemeSelector content={props.content} subContent={props.subContent} />
      <DisplayArea content={props.content} subContent={props.subContent} target={props.target}>
        {props.children}
      </DisplayArea>
    </>
  );
};

Overlays.propTypes = {
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string,
  target: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const OptionMenu = props => (
  <aside style={{ position: 'sticky', top: '0px' }}>
    <MyDiv height={400} width={300} boxShadow="-8px 16px 8px   #292929" target={props.target} />
  </aside>
);

OptionMenu.propTypes = {
  target: PropTypes.string.isRequired,
};

const DisplayArea = props => (
  <>
    <div
      style={{
        padding: '10px 10px 6px 10px',
        background: 'rgba(180, 180, 180, .5)',
        backdropFilter: 'blur(8px)',
        width: '100%',
        borderBottom: '1px solid rgba(0, 0, 0, .1)',
        opacity: 0,
      }}
    >
      <Flex space="between">
        <Text style={{ margin: '4px 0px 8px 0px' }} size="large" weight="bold" content={`${props.content}`} />
      </Flex>
      {props.subContent ? <Text size="small" content={props.subContent} /> : null}
    </div>
    <main style={{ minHeight: '500px', padding: '10px 10px 10px 10px' }}>
      <div style={{ width: 'calc(100% - 314px)', backgroundColor: 'pink' }}>{props.children}</div>
    </main>
  </>
);

DisplayArea.propTypes = {
  children: PropTypes.element.isRequired,
  target: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string,
};

const ThemeSelector = props => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: '10px 10px 6px 10px',
        background: 'rgba(180, 180, 180, .5)',
        backdropFilter: 'blur(8px)',
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        borderBottom: '1px solid rgba(0, 0, 0, .1)',
      }}
    >
      <Flex space="between">
        <Text style={{ margin: '4px 0px 8px 0px' }} size="large" weight="bold" content={`${props.content}`} />
        <Dropdown
          instance="suirdropdown"
          placeholder={'Make a selection...'}
          onSelectedChange={(a, b) => {
            dispatch(actions.chg('themer', { theme: b.value }));
          }}
          items={['teams', 'teamsDark', 'teamsHighContrast']}
        />
      </Flex>
      {props.subContent ? <Text size="small" content={props.subContent} /> : null}
    </div>
  );
};

ThemeSelector.propTypes = {
  content: PropTypes.string,
  subContent: PropTypes.string,
};
