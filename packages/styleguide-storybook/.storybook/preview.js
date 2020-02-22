import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { DocsPage } from 'storybook-addon-deps/blocks';
import {
  INITIAL_VIEWPORTS,
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  options: {
    showRoots: true,
    showPanel: true,
    panelPosition: 'bottom',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      // or ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: [
    { name: 'jsdevtools', value: '#eeeeee', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// eslint-disable-next-line prettier/prettier
// addDecorator(story => <>{story()}</>);
