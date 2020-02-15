import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#f93d3d',
  colorSecondary: '#262c35',

  // UI
  appBg: '#fafafa',
  appContentBg: '#eeeeee',
  appBorderColor: '#262c35',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: '#fafafa',

  // Toolbar default and active colors
  barTextColor: '#fafafa',
  barSelectedColor: '#262c35',
  barBg: '#f93d3d',

  // Form colors
  inputBg: '#fafafa',
  inputBorder: 'silver',
  inputTextColor: '#262c35',
  inputBorderRadius: 4,

  brandTitle: 'JSDevTools',
  brandUrl: 'https://www.jsdevtools.com',
  brandImage:
    // eslint-disable-next-line max-len
    'https://res.cloudinary.com/jsdevtools/image/upload/ar_1:1,bo_2px_solid_rgb:f93d3d,c_fill,g_auto,r_max,w_40/l_text:Times%20New%20Roman_30_bold:JSDevTools,g_west,x_50/jslogo.png',
});
