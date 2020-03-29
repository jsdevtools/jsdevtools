import { addons } from '@storybook/addons';
import theme from './jsdtTheme';

addons.setConfig({
  theme,
  previewTabs: {
    // the order of the tabs is configured by the order here
    'storybook/docs/panel': 'MDX', // the configuration is either an object or a title string
    canvas: null,
  },
  panelPosition: 'bootom',
  showPanel: false,
  isToolShown: false,
});
