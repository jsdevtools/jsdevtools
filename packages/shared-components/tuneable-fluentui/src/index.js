import React from 'react';
import PropTypes from 'prop-types';
import * as FUIR from '@fluentui/react';
import { withGlobalState } from '@jsdt/tuneable';
// import { withGlobalState } from '../../tuneable/src';

class TuneableProvider extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme && this.props.onChange) {
      this.props.onChange(undefined, { value: this.props.theme });
    }
  }

  render() {
    const { theme, ...rest } = this.props;
    return (
      <FUIR.Provider theme={FUIR.themes[theme]} {...rest}>
        {this.props.children}
      </FUIR.Provider>
    );
  }
}

TuneableProvider.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.element,
};

const ModAlert = props => {
  const { open, ...rest } = { open: true, ...props };
  return open === false ? null : <FUIR.Alert {...rest} />;
};

ModAlert.propTypes = {
  open: PropTypes.bool,
};

const Tuneable = {
  Provider: withGlobalState(TuneableProvider),
  Accordion: withGlobalState(FUIR.Accordion),
  Alert: withGlobalState(ModAlert),
  Animation: withGlobalState(FUIR.Animation),
  Avatar: withGlobalState(FUIR.Avatar),
  Button: withGlobalState(FUIR.Button),
  ButtonGroup: withGlobalState(FUIR.ButtonGroup),
  Chat: withGlobalState(FUIR.Chat),
  ChatItem: withGlobalState(FUIR.ChatItem),
  ChatMessage: withGlobalState(FUIR.ChatMessage),
  Dialog: withGlobalState(FUIR.Dialog),
  Divider: withGlobalState(FUIR.Divider),
  Dropdown: withGlobalState(FUIR.Dropdown),
  DropdownItem: withGlobalState(FUIR.DropdownItem),
  // DropdownLabel: withGlobalState(FUIR.DropdownLabel),
  DropdownSearchInput: withGlobalState(FUIR.DropdownSearchInput),
  FocusZoneMode: withGlobalState(FUIR.FocusZoneMode),
  Form: withGlobalState(FUIR.Form),
  FormField: withGlobalState(FUIR.FormField),
  Grid: withGlobalState(FUIR.Grid),
  Header: withGlobalState(FUIR.Header),
  HeaderDescription: withGlobalState(FUIR.HeaderDescription),
  Icon: withGlobalState(FUIR.Icon),
  Image: withGlobalState(FUIR.Image),
  Input: withGlobalState(FUIR.Input),
  ItemLayout: withGlobalState(FUIR.ItemLayout),
  Label: withGlobalState(FUIR.Label),
  Layout: withGlobalState(FUIR.Layout),
  List: withGlobalState(FUIR.List),
  ListItem: withGlobalState(FUIR.ListItem),
  Menu: withGlobalState(FUIR.Menu),
  MenuItem: withGlobalState(FUIR.MenuItem),
  Popup: withGlobalState(FUIR.Popup),
  PopupContent: withGlobalState(FUIR.PopupContent),
  Portal: withGlobalState(FUIR.Portal),
  ProviderConsumer: withGlobalState(FUIR.ProviderConsumer),
  RadioGroup: withGlobalState(FUIR.RadioGroup),
  RadioGroupItem: withGlobalState(FUIR.RadioGroupItem),
  Ref: withGlobalState(FUIR.Ref),
  Segment: withGlobalState(FUIR.Segment),
  Status: withGlobalState(FUIR.Status),
  Text: withGlobalState(FUIR.Text),
  Tree: withGlobalState(FUIR.Tree),
};

export default Tuneable;
